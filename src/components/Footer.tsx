import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaChevronUp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/rashmika-lakshan-97247a369/',
      label: 'LinkedIn',
    },
    {
      icon: FaGithub,
      href: 'https://github.com/rashmika1230',
      label: 'GitHub',
    },
    {
      icon: FaEnvelope,
      href: 'mailto:rashmmika6145@gmail.com',
      label: 'Email',
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card/50 border-t border-border/50 py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center space-y-8">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent cursor-pointer"
              onClick={scrollToTop}
            >
              Rashmika Lakshan
            </motion.h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Fullstack Developer passionate about creating innovative solutions 
              and turning ideas into reality through clean, efficient code.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-background rounded-full flex items-center justify-center hover:bg-primary/10 transition-all duration-300 border border-border hover:border-primary/50 shadow-lg hover:shadow-glow group"
                aria-label={social.label}
              >
                <social.icon 
                  size={20} 
                  className="text-muted-foreground group-hover:text-primary transition-colors duration-300"
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 text-sm"
          >
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <motion.button
                key={item}
                whileHover={{ y: -2 }}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"
          />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-muted-foreground"
          >
            <span>© {currentYear} Rashmika Lakshan. All rights reserved.</span>
          </motion.div>

          {/* Back to Top Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="mx-auto w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-glow"
            aria-label="Back to top"
          >
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaChevronUp size={16} />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;