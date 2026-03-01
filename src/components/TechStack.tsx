import { motion } from "framer-motion";
import { useState } from "react";

const skills = [
  { name: "React.js", level: "Advanced", icon: "⚛️" },
  { name: "React Native", level: "Advanced", icon: "📱" },
  { name: "JavaScript", level: "Advanced", icon: "✦" },
  { name: "Python", level: "Intermediate", icon: "🐍" },
  { name: "Node.js", level: "Advanced", icon: "◆" },
  { name: "Django", level: "Intermediate", icon: "🌿" },
  { name: "Redux", level: "Advanced", icon: "🔄" },
  { name: "Java", level: "Intermediate", icon: "☕" },
  { name: "HTML", level: "Expert", icon: "◇" },
  { name: "CSS", level: "Expert", icon: "🎨" },
];

const TechStack = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="stack" className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-3">Toolkit</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold">Tech Stack</h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative group rounded-xl border border-border p-6 text-center transition-all duration-500 cursor-default ${
                hoveredIndex === i ? "glow-blue border-primary bg-secondary" : "bg-card hover:bg-secondary"
              }`}
            >
              <span className="text-2xl mb-3 block">{skill.icon}</span>
              <p className="font-sans text-sm font-medium text-foreground">{skill.name}</p>

              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={hoveredIndex === i ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
                className="absolute -top-10 left-1/2 -translate-x-1/2 glass rounded-lg px-3 py-1.5 pointer-events-none whitespace-nowrap"
              >
                <span className="text-xs font-mono text-primary">{skill.level}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
