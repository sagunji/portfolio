
import React from 'react';
import { cn } from '@/lib/utils';

interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
  level?: number; // 1-5
  className?: string;
  index: number;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({
  name,
  icon,
  level = 3,
  className,
  index,
}) => {
  return (
    <div 
      className={cn(
        "flex items-center gap-2 px-4 py-3 rounded-lg bg-white border border-gray-200 shadow-sm",
        "transition-all duration-300 hover:-translate-y-1 hover:shadow",
        className
      )}
      style={{ 
        opacity: 0, 
        transform: 'translateY(20px)',
        animation: 'fade-in-up 0.5s ease-out forwards',
        animationDelay: `${100 + index * 50}ms`,
        willChange: 'opacity, transform'
      }}
    >
      {icon && (
        <span className="text-primary">{icon}</span>
      )}
      
      <span className="font-medium">{name}</span>
      
      {level > 0 && (
        <div className="ml-auto flex gap-[3px]">
          {Array.from({ length: 5 }).map((_, i) => (
            <div 
              key={i}
              className={cn(
                "w-[6px] h-[6px] rounded-full",
                i < level ? "bg-primary" : "bg-gray-200"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillBadge;
