import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter, Mail } from "lucide-react";
import LottieAnimation from "./LottieAnimation";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const texts = [
    "Frontend Developer",
    "Full Stack Developer", 
    "UI/UX Designer",
    "Zoho CRM Specialist",
    "React & Next.js Expert"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="hero-container w-full">
      <div className="center-container w-full px-4 sm:px-6 lg:px-8">
        {/* Liquid Glass Background */}
        <div className="liquid-glass-bg">
          <div className="glass-shape glass-shape-1"></div>
          <div className="glass-shape glass-shape-2"></div>
          <div className="glass-shape glass-shape-3"></div>
        </div>

        {/* Lottie Animation - Hidden on mobile and small tablets */}
        <div className="hidden lg:block">
          <LottieAnimation />
        </div>

        <motion.div 
          className="heading-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="name-heading text-center">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold block mb-2 sm:mb-0 sm:inline"
            >
              👋 Hello Everybody! I'm
            </motion.span>
            <motion.span
              className="highlight-name text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold block sm:inline"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {" "}Mohit
            </motion.span>
          </h1>
        </motion.div>

        <motion.span 
          className="first-text block text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-4 sm:mt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {"I'm a"}
        </motion.span>

        <motion.div 
          className="sec-texts flex justify-center items-center mb-6 sm:mb-8 md:mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ height: "50px", minHeight: "50px" }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={currentTextIndex}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              transition={{ 
                duration: 0.5, 
                ease: [0.4, 0.0, 0.2, 1],
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              style={{
                color: "#e65983",
                fontWeight: 600,
                fontSize: "clamp(1rem, 5vw, 2.5rem)",
                textAlign: "center",
                lineHeight: "1.2"
              }}
            >
              {texts[currentTextIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.div 
          className="container-btn flex justify-center mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
        
        </motion.div>

        <motion.div 
          className="socialapp-link"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="social-icons flex justify-center gap-3 sm:gap-4 md:gap-6 cursor-pointer">
            <motion.a 
              href="https://github.com/Mo-hit99" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="social-icon p-2 sm:p-3 cursor-pointer"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/mohitkohli007/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="social-icon p-2 sm:p-3 cursor-pointer"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
