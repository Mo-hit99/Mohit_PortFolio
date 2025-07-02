import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Palette, Database, Smartphone, Globe, Zap } from "lucide-react";

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Code />,
      title: "Frontend Development",
      description: "Creating responsive, modern web applications using React, Next.js, and cutting-edge technologies.",
      features: ["React/Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
      glassStyle: "from-blue-500/20 to-cyan-500/20 border-blue-400/30",
      iconStyle: "from-blue-500 to-cyan-600",
      dotStyle: "bg-blue-500"
    },
    {
      icon: <Database />,
      title: "Backend Development",
      description: "Building robust server-side applications with Node.js, Express, and database management.",
      features: ["Node.js/Express", "MongoDB/PostgreSQL", "REST APIs", "Authentication"],
      glassStyle: "from-green-500/20 to-emerald-500/20 border-green-400/30",
      iconStyle: "from-green-500 to-emerald-600",
      dotStyle: "bg-green-500"
    },
    {
      icon: <Palette />,
      title: "UI/UX Design",
      description: "Designing beautiful, intuitive user interfaces with modern design principles and tools.",
      features: ["Figma/Adobe XD", "User Research", "Prototyping", "Design Systems"],
      glassStyle: "from-purple-500/20 to-pink-500/20 border-purple-400/30",
      iconStyle: "from-purple-500 to-pink-600",
      dotStyle: "bg-purple-500"
    },
    {
      icon: <Smartphone />,
      title: "Mobile Development",
      description: "Developing cross-platform mobile applications using React Native and native technologies.",
      features: ["React Native", "iOS/Android", "App Store Deployment", "Performance Optimization"],
      glassStyle: "from-orange-500/20 to-red-500/20 border-orange-400/30",
      iconStyle: "from-orange-500 to-red-600",
      dotStyle: "bg-orange-500"
    },
    {
      icon: <Globe />,
      title: "Zoho CRM Solutions",
      description: "Customizing and implementing Zoho CRM solutions for business process automation.",
      features: ["Custom Fields", "Workflows", "API Integration", "Reports & Analytics"],
      glassStyle: "from-indigo-500/20 to-blue-500/20 border-indigo-400/30",
      iconStyle: "from-indigo-500 to-blue-600",
      dotStyle: "bg-indigo-500"
    },
    {
      icon: <Zap />,
      title: "Performance Optimization",
      description: "Optimizing applications for speed, SEO, and user experience across all devices.",
      features: ["Core Web Vitals", "SEO Optimization", "Caching", "CDN Setup"],
      glassStyle: "from-yellow-500/20 to-amber-500/20 border-yellow-400/30",
      iconStyle: "from-yellow-500 to-amber-600",
      dotStyle: "bg-yellow-500"
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
        <section className="services-section w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16" id="services">
          <div className="services-container max-w-7xl mx-auto">
            <motion.div
              className="services-header text-center mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="services-title text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">My Services</h2>
              <p className="services-subtitle text-lg sm:text-xl text-gray-300">
                Comprehensive solutions to bring your digital ideas to life
              </p>
            </motion.div>

            <motion.div
              className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className={`service-card relative p-6 sm:p-8 rounded-2xl border backdrop-blur-xl transition-all duration-300 overflow-hidden group ${service.glassStyle}`}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Liquid glass background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"></div>
                  
                  {/* Animated border glow */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.glassStyle.replace('/20', '/10')} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 hover:cursor-pointer">
                    <div className={`service-icon w-16 h-16 bg-gradient-to-br ${service.iconStyle} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                      <div className="text-white text-2xl">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="service-title text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">{service.title}</h3>
                    <p className="service-description text-gray-300 text-sm sm:text-base mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{service.description}</p>
                    <ul className="service-features space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                          <span className={`w-2 h-2 ${service.dotStyle} rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300`}></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
