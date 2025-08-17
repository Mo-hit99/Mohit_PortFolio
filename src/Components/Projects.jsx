import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Eye } from "lucide-react";
import LiquidGlassBackground from "./LiquidGlassBackground";

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A comprehensive MERN stack solution with user authentication, product catalog, shopping cart, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Razorpay", "Redux"],
      liveUrl: "https://newecommercewebsite.onrender.com/",
      githubUrl: "https://github.com/Mo-hit99/NewEcommerceWebsite",
    },
    {
      title: "Job Portal Platform",
      description: "A full-featured job portal with resume builder, job search filters, application tracking, company profiles, and real-time notifications.",
      image: "https://images.unsplash.com/photo-1515169067865-5387ec356754?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Socket.IO", "Redux"],
      liveUrl: "https://job-portal-five-kappa.vercel.app/",
      githubUrl: "https://github.com/Mo-hit99/jobPortal",
    },
    {
      title: "Cloud IDE with Docker",
      description: "A cloud-based development environment using Docker containers for isolated code execution, real-time collaboration, syntax highlighting, and terminal access.",
      image: "https://images.unsplash.com/photo-1590608897129-79da98d159ad?w=800&h=600&fit=crop",
      technologies: ["Docker", "Node.js", "React", "Socket.IO", "Monaco Editor"],
      liveUrl: "https://cloud-ide-frontend.onrender.com",
      githubUrl: "https://github.com/Mo-hit99/CloudIDE",
    },
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="flex w-full">
      <main className="flex-1 w-full">
        <section className="projects-section w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16" id="projects">
          <div className="projects-container max-w-7xl mx-auto">
            <motion.div
              className="projects-header text-center mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="projects-title text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">Featured Projects</h2>
              <p className="projects-subtitle text-lg sm:text-xl text-gray-300">
                Showcasing my latest work and technical expertise
              </p>
            </motion.div>

            <motion.div
              className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {projects.map((project, index) => {
                // Define a set of border colors to cycle through
                const borderColors = [
                  'border-blue-400',
                  'border-purple-400',
                  'border-green-400',
                  'border-yellow-400',
                  'border-pink-400',
                  'border-cyan-400'
                ];
                const borderColor = borderColors[index % borderColors.length];
                return (
                  <motion.article
                    key={index}
                    className={`relative flex flex-col justify-end overflow-hidden rounded-2xl bg-white dark:bg-[#18181b] border-2 ${borderColor} shadow-md p-8 min-h-[260px] transition-transform duration-300 hover:scale-[1.02] hover:cursor-pointer`}
                    variants={cardVariants}
                    whileHover={{ 
                      y: -10,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                    <div className="text-gray-400 mb-2">-----------</div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                      <a href={project.liveUrl} className="flex items-center space-x-1 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-xs transition-colors duration-200">
                        <Eye size={16} />
                        <span>Live</span>
                      </a>
                      <a href={project.githubUrl} className="flex items-center space-x-1 px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-800 text-xs transition-colors duration-200">
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
} 