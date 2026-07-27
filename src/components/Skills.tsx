import { motion } from 'framer-motion';
import {
  FaReact, FaJava, FaPython, FaPhp, FaGitAlt, FaHtml5, FaCss3Alt, FaJs, FaAws, FaLinux
} from 'react-icons/fa';
import {
  SiTypescript, SiSpringboot, SiMysql, SiMongodb, SiTailwindcss, SiPostman, SiLaravel,
  SiDocker, SiKubernetes, SiJenkins, SiGitlab, SiTerraform, SiAnsible, SiGnubash
} from 'react-icons/si';

interface Skill {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const Skills = () => {
  const getIconColorClass = (skillName: string): string => {
    const colorClasses: { [key: string]: string } = {
      'HTML5': 'text-orange-500',
      'CSS3': 'text-blue-500',
      'JavaScript': 'text-yellow-400',
      'TypeScript': 'text-blue-600',
      'React': 'text-cyan-400',
      'Tailwind CSS': 'text-cyan-500',
      'Java': 'text-orange-600',
      'Python': 'text-blue-600',
      'PHP': 'text-purple-600',
      'Spring Boot': 'text-green-600',
      'Laravel': 'text-red-500',
      'MySQL': 'text-blue-700',
      'MongoDB': 'text-green-600',
      'Git': 'text-orange-500',
      'Postman': 'text-orange-600',
      'AWS': 'text-orange-400',
      'Docker': 'text-blue-500',
      'Kubernetes': 'text-blue-600',
      'Jenkins': 'text-red-500',
      'GitLab CI/CD': 'text-orange-500',
      'Terraform': 'text-purple-600',
      'Ansible': 'text-red-600',
      'Linux': 'text-yellow-500',
      'Bash/Shell': 'text-gray-400',
    };
    return colorClasses[skillName] || 'text-primary';
  };

  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
        { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Java', icon: FaJava, color: '#ED8B00' },
        { name: 'Python', icon: FaPython, color: '#3776AB' },
        { name: 'PHP', icon: FaPhp, color: '#777BB4' },
        { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
        { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      ]
    },
    {
      title: 'DevOps & Cloud',
      skills: [
        { name: 'AWS', icon: FaAws, color: '#FF9900' },
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
        { name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
        { name: 'GitLab CI/CD', icon: SiGitlab, color: '#FC6D26' },
        { name: 'Terraform', icon: SiTerraform, color: '#7B42BC' },
        { name: 'Ansible', icon: SiAnsible, color: '#EE0000' },
        { name: 'Linux', icon: FaLinux, color: '#FCC624' },
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: FaGitAlt, color: '#F05032' },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
        { name: 'Bash/Shell', icon: SiGnubash, color: '#4EAA25' },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="skills" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that I use to 
            build scalable, efficient, and user-friendly applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              className="bg-card rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300 border border-border/50"
            >
              <h3 className="text-xl font-bold mb-6 text-center text-primary">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    className="flex flex-col items-center p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-all duration-300 group cursor-pointer"
                  >
                     <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                       <skill.icon 
                         size={32} 
                         className={`transition-colors duration-300 ${getIconColorClass(skill.name)}`}
                       />
                     </div>
                    <span className="text-sm font-medium text-center text-foreground group-hover:text-primary transition-colors duration-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 border border-primary/20 max-w-4xl mx-auto">
            <h4 className="text-xl font-bold text-primary mb-4">
              Always Learning, Always Growing
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
              tools, and best practices to stay current with industry standards and deliver 
              cutting-edge solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;