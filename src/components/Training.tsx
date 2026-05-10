"use client";
import { motion } from "framer-motion";

const trainingList = [
  "Brainbench Certified Web Developer in all areas, Client-Side, Server-Side and Database",
  "Certified as Masters in Enterprise Java Beans (EJB) by Brainbench. 4.77/5",
  "Certified as Masters in C++ by Brainbench",
  "Best Practices in J2EE - Oracle",
  "Business Intelligence, Enterprise Integration and Web Services - Oracle",
  "Building Corporate Portals and Portlet Development in Java - Oracle",
  "BEA Weblogic Server 8.1 - Citigroup",
  "Sun Certified Business Component Developer (EJB Certification)",
  "Training in Equities Trading from FT Knowledge – New York Institute of Finance",
  "Developing with TIBCO Enterprise Message Services 4.x - Lehman Brothers",
  "Back-office trade processing and settlement - Lehman Brothers",
  "Bond Basics and Municipal Bonds - Lehman Brothers"
];

export default function Training() {
  return (
    <section id="training" className="py-24 relative overflow-hidden bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Training</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {trainingList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass p-5 rounded-xl border border-white/5 hover:border-primary/30 transition-colors flex items-start gap-4 group"
            >
              <div className="mt-1 w-2 h-2 rounded-full bg-primary/80 shadow-[0_0_8px_rgba(255,94,0,0.6)] shrink-0"></div>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors text-sm md:text-base">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
