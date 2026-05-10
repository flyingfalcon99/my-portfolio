"use client";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Developer Focused AI Tools",
    skills: ["Claude Code", "Antigravity", "VS Code + Copilot", "Cursor", "V0", "Bolt", "Manus", "Devin", "Viktor"]
  },
  {
    title: "Agentic AI Tools",
    skills: ["LangChain", "LangGraph/LangSmith", "LangFuse", "LangFlow", "Amazon Bedrock", "CrewAI"]
  },
  {
    title: "MERN & Frontend",
    skills: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Backend & Enterprise",
    skills: ["Java/J2EE", "Spring Boot", "Spring MVC", "Spring JPA", "RESTful APIs", "Microservices"]
  },
  {
    title: "Data & Messaging",
    skills: ["Kafka", "PostgreSQL", "Oracle", "Sybase", "Tibco EMS", "Gemfire"]
  },
  {
    title: "DevOps & Cloud",
    skills: ["AWS", "Docker", "Jenkins", "GitHub", "ELK Stack", "Ansible", "Prometheus"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Arsenal</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-2xl border border-white/5 hover:bg-white/[0.02] transition-colors"
            >
              <h3 className="text-xl font-semibold mb-6 text-foreground/90">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 rounded-lg bg-secondary/50 border border-border/50 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
