"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Synaptics",
    role: "Principal Full-Stack Engineer / Solutions Architect",
    period: "Sept 2023 - Present",
    description: "Architected a sophisticated suite of financial services providing real-time price discovery, correlation matrices, and advanced volatility modeling.",
    tech: ["React", "Next.js", "Java/Spring Boot", "AWS", "Docker"]
  },
  {
    company: "Citigroup",
    role: "Enterprise Reference Data - Development & Integration",
    period: "Aug 2009 - Aug 2023",
    description: "Designed and consumed RESTful microservices to facilitate seamless data sharing. Built highly scalable Spring Boot and Kafka Streams applications for real-time data processing. Migrated from Tibco EMS to Kafka.",
    tech: ["Spring Boot", "Kafka", "PostgreSQL", "Microservices"]
  },
  {
    company: "Barclays Capital",
    role: "Software Engineer",
    period: "Feb 2007 - Aug 2009",
    description: "Executed and delivered various initiatives around short-term products (VRDN, TECP). Delivered STaMMP system for Auction Rate Securities.",
    tech: ["Java", "Spring", "Hibernate", "Tibco"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 md:pl-24"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-4px] md:left-[28px] top-2 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(255,94,0,0.8)]"></div>
                
                <div className="glass p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{exp.role}</h3>
                      <p className="text-lg text-muted-foreground">{exp.company}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-sm whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground/80 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
