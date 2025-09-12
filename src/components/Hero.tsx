import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaReact, FaJava, FaPython, FaPhp } from 'react-icons/fa';
import { SiTypescript, SiSpringboot, SiMysql, SiMongodb } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/my-photo.jpg';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const phrases = ['A Fullstack Developer', 'I build things for the web.'];
  
  // Typing animation effect
  useEffect(() => {
    const tick = () => {
      const fullText = phrases[currentIndex];
      setCurrentText(isDeleting 
        ? fullText.substring(0, currentText.length - 1)
        : fullText.substring(0, currentText.length + 1)
      );

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
      }
    };

    const timer = setTimeout(tick, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, phrases]);

  const getTechIconColor = (techName: string): string => {
    const colorClasses: { [key: string]: string } = {
      'React': 'text-cyan-400',
      'TypeScript': 'text-blue-600',
      'Java': 'text-orange-600',
      'Python': 'text-blue-600',
      'Spring Boot': 'text-green-600',
      'PHP': 'text-purple-600',
      'MySQL': 'text-blue-700',
      'MongoDB': 'text-green-600',
    };
    return colorClasses[techName] || 'text-primary';
  };

  const techIcons = [
    { icon: FaReact, name: 'React', color: '#61DAFB' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: FaJava, name: 'Java', color: '#ED8B00' },
    { icon: FaPython, name: 'Python', color: '#3776AB' },
    { icon: SiSpringboot, name: 'Spring Boot', color: '#6DB33F' },
    { icon: FaPhp, name: 'PHP', color: '#777BB4' },
    { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Rashmika Lakshan
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl font-semibold text-muted-foreground min-h-[2em]"
            >
              {currentText}
              <span className="border-r-2 border-primary animate-blink ml-1" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-lg"
            >
              Undergraduate Software Engineer passionate about crafting efficient and user-friendly 
              full-stack applications. Turning coffee into code, one project at a time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={() => scrollToSection('projects')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg shadow-glow transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Picture with Orbiting Tech Icons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Orbiting Animation Container */}
              <div className="relative w-80 h-80">
                {/* Central Profile Image */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
                  className="absolute inset-8 rounded-full overflow-hidden shadow-elegant z-10 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
                >
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center text-6xl font-bold text-primary">
                    <img
                    src={heroImage}
                    alt="Rashmika Lakshan"
                    className="w-full h-full object-cover"
                  />
                  </div>
                </motion.div>

                {/* Orbiting Tech Icons */}
                {techIcons.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="absolute top-1/2 left-1/2 w-12 h-12"
                    style={{
                      transformOrigin: '0 0',
                    }}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      type: "tween",
                      ease: "linear",
                      delay: (index * 2.5),
                    }}
                  >
                    <motion.div
                      className="absolute bg-card rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                      style={{
                        transform: `translateX(140px) translateY(-50%)`,
                      }}
                      animate={{
                        rotate: -360,
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        type: "tween",
                        ease: "linear",
                        delay: (index * 2.5),
                      }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <tech.icon 
                        size={24} 
                        className={`transition-colors duration-300 ${getTechIconColor(tech.name)}`}
                        title={tech.name}
                      />
                    </motion.div>
                  </motion.div>
                ))}

                {/* Dotted Circle */}
                <motion.div
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{ scale: 1, rotate: 360 }}
                  transition={{ 
                    scale: { delay: 0.7, duration: 0.5 },
                    rotate: { duration: 60, repeat: Infinity, type: "tween", ease: "linear" }
                  }}
                  className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;