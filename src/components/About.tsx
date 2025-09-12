import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const About = () => {
  const handleDownloadCV = () => {
    // This would typically download the actual CV file
    // For now, we'll create a placeholder action
    const link = document.createElement('a');
    link.href = '/my_cv.pdf'; // This file would need to be placed in the public folder
    link.download = 'Rashmika_Lakshan_CV.pdf';
    link.click();
  };
  
  const skills = [
    'Strong Communication',
    'Team Leadership',
    'Adaptability',
    'Problem Solving',
    'Remote Collaboration',
    'Project Management'
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              About{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Me
              </span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - About Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm an undergraduate Software Engineer with a passion for creating efficient, 
                user-friendly applications that solve real-world problems. My journey in technology 
                has been driven by curiosity and a constant desire to learn and adapt to new challenges.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                With experience spanning both frontend and backend development, I enjoy working with 
                modern technologies like React, Spring Boot, and various databases to build comprehensive 
                solutions. I believe in writing clean, maintainable code and following best practices 
                in software development.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond technical skills, I've developed strong leadership and communication abilities 
                through remote team collaboration and project management experience. I thrive in 
                collaborative environments and enjoy mentoring others while continuously expanding 
                my own knowledge.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Button
                  onClick={handleDownloadCV}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg shadow-glow transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-2"
                >
                  <Download size={20} />
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column - Soft Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold mb-6">Key Strengths</h3>
              
              <div className="grid grid-cols-1 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-4 bg-card rounded-lg hover:bg-card/80 transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-foreground font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20"
              >
                <h4 className="font-semibold text-primary mb-2">Remote Leadership Experience</h4>
                <p className="text-muted-foreground">
                  1+ year of experience leading remote development teams, 
                  coordinating projects across different time zones, and 
                  ensuring effective communication and collaboration.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;