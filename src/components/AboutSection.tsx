import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-6">The Story</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-12">
              From Godey to Nairobi:<br />
              <span className="text-primary">A Visionary's Journey</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="font-serif text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed italic">
              Born in Godey, Ethiopia, and raised in the vibrant streets of Nairobi, Kenya — 
              Abdirahman's journey is one of relentless ambition and quiet determination.
            </p>

            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
              At just 20 years old, he bridges two worlds: the rich cultural 
              tapestry of East Africa and the cutting edge of modern technology. As the 
              Founder & CEO of Inaibrimovie.com, he is building the infrastructure for 
              African cinema to reach a global audience — one line of code at a time.
            </p>

            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
              Fluent in five languages and proficient across the full technology stack, 
              Abdirahman doesn't just write software — he crafts digital experiences 
              that tell stories, connect communities, and shape the future.
            </p>
          </motion.div>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mt-16 mx-auto max-w-xs"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
