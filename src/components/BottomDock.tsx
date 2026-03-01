import { motion } from "framer-motion";
import { Home, Layers, Film, User, Mail } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: Layers, label: "Stack", href: "#stack" },
  { icon: Film, label: "Projects", href: "#projects" },
  { icon: User, label: "About", href: "#about" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

const BottomDock = () => {
  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="glass rounded-2xl px-2 py-2 flex items-center gap-1">
        {navItems.map(({ icon: Icon, label, href }) => (
          <button
            key={label}
            onClick={() => handleClick(href)}
            className="group relative flex items-center justify-center w-12 h-12 rounded-xl hover:bg-primary/10 transition-colors duration-200"
            aria-label={label}
          >
            <Icon size={20} className="text-muted-foreground group-hover:text-primary transition-colors duration-200" />
            {/* Tooltip */}
            <span className="absolute -top-9 left-1/2 -translate-x-1/2 glass rounded-lg px-2.5 py-1 text-xs font-mono text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              {label}
            </span>
          </button>
        ))}
      </div>
    </motion.nav>
  );
};

export default BottomDock;
