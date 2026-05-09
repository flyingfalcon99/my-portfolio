"use client";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

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

const LinkedinIcon = (props: any) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-50" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-sm text-primary mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new opportunities
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Mukesh Kumar</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-medium">
            Principal Full-Stack Engineer & Fintech Solutions Architect
          </h2>
          
          <p className="text-lg text-muted-foreground/80 max-w-2xl mb-12 leading-relaxed">
            With over 20 years of experience building highly scalable, low-latency enterprise solutions. 
            Specializing in modernizing monolithic architectures into cloud-native microservices using 
            Java, Spring Boot, Kafka, and the MERN stack.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <a href="#contact" className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors flex items-center gap-2">
              Get in touch <ArrowRight className="w-4 h-4" />
            </a>
            <div className="flex gap-4 ml-4">
              <a href="https://github.com/flyingfalcon99" target="_blank" rel="noreferrer" className="p-3 rounded-full glass hover:bg-white/10 transition-colors">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/mukesh-kumar-7946093a7/" target="_blank" rel="noreferrer" className="p-3 rounded-full glass hover:bg-white/10 transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href="mailto:mk.livestrong@gmail.com" className="p-3 rounded-full glass hover:bg-white/10 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
