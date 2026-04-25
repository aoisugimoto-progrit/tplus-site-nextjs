'use client';

import { useState, useEffect } from 'react';

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
  const [isOpen, setIsOpen] = useState(true);
  const [activeId, setActiveId] = useState('');

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

  const toggleSidebar = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    if (onToggle) {
      onToggle(newState);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 90;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* トグルボタン */}
      <button
        className={`fixed top-5 z-[1101] w-9 h-9 bg-white/10 border border-white/30 rounded-md text-white flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-110 ${
          isOpen ? 'left-[220px]' : 'left-5 bg-[#0A5046]/95 border-[#0A5046] shadow-lg'
        }`}
        onClick={toggleSidebar}
      >
        <span className="transition-transform duration-300">
          {isOpen ? '<' : '>'}
        </span>
      </button>

      {/* サイドバー */}
      <aside
        className={`fixed left-0 top-0 w-[260px] h-screen bg-gradient-to-b from-[rgba(15,35,45,0.95)] to-[rgba(10,25,35,0.98)] backdrop-blur-md text-white px-6 pt-5 pb-10 overflow-y-auto z-[1050] shadow-[4px_0_20px_rgba(0,0,0,0.3)] transition-transform duration-300 ${
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
                  className={`block w-full text-left py-2 px-3 rounded-md transition-all duration-200 ${
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
                          className={`block w-full text-left py-1.5 px-3 text-sm rounded-md transition-all duration-200 ${
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
