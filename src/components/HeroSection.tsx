import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpeg";

const languages = ["Somali", "English", "Kiswahili", "Arabic", "Amharic"];

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Subtle grid bg */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center lg:justify-end order-1 lg:order-1"
          >
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border border-border">
                <img
                  src={profilePhoto}
                  alt="Abdirahman Ibrahim Osman"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* CEO Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 glass rounded-xl px-5 py-2.5 animate-pulse-glow"
              >
                <span className="text-primary font-mono text-sm font-medium tracking-widest">CEO</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-2 lg:order-2 text-center lg:text-left"
          >
            <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-4">
              Founder & Full-Stack Engineer
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] tracking-tight mb-6">
              <span className="block">Abdirahman</span>
              <span className="block text-primary">Ibrahim</span>
              <span className="block">Osman</span>
            </h1>
            <p className="text-muted-foreground text-base lg:text-lg max-w-md mx-auto lg:mx-0 mb-8 font-sans">
              20-year-old visionary building the future of African cinema through technology.
            </p>

            {/* Language Pills */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {languages.map((lang, i) => (
                <motion.span
                  key={lang}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="px-4 py-1.5 rounded-full border border-border text-xs font-mono text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300 cursor-default"
                >
                  {lang}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
