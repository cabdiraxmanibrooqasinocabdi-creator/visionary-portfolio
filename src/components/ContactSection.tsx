import { motion } from "framer-motion";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "cabdiraxmanibrooqasinocabdi@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-3">Get In Touch</p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold">Contact</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <button
              onClick={handleCopy}
              className="w-full glass rounded-xl p-4 flex items-center justify-between group hover:border-primary transition-colors duration-300"
            >
              <span className="font-mono text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors truncate">
                {email}
              </span>
              {copied ? (
                <Check size={18} className="text-primary flex-shrink-0 ml-2" />
              ) : (
                <Copy size={18} className="text-muted-foreground group-hover:text-primary flex-shrink-0 ml-2 transition-colors" />
              )}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
