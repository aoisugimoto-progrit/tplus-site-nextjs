'use client';

import { useState, useEffect, useRef } from 'react';

interface SidebarItem {
  title: string;
  id: string;
  children?: { title: string; id: string }[];
}

interface SidebarProps {
  items: SidebarItem[];
  onToggle?: (isOpen: boolean) => void;
}

export default function Sidebar({ items, onToggle }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState('');
  const asideRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)');
    const apply = () => {
      const open = mql.matches;
      setIsOpen(open);
      onToggle?.(open);
    };
    apply();
    mql.addEventListener('change', apply);
    return () => mql.removeEventListener('change', apply);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item => document.getElementById(item.id)).filter(Boolean);
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveId(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  // モバイルで開いている時のみ ESC/スクロールロック
  useEffect(() => {
    if (!isOpen) return;
    const isMobile = !window.matchMedia('(min-width: 768px)').matches;
    if (!isMobile) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        onToggle?.(false);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onToggle]);

  const toggleSidebar = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle?.(newState);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 90;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      if (!window.matchMedia('(min-width: 768px)').matches) {
        setIsOpen(false);
        onToggle?.(false);
      }
    }
  };

  return (
    <>
      <button
        ref={triggerRef}
        onClick={toggleSidebar}
        aria-expanded={isOpen}
        aria-controls="site-sidebar"
        aria-label={isOpen ? '目次を閉じる' : '目次を開く'}
        className={`fixed top-[max(env(safe-area-inset-top),12px)] z-[1101] inline-flex items-center justify-center w-11 h-11 rounded-md border text-white transition-all duration-300 hover:scale-[1.02] ${
          isOpen
            ? 'left-3 md:left-[220px] bg-white/10 border-white/30 hover:bg-white/20'
            : 'left-3 bg-[#0A5046]/95 border-[#0A5046] shadow-lg hover:bg-[#0A5046]'
        }`}
      >
        <span className="text-lg leading-none">
          {isOpen ? '<' : '>'}
        </span>
      </button>

      <div
        onClick={() => { setIsOpen(false); onToggle?.(false); }}
        aria-hidden
        className={`fixed inset-0 bg-black/50 z-[1040] md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      <aside
        ref={asideRef}
        id="site-sidebar"
        role="navigation"
        aria-label="目次"
        aria-hidden={!isOpen}
        className={`fixed left-0 top-0 w-[85vw] max-w-[300px] md:w-[260px] h-[100dvh] bg-gradient-to-b from-[rgba(15,35,45,0.95)] to-[rgba(10,25,35,0.98)] backdrop-blur-md text-white px-6 pb-[max(env(safe-area-inset-bottom),40px)] pt-[max(env(safe-area-inset-top),20px)] overflow-y-auto z-[1050] shadow-[4px_0_20px_rgba(0,0,0,0.3)] transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <h3 className="text-xl font-bold mb-6 mt-12 text-white/90">目次</h3>
        <nav>
          <ul className="space-y-2">
            {items.map((item, i) => (
              <li key={i}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2.5 px-3 rounded-md transition-all duration-200 min-h-11 ${
                    activeId === item.id
                      ? 'bg-white/20 text-white font-semibold'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item.title}
                </button>
                {item.children && (
                  <ul className="ml-4 mt-1 space-y-1">
                    {item.children.map((child, j) => (
                      <li key={j}>
                        <button
                          onClick={() => scrollToSection(child.id)}
                          className={`block w-full text-left py-2 px-3 text-sm rounded-md transition-all duration-200 min-h-10 ${
                            activeId === child.id
                              ? 'bg-white/15 text-white'
                              : 'text-white/60 hover:bg-white/5 hover:text-white/80'
                          }`}
                        >
                          {child.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
