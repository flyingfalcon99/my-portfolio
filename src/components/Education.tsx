"use client";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors group"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">Bachelor of Engineering in Computer Science</h3>
                <p className="text-lg text-muted-foreground">Delhi College of Engineering, New Delhi, India</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-white/5 text-sm whitespace-nowrap">
                1996
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
