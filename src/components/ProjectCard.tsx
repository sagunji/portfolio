
import React, { useState } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  imageUrl,
  demoUrl,
  githubUrl,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 transition-all duration-300 ease-out-quint"
      style={{ 
        opacity: 0, 
        transform: 'translateY(20px)',
        animation: 'fade-in-up 0.5s ease-out forwards',
        animationDelay: `${index * 150}ms`,
        willChange: 'opacity, transform'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video w-full overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out-quint"
          style={{ 
            backgroundImage: `url(${imageUrl})`,
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span 
              key={i} 
              className="px-2 py-1 bg-secondary text-xs font-medium rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-3 mt-auto">
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-foreground/70 hover:text-primary transition-colors duration-200"
              aria-label={`View ${title} source code on GitHub`}
            >
              <Github size={18} />
            </a>
          )}
          
          {demoUrl && (
            <a 
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-1 text-sm font-medium",
                "text-foreground/70 hover:text-primary transition-colors duration-200"
              )}
            >
              <span>View Project</span>
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
