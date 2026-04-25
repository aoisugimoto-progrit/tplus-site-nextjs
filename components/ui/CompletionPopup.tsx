'use client';

import { useEffect, useState } from 'react';

export default function CompletionPopup() {
  const [popup, setPopup] = useState<{
    show: boolean;
    percentage: number;
    isComplete: boolean;
  }>({ show: false, percentage: 0, isComplete: false });

  const [shownMilestones] = useState(new Set<number>());

  useEffect(() => {
    const milestones = [20, 40, 60, 80, 100];

    const calculateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollableHeight = documentHeight - windowHeight;
      return scrollableHeight > 0 ? Math.min(100, Math.round((scrollTop / scrollableHeight) * 100)) : 0;
    };

    const checkProgress = () => {
      const progress = calculateProgress();

      milestones.forEach(milestone => {
        if (progress >= milestone && !shownMilestones.has(milestone)) {
          shownMilestones.add(milestone);
          const isComplete = milestone === 100;

          setPopup({ show: true, percentage: milestone, isComplete });

          setTimeout(() => {
            setPopup(prev => ({ ...prev, show: false }));
          }, 3000);
        }
      });
    };

    window.addEventListener('scroll', checkProgress);
    checkProgress();

    return () => window.removeEventListener('scroll', checkProgress);
  }, [shownMilestones]);

  if (!popup.show) return null;

  return (
    <div className="fixed bottom-8 left-8 z-50 bg-white rounded-2xl shadow-2xl p-6 flex items-center gap-4 animate-slide-in-left">
      <div className="text-4xl">(•̀ᴗ•́)و</div>
      <div>
        <div className="text-3xl font-bold text-[#0A5046]">{popup.percentage}%</div>
        <div className="text-sm text-gray-600">
          {popup.isComplete ? '読了お疲れ様でした！' : '読了'}
        </div>
      </div>
    </div>
  );
}
