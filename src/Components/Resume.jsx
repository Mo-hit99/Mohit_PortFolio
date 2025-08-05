import React from 'react';
import { DocumentArrowDownIcon, AcademicCapIcon, BriefcaseIcon, StarIcon } from '@heroicons/react/24/outline';
import LiquidGlassBackground from "./LiquidGlassBackground";

export default function Resume() {
  const skills = [
    { name: 'JavaScript (ES6+)', level: 95 },
    { name: 'React.js', level: 90 },
    { name: 'Node.js', level: 88 },
    { name: 'Express.js', level: 85 },
    { name: 'MongoDB', level: 82 },
    { name: 'TypeScript', level: 80 },
    { name: 'Redux', level: 78 },
    { name: 'TailwindCSS', level: 85 },
    { name: 'Java', level: 75 },
    { name: 'MySQL', level: 70 },
  ];

  const projects = [
    {
      title: 'E-commerce Platform',
      tech: 'MERN STACK',
      link: 'https://newecommercewebsite.onrender.com/',
      description: 'Created a responsive e-commerce platform using the MERN stack with real-time admin support and image uploads. Designed a Product API for inventory management and personalized recommendations, increasing engagement by 25%. Implemented secure role-based access controls with JWT, along with real-time Add to Cart and optimized checkout features. Designed and implemented a hybrid architecture combining monolithic and serverless functions to enhance scalability, reduce backend workload, and optimize resource utilization.'
    },
    {
      title: 'Garbage Collector App',
      tech: 'Android Studio',
      link: 'github.com/Mo-hit99/Garbage-Collector-App.git',
      description: 'Developed a real-time garbage collection app using Java, Firebase, and Android Studio. Integrated real-time tracking for garbage trucks, enhancing transparency and customer satisfaction by 20%. Improved app performance by 40% through advanced memory management techniques. Reduced app loading times by 15%, optimizing user experience.'
    }
  ];

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Chitkara Institute of Engineering & Technology',
      period: 'Rajpura',
      description: 'CGPA: 7.2'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Sri Guru Gobind Singh College',
      period: 'Chandigarh',
      description: 'CGPA: 7.4'
    }
  ];

  return (
    <div className="flex w-full">
      <main className="flex-1 w-full">
        <section className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Resume</h1>
              <p className="text-gray-300 text-base sm:text-lg">Professional experience and skills</p>
              
              {/* Download Button */}
              <button className="mt-6 inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base">
                <DocumentArrowDownIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Download PDF
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Skills Section */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl p-4 sm:p-6 border border-gray-800 shadow-xl">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
                    <StarIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-pink-400" />
                    Skills
                  </h2>
                  <div className="space-y-3 sm:space-y-4">
                    {skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-xs sm:text-sm text-gray-300 mb-1">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Projects & Education */}
              <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                {/* Projects */}
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl p-4 sm:p-6 border border-gray-800 shadow-xl">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
                    <BriefcaseIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-pink-400" />
                    Projects
                  </h2>
                  <div className="space-y-4 sm:space-y-6">
                    {projects.map((project, index) => (
                      <div key={index} className="border-l-2 border-pink-500 pl-4 sm:pl-6">
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">{project.title}</h3>
                        <p className="text-pink-400 font-medium text-sm sm:text-base mb-1">{project.tech}</p>
                        <a href={project.link.startsWith('http') ? project.link : `https://${project.link}`} 
                           target="_blank" rel="noopener noreferrer" 
                           className="text-blue-400 hover:text-blue-300 text-xs sm:text-sm mb-2 block underline">
                          {project.link}
                        </a>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{project.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl p-4 sm:p-6 border border-gray-800 shadow-xl">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
                    <AcademicCapIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-pink-400" />
                    Education
                  </h2>
                  <div className="space-y-4 sm:space-y-6">
                    {education.map((edu, index) => (
                      <div key={index} className="border-l-2 border-pink-500 pl-4 sm:pl-6">
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">{edu.degree}</h3>
                        <p className="text-pink-400 font-medium text-sm sm:text-base mb-1">{edu.institution}</p>
                        <p className="text-gray-400 text-xs sm:text-sm mb-2">{edu.period}</p>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{edu.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 sm:mt-12 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl p-4 sm:p-6 border border-gray-800 shadow-xl">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Additional Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Contact</h3>
                  <ul className="text-gray-300 space-y-1 text-sm sm:text-base">
                    <li>• Zirakpur, Punjab</li>
                    <li>• +917986104250</li>
                    <li>• mk3705200@gmail.com</li>
                    <li>• linkedin.com/in/mohitkohli007</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Certifications</h3>
                  <ul className="text-gray-300 space-y-1 text-sm sm:text-base">
                    <li>• Responsive Web Design - freeCodeCamp</li>
                    <li>• JavaScript Algorithms and Data Structures - freeCodeCamp</li>
                    <li>• MERN Stack - freeCodeCamp</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 