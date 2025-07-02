import React from 'react';
import { DocumentArrowDownIcon, AcademicCapIcon, BriefcaseIcon, StarIcon } from '@heroicons/react/24/outline';
import LiquidGlassBackground from "./LiquidGlassBackground";

export default function Resume() {
  const skills = [
    { name: 'React.js', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'PostgreSQL', level: 65 },
  ];

  const experience = [
    {
      title: 'Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Developed and maintained web applications using React, Node.js, and MongoDB. Led a team of 3 developers and improved application performance by 40%.'
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Creations',
      period: '2021 - 2022',
      description: 'Built responsive user interfaces and implemented modern design patterns. Collaborated with UX designers to create intuitive user experiences.'
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Ventures',
      period: '2020 - 2021',
      description: 'Assisted in developing web applications and learned modern development practices. Contributed to bug fixes and feature implementations.'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'University of Technology',
      period: '2016 - 2020',
      description: 'Graduated with honors. Specialized in Software Engineering and Web Development.'
    },
    {
      degree: 'Web Development Certification',
      institution: 'Coding Bootcamp',
      period: '2020',
      description: 'Intensive 6-month program covering full-stack development technologies.'
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

              {/* Experience & Education */}
              <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                {/* Experience */}
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl p-4 sm:p-6 border border-gray-800 shadow-xl">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
                    <BriefcaseIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-pink-400" />
                    Experience
                  </h2>
                  <div className="space-y-4 sm:space-y-6">
                    {experience.map((exp, index) => (
                      <div key={index} className="border-l-2 border-pink-500 pl-4 sm:pl-6">
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">{exp.title}</h3>
                        <p className="text-pink-400 font-medium text-sm sm:text-base mb-1">{exp.company}</p>
                        <p className="text-gray-400 text-xs sm:text-sm mb-2">{exp.period}</p>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{exp.description}</p>
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
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Languages</h3>
                  <ul className="text-gray-300 space-y-1 text-sm sm:text-base">
                    <li>• English (Native)</li>
                    <li>• Spanish (Intermediate)</li>
                    <li>• French (Basic)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Certifications</h3>
                  <ul className="text-gray-300 space-y-1 text-sm sm:text-base">
                    <li>• AWS Certified Developer</li>
                    <li>• Google Cloud Professional</li>
                    <li>• React Developer Certification</li>
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