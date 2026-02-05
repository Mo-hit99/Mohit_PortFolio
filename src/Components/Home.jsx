import Hero from "./Hero";
import { useState, useEffect } from "react";

export default function Home() {
  const [counters, setCounters] = useState({
    bugsFixed: 0,
    projectsCompleted: 0,
    clientsSatisfied: 0,
    codeLines: 0
  });

  const achievements = [
    {
      title: "Bugs Fixed",
      count: 247,
      icon: "🐛",
      suffix: "+",
      description: "Critical bugs resolved"
    },
    {
      title: "Projects Completed",
      count: 89,
      icon: "🚀",
      suffix: "+",
      description: "Successful deliveries"
    },
    {
      title: "Happy Clients",
      count: 156,
      icon: "😊",
      suffix: "+",
      description: "Satisfied customers"
    },
    {
      title: "Lines of Code",
      count: 50000,
      icon: "�",
      suffix: "+",
      description: "Clean code written"
    }
  ];

  const testimonials = [
    {
      name: "Arjun Sharma",
      role: "Local Business Owner",
      location: "Zirakpur",
      message: "Mohit delivered our business website ahead of schedule. His attention to detail and problem-solving skills are exceptional.",
      rating: 5
    },
    {
      name: "Priya Patel",
      role: "Restaurant Owner",
      location: "Zirakpur",
      message: "Fixed critical issues in our online ordering system within hours. Highly recommend for any urgent development needs.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "Shop Owner",
      location: "Zirakpur",
      message: "Completed our e-commerce website perfectly. Great communication and delivered exactly what we needed for our local business.",
      rating: 5
    },
    {
      name: "Sneha Gupta",
      role: "Clinic Owner",
      location: "Zirakpur",
      message: "Outstanding web development skills. Built our clinic's appointment system from scratch with clean, user-friendly design.",
      rating: 5
    },
    {
      name: "Vikram Singh",
      role: "Local Entrepreneur",
      location: "Zirakpur",
      message: "Mohit transformed our outdated website into a modern, fast platform. Excellent optimization and professional service.",
      rating: 5
    },
    {
      name: "Kavya Reddy",
      role: "Boutique Owner",
      location: "Zirakpur",
      message: "Professional approach and timely delivery. Created a beautiful online store that perfectly represents our brand.",
      rating: 5
    }
  ];

  const skills = {
    languages: ["TypeScript", "JavaScript", "Python", "Java"],
    databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    tools: ["VSCode", "Git", "Docker", "AWS"],
    frameworks: ["React", "Node.js", "Express.js", "Next.js"],
    other: ["REST APIs", "Microservices", "CI/CD"]
  };

  // Auto-scroll testimonials (slower)
  useEffect(() => {
    // Remove the interval-based animation for true infinite loop
  }, []);

  // Animated counters
  useEffect(() => {
    const animateCounters = () => {
      achievements.forEach((achievement, index) => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = achievement.count / steps;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= achievement.count) {
            current = achievement.count;
            clearInterval(timer);
          }
          
          setCounters(prev => ({
            ...prev,
            [index === 0 ? 'bugsFixed' : 
             index === 1 ? 'projectsCompleted' : 
             index === 2 ? 'clientsSatisfied' : 'codeLines']: Math.floor(current)
          }));
        }, duration / steps);
      });
    };

    // Start animation after component mounts
    const timeout = setTimeout(animateCounters, 500);
    return () => clearTimeout(timeout);
  }, [achievements]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}>
        ⭐
      </span>
    ));
  };

  return (
    <div className="flex w-full">
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="container w-full" id="home">
          <div className="outer-container w-full">
            <div className="inner-container">
              <div className="inner-inner-container"></div>
            </div>
            <Hero />
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-black" id="achievements">
          <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                <span className="text-pink-500"></span>Achievements
              </h2>
              <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-2 sm:px-4">
                Numbers that speak for my dedication and expertise
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="relative group">
                  {/* Liquid Glass Card */}
                  <div className="relative bg-white/5 backdrop-blur-lg rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 text-center border border-white/10 hover:border-pink-500/50 transition-all duration-500 hover:scale-105 hover:bg-white/10">
                    {/* Glass shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-lg sm:rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Floating animation */}
                    <div className="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-500">
                      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-1 sm:mb-2 md:mb-3 lg:mb-4 filter drop-shadow-lg">{achievement.icon}</div>
                      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-pink-500 mb-1 sm:mb-1.5 md:mb-2 filter drop-shadow-lg">
                        {index === 0 ? counters.bugsFixed :
                         index === 1 ? counters.projectsCompleted :
                         index === 2 ? counters.clientsSatisfied :
                         counters.codeLines.toLocaleString()}{achievement.suffix}
                      </div>
                      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white mb-1 sm:mb-1.5 md:mb-2 filter drop-shadow-lg">{achievement.title}</h3>
                      <p className="text-gray-300 text-xs sm:text-sm filter drop-shadow-lg leading-tight">{achievement.description}</p>
                    </div>
                    
                    {/* Liquid ripple effect */}
                    <div className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
                      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-black" id="skills">
          <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                <span className="text-pink-500"></span>Skills
              </h2>
              <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-2 sm:px-4">
                Technologies and tools I use to build amazing software
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="relative group">
                  {/* Liquid Glass Card */}
                  <div className="relative bg-white/5 backdrop-blur-lg rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 border border-white/10 hover:border-pink-500/50 transition-all duration-500 hover:scale-105 hover:bg-white/10">
                    {/* Glass shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-lg sm:rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 transform group-hover:-translate-y-1 transition-transform duration-500">
                      <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-2 sm:mb-3 md:mb-4 capitalize border-b border-pink-500 pb-1 sm:pb-1.5 md:pb-2 filter drop-shadow-lg">
                        {category}
                      </h3>
                      <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
                        {items.map((skill, idx) => (
                          <div key={idx} className="text-gray-300 text-xs sm:text-sm py-0.5 sm:py-1 hover:text-pink-400 transition-colors filter drop-shadow-lg leading-tight">
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Liquid ripple effect */}
                    <div className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
                      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-black" id="testimonials">
          <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                <span className="text-pink-500"></span>Testimonials
              </h2>
              <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-2 sm:px-4">
                What clients say about my work
              </p>
            </div>
            
            <div className="relative max-w-7xl mx-auto">
              <div className="overflow-hidden">
                {/* Infinite scrolling animation */}
                <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-6 animate-infinite-scroll">
                  {/* First set of testimonials */}
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-56 sm:w-64 md:w-72 lg:w-80 flex-shrink-0 px-1 sm:px-1.5 md:px-2 lg:px-3">
                      <div className="relative group h-full">
                        {/* Liquid Glass Card */}
                        <div className="relative bg-white/5 backdrop-blur-lg rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 text-center border border-white/10 hover:border-pink-500/50 transition-all duration-500 hover:scale-105 hover:bg-white/10 h-full flex flex-col">
                          {/* Glass shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-lg sm:rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
                          {/* Content */}
                          <div className="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-500 flex flex-col h-full">
                            {/* Stars */}
                            <div className="flex justify-center mb-2 sm:mb-3 md:mb-4">
                              {renderStars(testimonial.rating)}
                            </div>
                            
                            {/* Message */}
                            <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 md:mb-5 lg:mb-6 italic filter drop-shadow-lg flex-grow leading-tight">
                              &ldquo;{testimonial.message}&rdquo;
                            </p>
                            
                            {/* Client Info */}
                            <div className="space-y-0.5 sm:space-y-1 mt-auto">
                              <h4 className="text-white font-semibold text-sm sm:text-base md:text-lg filter drop-shadow-lg">{testimonial.name}</h4>
                              <p className="text-pink-400 text-xs sm:text-sm filter drop-shadow-lg">{testimonial.role}</p>
                              <p className="text-gray-400 text-xs filter drop-shadow-lg">{testimonial.location}</p>
                            </div>
                          </div>
                          
                          {/* Liquid ripple effect */}
                          <div className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
                            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Duplicate set for seamless loop */}
                  {testimonials.map((testimonial, index) => (
                    <div key={`duplicate-${index}`} className="w-56 sm:w-64 md:w-72 lg:w-80 flex-shrink-0 px-1 sm:px-1.5 md:px-2 lg:px-3">
                      <div className="relative group h-full">
                        {/* Liquid Glass Card */}
                        <div className="relative bg-white/5 backdrop-blur-lg rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 text-center border border-white/10 hover:border-pink-500/50 transition-all duration-500 hover:scale-105 hover:bg-white/10 h-full flex flex-col">
                          {/* Glass shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-lg sm:rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
                          {/* Content */}
                          <div className="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-500 flex flex-col h-full">
                            {/* Stars */}
                            <div className="flex justify-center mb-2 sm:mb-3 md:mb-4">
                              {renderStars(testimonial.rating)}
                            </div>
                            
                            {/* Message */}
                            <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 md:mb-5 lg:mb-6 italic filter drop-shadow-lg flex-grow leading-tight">
                              &ldquo;{testimonial.message}&rdquo;
                            </p>
                            
                            {/* Client Info */}
                            <div className="space-y-0.5 sm:space-y-1 mt-auto">
                              <h4 className="text-white font-semibold text-sm sm:text-base md:text-lg filter drop-shadow-lg">{testimonial.name}</h4>
                              <p className="text-pink-400 text-xs sm:text-sm filter drop-shadow-lg">{testimonial.role}</p>
                              <p className="text-gray-400 text-xs filter drop-shadow-lg">{testimonial.location}</p>
                            </div>
                          </div>
                          
                          {/* Liquid ripple effect */}
                          <div className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
                            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
