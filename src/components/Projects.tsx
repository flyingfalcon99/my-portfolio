"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const GithubIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.3 6.5-1.5 6.5-7.1 0-1.4-.5-2.6-1.3-3.5.1-.3.6-1.7-.1-3.5 0 0-1-.3-3.3 1.2-1-.3-2.1-.4-3.2-.4s-2.2.1-3.2.4c-2.3-1.5-3.3-1.2-3.3-1.2-.7 1.8-.2 3.2-.1 3.5-.8.9-1.3 2.1-1.3 3.5 0 5.6 3.3 6.8 6.5 7.1-.8.6-1 1.6-1 2.9V22" />
  </svg>
);

const projects = [
  {
    title: "MERN Moving Company Project",
    description: "A comprehensive Moving Company management system built with the MERN stack. Features full architectural scaffolding, testing, and deployment workflows.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "#",
    live: "#"
  },
  {
    title: "LearnEase Pro LMS",
    description: "Full-stack Learning Management System with role-based dashboards (Admin, Faculty, Learner), real-time chat interface, and secure authentication.",
    tech: ["Next.js", "Tailwind", "Socket.io", "MongoDB"],
    github: "#",
    live: "#"
  },
  {
    title: "GenAI-powered KYC Platform",
    description: "A banking platform utilizing agentic AI for synthetic data generation and automated test suites, built to handle complex KYC and AML requirements.",
    tech: ["React", "Node.js", "Jest", "GenAI APIs"],
    github: "#",
    live: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex justify-between items-end"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass rounded-2xl border border-white/5 overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
            >
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                  </div>
                  <div className="flex gap-3">
                    <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                      <GithubIcon className="w-5 h-5" />
                    </a>
                    <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground/80 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-medium text-muted-foreground">
                      {tech}
                      {i < project.tech.length - 1 && <span className="mx-2 opacity-50">•</span>}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
