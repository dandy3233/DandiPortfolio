import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiCode } from 'react-icons/fi';
import { navLinks } from '../data/navigation';
import { personalInfo } from '../data/personalInfo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const remInPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      const scrollPosition = window.scrollY + (7.5 * remInPx);

      const sections = navLinks.map(link => link.href.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const remInPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      const navOffset = 4.75 * remInPx; // 4.75rem offset
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0F17]/90 backdrop-blur-md border-b border-white/[0.07] shadow-lg shadow-black/20'
          : 'bg-[#0B0F17]/50 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo (Left) */}
          <div className="flex-1 flex justify-start z-10">
            <a
              href="#home"
              onClick={(e) => handleNavLinkClick(e, '#home')}
              className="group flex items-center gap-3 focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-500 transition-all duration-200 shadow-sm">
                <FiCode className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-indigo-300 transition-colors tracking-tight">
                  {personalInfo.shortName}
                </span>
                <span className="text-[0.6875rem] text-slate-400 font-mono -mt-1 hidden sm:block">
                  Software Developer
                </span>
              </div>
            </a>
          </div>

          {/* Centered Desktop Nav Items */}
          <nav className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2 p-1.5 rounded-2xl bg-[#131C2E]/80 backdrop-blur-md border border-white/[0.08] shadow-sm z-0">
            <div className="flex items-center gap-1 xl:gap-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavLinkClick(e, link.href)}
                    className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-xl transition-all duration-150 ${
                      isActive
                        ? 'text-indigo-300 bg-indigo-500/15 border border-indigo-500/25 font-semibold shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-white/[0.05] border border-transparent'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </nav>

          {/* Right spacer — Mobile Hamburger Menu Toggle */}
          <div className="flex-1 flex justify-end items-center z-10">
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.06] border border-white/[0.08] focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[24rem] opacity-100 border-b border-white/[0.08]' : 'max-h-0 opacity-0'
        } bg-[#0B0F17]/98 backdrop-blur-xl`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className={`block px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-indigo-500/15 text-indigo-300 font-semibold border-l-2 border-indigo-500'
                    : 'text-slate-300 hover:bg-white/[0.05] hover:text-white'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
}
