
import React from 'react';
import AnimatedText from './AnimatedText';
import SkillBadge from './SkillBadge';
import { 
  Code, Palette, Database, Layout, LineChart, GitFork, 
  Terminal, Globe, Laptop, Smartphone, TestTube, ServerCog 
} from 'lucide-react';

const Skills: React.FC = () => {
  const frontendSkills = [
    { name: 'React', level: 5, icon: <Code size={18} /> },
    { name: 'TypeScript', level: 4, icon: <Code size={18} /> },
    { name: 'JavaScript', level: 5, icon: <Code size={18} /> },
    { name: 'CSS/SCSS', level: 5, icon: <Palette size={18} /> },
    { name: 'HTML', level: 5, icon: <Code size={18} /> },
    { name: 'TailwindCSS', level: 5, icon: <Palette size={18} /> },
    { name: 'NextJS', level: 4, icon: <Layout size={18} /> },
    { name: 'Redux', level: 4, icon: <LineChart size={18} /> },
  ];

  const otherSkills = [
    { name: 'Git', level: 4, icon: <GitFork size={18} /> },
    { name: 'Node.js', level: 3, icon: <ServerCog size={18} /> },
    { name: 'API Integration', level: 4, icon: <Globe size={18} /> },
    { name: 'Responsive Design', level: 5, icon: <Smartphone size={18} /> },
    { name: 'Testing', level: 3, icon: <TestTube size={18} /> },
    { name: 'Performance Optimization', level: 4, icon: <Laptop size={18} /> },
    { name: 'Terminal', level: 4, icon: <Terminal size={18} /> },
    { name: 'SQL', level: 3, icon: <Database size={18} /> },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="section-container">
        <AnimatedText
          text="Technical Skills"
          className="section-title"
          animation="fade-in-up"
          tag="h2"
        />
        
        <AnimatedText
          text="I specialize in frontend development with a focus on building responsive, performant user interfaces."
          className="section-subtitle"
          animation="fade-in-up"
          tag="p"
          delay={100}
        />
        
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            Frontend Development
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {frontendSkills.map((skill, index) => (
              <SkillBadge
                key={index}
                name={skill.name}
                icon={skill.icon}
                level={skill.level}
                index={index}
              />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            Other Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {otherSkills.map((skill, index) => (
              <SkillBadge
                key={index}
                name={skill.name}
                icon={skill.icon}
                level={skill.level}
                index={index + frontendSkills.length}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 p-6 glass-card rounded-xl">
          <h3 className="text-xl font-bold mb-4">My Development Philosophy</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Write clean, maintainable code that scales</li>
            <li>Focus on performance and accessibility from the start</li>
            <li>Test thoroughly to ensure reliability</li>
            <li>Stay current with evolving best practices</li>
            <li>Prioritize the user experience above all else</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
