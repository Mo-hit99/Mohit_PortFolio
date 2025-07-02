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
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full Stack"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      technologies: ["React", "Firebase", "Material-UI", "React DnD"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend"
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
      technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend"
    },
    {
      title: "Zoho CRM Integration",
      description: "Custom Zoho CRM solution with automated workflows, custom modules, and third-party integrations for business process optimization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      technologies: ["Zoho CRM", "Deluge", "API Integration", "Workflows"],
      liveUrl: "#",
      githubUrl: "#",
      category: "CRM"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website with smooth animations, dark/light mode, and optimized performance.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      technologies: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend"
    },
    {
      title: "Restaurant Management System",
      description: "Complete restaurant management solution with order tracking, inventory management, and customer relationship features.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      technologies: ["Next.js", "PostgreSQL", "Prisma", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full Stack"
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