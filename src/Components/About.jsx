import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Download, Calendar, MapPin, Mail } from "lucide-react";
import LiquidGlassBackground from "./LiquidGlassBackground";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = {
    languages: [
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 75 },
      { name: "Java", level: 70 }
    ],
    databases: [
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "MySQL", level: 70 },
      { name: "Redis", level: 65 }
    ],
    tools: [
      { name: "VSCode", level: 95 },
      { name: "Git", level: 85 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 }
    ],
    frameworks: [
      { name: "React", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "Next.js", level: 85 }
    ],
    other: [
      { name: "REST APIs", level: 85 },
      { name: "Microservices", level: 70 },
      { name: "CI/CD", level: 65 }
    ]
  };

  const experiences = [
    {
      title: "Full Stack Developer (E-commerce Platform)",
      company: "Personal Project",
      period: "2024",
      description: "Built a full-featured e-commerce platform using the MERN stack, implemented real-time admin support and role-based authentication with JWT."
    },
    {
      title: "Android Developer (Garbage Collection App)",
      company: "Academic Project",
      period: "2023",
      description: "Developed a real-time Android garbage collection tracking app using Java and Firebase, improving performance and UX."
    },
    {
      title: "MERN Stack Developer",
      company: "Self-Initiated Projects",
      period: "2022 - 2024",
      description: "Created and deployed multiple full stack applications, practiced Agile methodologies, API integrations, and version control with Git/GitHub."
    }
  ];

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Chitkara Institute of Engineering & Technology",
      year: "2024",
      description: "Focused on full-stack development, project building, and system design."
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Sri Guru Gobind Singh College, Chandigarh",
      year: "2021",
      description: "Built strong foundations in programming and software development."
    }
  ];

  return (
    <div className="flex w-full">
      <main className="flex-1 w-full">
        <section className="about-section w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16" id="about">
          <div className="about-container max-w-7xl mx-auto">
            <motion.div
              className="about-header text-center mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="about-title text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">About Me</h2>
              <p className="about-subtitle text-lg sm:text-xl text-gray-300">
                Passionate developer with expertise in modern web technologies
              </p>
            </motion.div>

            <div className="about-content grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12" ref={ref}>
              {/* Personal Info */}
              <motion.div
                className="about-info"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="info-card bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-800">
                  <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white">Personal Information</h3>
                  <div className="space-y-4">
                    <div className="info-item flex items-center space-x-3">
                      <Mail size={20} className="text-pink-400 flex-shrink-0" />
                      <span className="text-gray-300">mk3705200@gmail.com</span>
                    </div>
                    <div className="info-item flex items-center space-x-3">
                      <MapPin size={20} className="text-pink-400 flex-shrink-0" />
                      <span className="text-gray-300">Zirakpur, Punjab, India</span>
                    </div>
                    <div className="info-item flex items-center space-x-3">
                      <Calendar size={20} className="text-pink-400 flex-shrink-0" />
                      <span className="text-gray-300">Available for new opportunities</span>
                    </div>
                  </div>
                  <a 
                    href="/Resume -mohit_MERN.pdf" 
                    download="Mohit_MERN_Resume.pdf"
                    className="download-cv inline-flex items-center space-x-2 mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                  >
                    <Download size={20} />
                    <span>Download CV</span>
                  </a>
                </div>
              </motion.div>

              {/* About Text */}
              <motion.div
                className="about-text"
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Who I Am</h3>
                <div className="space-y-4 text-gray-300 text-sm sm:text-base">
                  <p>
                    I'm a motivated and detail-oriented Full Stack Developer with strong hands-on experience through academic and personal projects. I specialize in building responsive web applications using the MERN stack, with a focus on clean code and performance optimization.
                  </p>
                  <p>
                    My journey into development started during my BCA and MCA, where I built projects like a real-time garbage collection app and a fully functional e-commerce platform. These projects helped me deepen my understanding of both frontend and backend technologies.
                  </p>
                  <p>
                    I'm constantly learning and exploring new technologies. I enjoy contributing to open-source, collaborating with peers, and transforming real-world problems into effective digital solutions.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Skills */}
            <motion.div
              className="skills-section mt-12 sm:mt-16 lg:mt-20"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-white">Technical Skills</h3>
              
              {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
                <div key={category} className="mb-8 sm:mb-12">
                  <h4 className="text-xl sm:text-2xl font-semibold mb-6 text-pink-400 capitalize">
                    {category === 'other' ? 'Other Technologies' : category}
                  </h4>
                  <div className="skills-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        className="skill-item bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-4 sm:p-6 rounded-xl border border-gray-800"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.8 + categoryIndex * 0.2 + index * 0.1 }}
                      >
                        <div className="skill-header flex justify-between items-center mb-3">
                          <span className="skill-name text-white font-semibold text-sm sm:text-base">{skill.name}</span>
                          <span className="skill-percentage text-pink-400 font-bold text-sm">{skill.level}%</span>
                        </div>
                        <div className="skill-bar bg-gray-700 rounded-full h-2">
                          <motion.div
                            className="skill-progress bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1, delay: 1 + categoryIndex * 0.2 + index * 0.1 }}
                          ></motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Experience */}
            <motion.div
              className="experience-section mt-12 sm:mt-16 lg:mt-20"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-white">Experience</h3>
              <div className="timeline space-y-6 sm:space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="timeline-item"
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                  >
                    <div className="timeline-content bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-6 sm:p-8 rounded-2xl border border-gray-800 shadow-xl">
                      <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">{exp.title}</h4>
                      <p className="company text-pink-400 font-semibold mb-1">{exp.company}</p>
                      <p className="period text-gray-400 text-sm mb-3">{exp.period}</p>
                      <p className="description text-gray-300">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              className="education-section mt-12 sm:mt-16 lg:mt-20"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-white">Education</h3>
              <div className="education-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="education-card bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-6 sm:p-8 rounded-2xl border border-gray-800 shadow-xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  >
                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">{edu.degree}</h4>
                    <p className="institution text-pink-400 font-semibold mb-2">{edu.institution}</p>
                    <p className="year text-gray-400 text-sm mb-3">{edu.year}</p>
                    <p className="text-gray-300 text-sm">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
} 