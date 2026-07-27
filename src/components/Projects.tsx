import { motion } from 'framer-motion';
import { FaGithub, } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ecommerceImage from '@/assets/sabucha-ecommerce-project.jpg';
import bakeryManagementImage from '@/assets/bakery-project.jpg';
import posImage from '@/assets/pos-project.jpg';
import movieImage from '@/assets/movie-project.jpg';
import chatAppImage from '@/assets/chatApp.jpg';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  challenge: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

const Projects = () => {
  // Mock project data - ADD NEW PROJECTS TO THE END WITH A HIGHER ID.
  const allProjects: Project[] = [
    // --- NEWEST PROJECTS (Highest IDs) ---
    {
      id: 8, // TODO: replace placeholder image with an actual TechMart Online screenshot
      title: 'TechMart Online — Enterprise E-Commerce (Jakarta EE)',
      description: 'Multi-module Maven EAR e-commerce application built with Jakarta EE on Payara Server 6.',
      fullDescription: 'Built a multi-module Maven EAR e-commerce application on Jakarta EE, deployed on Payara Server 6, with MySQL and EclipseLink JPA for persistence, EJBs for business logic, and JMS for asynchronous messaging. Verified correctness with Arquillian integration tests and load-tested the application with JMeter.',
      image: ecommerceImage, // TODO: replace with a real TechMart screenshot
      technologies: ['Jakarta EE', 'Java', 'Payara', 'MySQL', 'JMS', 'Arquillian'],
      challenge: 'Structuring a multi-module EAR with clean EJB boundaries and validating reliability under load with JMeter and Arquillian integration tests.',
      githubUrl: 'https://github.com/rashmika1230', // TODO: replace with the actual TechMart Online repo URL
      featured: true
    },
    {
      id: 7, // TODO: replace placeholder image with an actual project screenshot
      title: 'Spring Boot JWT Authentication API',
      description: 'Secure REST API with Spring Security, JWT, BCrypt password hashing, and MySQL.',
      fullDescription: 'Developed a secure REST API using Spring Boot and Spring Security, implementing stateless JWT authentication (JJWT), BCrypt password hashing, and role-based access control backed by MySQL.',
      image: posImage, // TODO: replace with a real screenshot of this project
      technologies: ['Spring Boot', 'Spring Security', 'JWT', 'MySQL'],
      challenge: 'Implementing stateless, role-based authentication with JWT while keeping password storage secure via BCrypt hashing.',
      githubUrl: 'https://github.com/rashmika1230', // TODO: replace with the actual repo URL
      featured: true
    },
    // --- E-COMMERCE PROJECT MOVED TO ID 5 (Second Newest) ---
    {
      id: 5, // ID set to 5, making it the second project when sorted descending from ID 6
      title: 'E-Commerce Full Stack Application (Sabucha)',
      description: 'A comprehensive e-commerce platform with user authentication, product management, and payment integration.',
      fullDescription: 'Built a complete e-commerce solution featuring user registration/login, product catalog, shopping cart, order management, and secure payment processing.',
      image: ecommerceImage,
      technologies: ['HTML', 'Bootstrap', 'JavaScript', 'MySQL', 'Hibernate', 'Java', 'Fetch API'],
      challenge: 'Implementing secure payment processing and real-time inventory management',
      githubUrl: 'https://github.com/rashmika1230/TeaStore',
      liveUrl: 'https://example.com',
      featured: true
    },
    {
      id: 3,
      title: 'Bakery Management System',
      description: 'Bakery Management System for a real-world client',
      fullDescription: 'Developed a real-world bakery management System for a client, enabling seamless interaction with their bakery operations and multiple shop locations. The system streamlines inventory, sales, orders, and return management while improving efficiency.',
      image: bakeryManagementImage,
      technologies: ['Java', 'MySQL'],
      challenge: 'Implementing real-time collaboration features and optimizing performance for large datasets',
      githubUrl: 'https://github.com/rashmika1230/bake',
      featured: true
    },
    {
      id: 4,
      title: 'POS System',
      description: 'POS system for a real-world furniture shop client',
      fullDescription: 'Developed a POS system for a real-world furniture shop client, featuring standard POS functionalities with a dedicated module for creating fully customized invoices, enhancing flexibility and operational efficiency.',
      image: posImage,
      technologies: ['Java', 'MySQL'],
      challenge: 'Implementing fully customizable invoice generation while maintaining real-time inventory synchronization and secure role-based access control.',
      githubUrl: 'https://github.com/rashmika1230/shehanFurniture',
      liveUrl: 'https://example.com',
      featured: false
    },
    {
      id: 1, // ID adjusted to be oldest
      title: 'Movies Review Application',
      description: 'Movie Review web application',
      fullDescription: 'Developed a movie review platform that allows users to browse, rate, and review movies with a clean, modern UI and dynamic content updates.',
      image: movieImage,
      technologies: ['Laravel', 'MySQL', 'Bootstrap'],
      challenge: 'Ensuring secure user authentication and implementing a scalable rating system that updates overall scores in real time.',
      githubUrl: 'https://github.com/rashmika1230/movie-review',
      featured: false
    },
    // --- Project 1: Chat Application (NEWEST - Highest ID) ---
    {
      id: 6, // NEWEST PROJECT (Highest ID)
      title: 'Real-Time Chat Application',
      description: 'A cross-platform mobile chat application with secure authentication and instant messaging features.',
      fullDescription: 'Developed a secure, real-time chat application for mobile, using React Native and Tailwind CSS for a modern UI/UX. The backend utilizes Java EE with Hibernate for efficient data persistence and handling concurrent connections.',
      image: chatAppImage,
      technologies: ['React Native', 'Tailwind CSS', 'Java EE', 'Hibernate', 'MySQL', 'JWT'],
      challenge: 'Implementing secure WebSocket connections for real-time messaging and ensuring high performance under heavy concurrent user load.',
      githubUrl: 'https://github.com/rashmika1230/MyChatApp',
      featured: true
    },
  ];

  const getTechnologyColor = (tech: string): string => {
    const colors: { [key: string]: string } = {
      'React': 'bg-blue-500/20 text-blue-400 border-blue-400/30',
      'React Native': 'bg-blue-600/20 text-blue-300 border-blue-300/30', 
      'Tailwind CSS': 'bg-teal-500/20 text-teal-400 border-teal-400/30', 
      'HTML': 'bg-blue-500/20 text-blue-400 border-blue-400/30',
      'TypeScript': 'bg-blue-600/20 text-blue-300 border-blue-300/30',
      'Spring Boot': 'bg-green-500/20 text-green-400 border-green-400/30',
      'Java EE': 'bg-orange-600/20 text-orange-300 border-orange-300/30', 
      'MySQL': 'bg-orange-500/20 text-orange-400 border-orange-400/30',
      'Java': 'bg-green-600/20 text-green-300 border-green-300/30',
      'Node.js': 'bg-green-500/20 text-green-400 border-green-400/30',
      'Laravel': 'bg-red-500/20 text-red-400 border-red-400/30',
      'PHP': 'bg-purple-600/20 text-purple-400 border-purple-400/30',
      'JWT': 'bg-gray-500/20 text-gray-400 border-gray-400/30',
      'JavaScript': 'bg-yellow-500/20 text-yellow-400 border-yellow-400/30',
      'Hibernate': 'bg-pink-500/20 text-pink-400 border-pink-400/30',
      'Bootstrap': 'bg-purple-500/20 text-purple-400 border-purple-400/30',
      'jQuery': 'bg-blue-400/20 text-blue-300 border-blue-300/30',
      'Fetch API': 'bg-indigo-500/20 text-indigo-400 border-indigo-400/30',
      'Jakarta EE': 'bg-orange-600/20 text-orange-300 border-orange-300/30',
      'Payara': 'bg-teal-600/20 text-teal-300 border-teal-300/30',
      'JMS': 'bg-amber-500/20 text-amber-400 border-amber-400/30',
      'Arquillian': 'bg-cyan-600/20 text-cyan-300 border-cyan-300/30',
      'Spring Security': 'bg-green-600/20 text-green-300 border-green-300/30',
    };
    return colors[tech] || 'bg-primary/20 text-primary border-primary/30';
  };
  
  // Sort projects by ID in descending order (highest ID/newest project first)
  const sortedProjects = [...allProjects].sort((a, b) => b.id - a.id);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my full-stack development projects, demonstrating proficiency
            in modern web technologies and problem-solving abilities.
          </p>
        </motion.div>

        {/* --- SCROLLABLE CONTAINER --- */}
        <div 
            className="space-y-16 max-h-[800px] overflow-y-auto pr-4 custom-scrollbar"
            style={{ 
                // Optional: Customize scrollbar appearance for some browsers
                scrollbarWidth: 'thin', 
                scrollbarColor: '#4f46e5 #1e1e2d' 
            }}
        >
          {/* Mapping over sortedProjects ensures newest project is at the top (index 0) */}
          {sortedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              // The alternating layout logic (index % 2 === 1) now works correctly
              // for the newest-first order.
              className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
                }`}
            >
              {/* Project Image */}
              <motion.div
                className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative group rounded-xl overflow-hidden shadow-elegant">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>

              {/* Project Details */}
              <motion.div
                className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-1' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.fullDescription}
                  </p>

                  {/* Challenge */}
                  <div className="bg-card/50 rounded-lg p-4 border-l-4 border-primary">
                    <h4 className="font-semibold text-primary mb-2">Key Challenge:</h4>
                    <p className="text-sm text-muted-foreground italic">
                      {project.challenge}
                    </p>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className={`${getTechnologyColor(tech)} border`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <FaGithub className="mr-2" size={16} />
                      View Code
                    </Button>
                  )}
                  {/* Live URL button removed as it was commented out */}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        {/* --- END OF SCROLLABLE CONTAINER --- */}


        {/* View More Projects CTA (now below the scrollable area) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
            onClick={() => window.open('https://github.com/rashmika1230', '_blank')}
          >
            <FaGithub className="mr-2" size={20} />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;