import { useState } from 'react';
import { ExternalLink, Github, Bot, Code, Figma, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';



const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Personal AI Chatbot",
      description: "A conversational assistant built with OpenAI API and Streamlit, capable of handling real-time queries and generating human-like responses.",
      technologies: ["Python", "OpenAI API", "Streamlit"],
      githubUrl: "https://github.com/Mishal55/Personal_chatbot.git"
    },
    {
      id: 2,
      title: "Weather Chatbot",
      description: "Interactive chatbot that provides weather updates using real-time data from OpenWeather API and Streamlit interface.",
      technologies: ["Python", "OpenWeather API", "Streamlit"],
      githubUrl: "https://github.com/Mishal55/weatherbot_agent.git"
    },
    
    {
      id: 4,
      title: "Task Manager App",
      description: "A to-do list and task manager with status filters, reminders, and persistent storage via localStorage.",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      githubUrl: "https://github.com/Mishal55/Add_task_manager.git"
    },
    {
      id: 5,
      title: "Python Personal Library",
      description: "Console-based library app that lets you catalog, search, and manage personal book collections with SQLite.",
      technologies: ["Python", "SQLite"],
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Password Strength Checker",
      description: "A handy tool to verify password strength using regex and entropy scoring logic.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/Mishal55/Password-Strength.git"
    },
    {
      id: 7,
      title: "Personal Portfolio",
      description: "Responsive portfolio showcasing React and Tailwind skills. Includes dynamic routing, theme toggling, and elegant UI.",
      technologies: ["React", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com/Mishal55/Mishal_portfolio.git"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-background">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="border border-border rounded-lg p-5 bg-card shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 text-sm rounded-full bg-muted text-foreground border border-border">
                    {tech}
                  </span>
                ))}
              </div>
              <Button variant="outline" size="sm" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-1" size={18} />
                  View Code
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


         