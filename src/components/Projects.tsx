
import React from 'react';
import AnimatedText from './AnimatedText';
import ProjectCard from './ProjectCard';

// Sample project data
const projects = [
  {
    title: "E-commerce Dashboard",
    description: "A responsive dashboard for e-commerce analytics with customizable widgets and real-time data.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description: "A Kanban-style task management application with drag-and-drop functionality and team collaboration.",
    tags: ["React", "Redux", "TypeScript", "Styled Components"],
    imageUrl: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?auto=format&fit=crop&q=80&w=2069",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Travel Planner",
    description: "A travel planning application that helps users organize trips with interactive maps and itineraries.",
    tags: ["NextJS", "MongoDB", "TailwindCSS", "Google Maps API"],
    imageUrl: "https://images.unsplash.com/photo-1476304884326-cd2c88572c5f?auto=format&fit=crop&q=80&w=2069",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Fitness Tracker",
    description: "A fitness tracking application with workout logging, progress visualization, and personalized recommendations.",
    tags: ["React", "Firebase", "Recharts", "TypeScript"],
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=2070",
    demoUrl: "#",
    githubUrl: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.1),transparent)]"></div>
      
      <div className="section-container">
        <AnimatedText
          text="Featured Projects"
          className="section-title"
          animation="fade-in-up"
          tag="h2"
        />
        
        <AnimatedText
          text="A selection of my recent work, showcasing my skills in frontend development."
          className="section-subtitle"
          animation="fade-in-up"
          tag="p"
          delay={100}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
