import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, UserCircleIcon, FolderOpenIcon, Cog6ToothIcon, EnvelopeIcon, DocumentTextIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: '/', icon: <HomeIcon className="w-6 h-6 flex-shrink-0" /> },
    { name: 'About', to: '/about', icon: <UserCircleIcon className="w-6 h-6 flex-shrink-0" /> },
    { name: 'Projects', to: '/projects', icon: <FolderOpenIcon className="w-6 h-6 flex-shrink-0" /> },
    { name: 'Services', to: '/services', icon: <Cog6ToothIcon className="w-6 h-6 flex-shrink-0" /> },
    { name: 'Resume', to: '/resume', icon: <DocumentTextIcon className="w-6 h-6 flex-shrink-0" /> },
    { name: 'Contact', to: '/contact', icon: <EnvelopeIcon className="w-6 h-6 flex-shrink-0" /> },
  ];

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 bg-[#1f2937] rounded-full p-2 focus:outline-none shadow-lg"
      >
        {mobileMenuOpen ? (
          <XMarkIcon className="w-6 h-6 text-white" />
        ) : (
          <Bars3Icon className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] z-50 transform transition-transform duration-300 ease-in-out ${
        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full p-4">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <h1 className="text-xl font-bold text-white">Mohit</h1>
          </div>
          
          {/* Nav Links */}
          <nav className="flex-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group my-1">
                <NavLink 
                  to={link.to} 
                  onClick={closeMobileMenu}
                  className={({ isActive }) => 
                    `flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                      isActive 
                        ? 'bg-gradient-to-r from-indigo-600/20 to-purple-600/20 text-white border-l-2 border-pink-400 shadow-lg' 
                        : 'text-gray-400 hover:bg-[#1f2937] hover:text-gray-200'
                    }`
                  }
                >
                  <div className="flex items-center w-full">
                    {link.icon}
                    <span className="ml-3 font-semibold whitespace-nowrap">
                      {link.name}
                    </span>
                  </div>
                </NavLink>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className={`hidden lg:block sticky top-0 h-screen flex flex-col p-4 transition-all duration-300 z-50 border-r border-[#23272e] shadow-xl overflow-hidden ${expanded ? 'w-64' : 'w-20'}`}
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
          boxShadow: '2px 0 16px 0 rgba(0,0,0,0.25)'
        }}>
        {/* Liquid Glass Overlay */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="w-full h-full bg-white/10 backdrop-blur-md" style={{
            background: 'linear-gradient(120deg, rgba(255,255,255,0.08) 0%, rgba(230,89,131,0.10) 100%)',
            boxShadow: '0 8px 32px 0 rgba(31,38,135,0.15)',
          }}></div>
        </div>
        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            {/* <svg className="w-10 h-10 text-indigo-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.372 0 0 5.372 0 12c0 6.627 5.372 12 12 12s12-5.373 12-12C24 5.372 18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" /></svg> */}
          </div>
          {/* Toggle Button */}
          <button onClick={() => setExpanded(!expanded)} className="absolute top-0 right-2 bg-[#1f2937] rounded-full p-1 focus:outline-none">
            <svg className={`w-5 h-5 text-white transform transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          {/* Nav Links */}
          <nav className="flex-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group my-1">
                <NavLink 
                  to={link.to} 
                  className={({ isActive }) => 
                    `flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                      isActive 
                        ? 'bg-gradient-to-r from-indigo-600/20 to-purple-600/20 text-white border-l-2 border-pink-400 shadow-lg' 
                        : 'text-gray-400 hover:bg-[#1f2937] hover:text-gray-200'
                    }`
                  }
                >
                  <div className={`flex items-center w-full ${
                    ({ isActive }) => isActive ? 'transform scale-105' : ''
                  }`}>
                    {link.icon}
                    <span className={`transition-all duration-300 origin-left font-semibold ${expanded ? 'opacity-100 ml-3 w-auto' : 'opacity-0 w-0 ml-0'} whitespace-nowrap overflow-hidden`}>
                      {link.name}
                    </span>
                  </div>
                </NavLink>
                {/* Tooltip for collapsed state */}
                {!expanded && (
                  <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-3 py-1 rounded bg-[#222] text-white text-xs opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 transition-opacity duration-200 shadow-lg">
                    {link.name}
                  </span>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
