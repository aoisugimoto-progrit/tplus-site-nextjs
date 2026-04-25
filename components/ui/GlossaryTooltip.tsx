'use client';

import { useEffect, useState } from 'react';

export default function GlossaryTooltip() {
  const [tooltip, setTooltip] = useState<{
    visible: boolean;
    content: string;
    x: number;
    y: number;
  }>({ visible: false, content: '', x: 0, y: 0 });

  useEffect(() => {
    let hideTimeout: NodeJS.Timeout;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target && typeof target.getAttribute === 'function') {
        const definition = target.getAttribute('data-definition');

        if (definition) {
          clearTimeout(hideTimeout);

          const rect = target.getBoundingClientRect();
          let top = rect.top + window.scrollY - 80;
          let left = rect.left + window.scrollX;

          if (top < window.scrollY + 10) {
            top = rect.bottom + window.scrollY + 12;
          }

          if (left + 300 > window.innerWidth) {
            left = window.innerWidth - 320;
          }

          setTooltip({
            visible: true,
            content: definition,
            x: left,
            y: top
          });
        }
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target && typeof target.getAttribute === 'function' && target.getAttribute('data-definition')) {
        hideTimeout = setTimeout(() => {
          setTooltip(prev => ({ ...prev, visible: false }));
        }, 200);
      }
    };

    document.addEventListener('mouseover', handleMouseOver, true);
    document.addEventListener('mouseout', handleMouseOut, true);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver, true);
      document.removeEventListener('mouseout', handleMouseOut, true);
      clearTimeout(hideTimeout);
    };
  }, []);

  if (!tooltip.visible) return null;

  return (
    <div
      className="fixed z-[9999] max-w-xs bg-gray-900 text-white text-sm px-4 py-3 rounded-lg shadow-2xl pointer-events-none tooltip zoom-in"
      style={{
        top: `${tooltip.y}px`,
        left: `${tooltip.x}px`,
        opacity: tooltip.visible ? 1 : 0,
        transition: 'opacity 0.2s, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
        transform: tooltip.visible ? 'scale(1)' : 'scale(0.8)'
      }}
    >
      {tooltip.content}
      <div className="absolute -bottom-2 left-4 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-gray-900"></div>
    </div>
  );
}
