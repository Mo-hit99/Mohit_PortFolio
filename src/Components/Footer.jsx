import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import { 
  FaGithub, 
  FaLinkedin, 
} from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', icon: <FaGithub className="w-5 h-5" />, href: 'https://github.com/Mo-hit99', color: 'hover:text-gray-400' },
    { name: 'LinkedIn', icon: <FaLinkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/mohitkohli007/', color: 'hover:text-blue-400' },
 
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'Resume', href: '/resume' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="relative mt-auto">
      {/* Background with gradient matching Home page */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#e65983]/10 via-[#e95793]/10 to-[#f82197]/10 animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-[#e65983]/20 to-[#f82197]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-[#f82197]/20 to-[#e65983]/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Liquid glass overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <h3 className="text-xl font-bold text-white">Mohit Portfolio</h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">
                Passionate developer creating innovative digital experiences. 
                Let&apos;s build something amazing together.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 transition-all duration-300 transform hover:scale-110 ${social.color} hover:bg-white/10 p-2 rounded-lg`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-4 sm:mb-6">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group text-sm sm:text-base"
                    >
                      <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-4 sm:mb-6">Services</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer text-sm sm:text-base">
                  Web Development
                </li>
                <li className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer text-sm sm:text-base">
                  Mobile Development
                </li>
                <li className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer text-sm sm:text-base">
                  UI/UX Design
                </li>
                <li className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer text-sm sm:text-base">
                  Consulting
                </li>
                <li className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer text-sm sm:text-base">
                  Maintenance
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-4 sm:mb-6">Get In Touch</h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <EnvelopeIcon className="w-5 h-5 mr-3 text-indigo-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base">mk3705200@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <PhoneIcon className="w-5 h-5 mr-3 text-indigo-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base">+91 7986104250</span>
                </div>
                <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <MapPinIcon className="w-5 h-5 mr-3 text-indigo-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Zirakpur, Punjab, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
              <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
                © {currentYear} Mohit Portfolio. All rights reserved.
              </div>
              <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                <span>Made with</span>
                <HeartIcon className="w-4 h-4 mx-2 text-red-500 animate-pulse" />
                <span>by Mohit</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>
    </footer>
  );
} 