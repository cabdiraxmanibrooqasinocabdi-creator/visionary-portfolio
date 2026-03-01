import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const ProjectSection = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-3">Featured Work</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold">Projects</h2>
        </motion.div>

        {/* Cinematic Project Card */}
        <motion.a
          href="https://inaibrimovie.com"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="block group relative rounded-2xl overflow-hidden border border-border bg-card"
        >
          {/* Shimmer overlay */}
          <div className="absolute inset-0 shimmer pointer-events-none z-10" />

          <div className="relative p-8 sm:p-12 lg:p-16">
            {/* Movie theater gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-card via-card to-secondary opacity-80" />

            <div className="relative z-20">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <p className="font-mono text-primary text-xs tracking-[0.2em] uppercase mb-2">🎬 Streaming Platform</p>
                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                    Inaibrimovie.com
                  </h3>
                  <p className="text-muted-foreground max-w-xl text-base lg:text-lg">
                    A cinematic streaming platform bringing African stories to the world. 
                    Built from the ground up with a full-stack architecture, powering content 
                    delivery for a growing audience.
                  </p>
                </div>
                <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors duration-300 flex-shrink-0 mt-2" size={24} />
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {["React.js", "Node.js", "Full-Stack", "Streaming"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full border border-border text-xs font-mono text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default ProjectSection;
