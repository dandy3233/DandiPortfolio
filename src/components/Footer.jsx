import React, { useState, useEffect } from 'react';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiGithub, 
  FiLinkedin, 
  FiArrowUp,
  FiCode
} from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';
import { personalInfo } from '../data/personalInfo';
import { navLinks } from '../data/navigation';

export default function Footer() {
  const [showFloatingTop, setShowFloatingTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const remInPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      const navOffset = 4.75 * remInPx;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <footer className="bg-[#080C14] border-t border-white/[0.08] text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            
            {/* Brand Info */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <FiCode className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100 tracking-tight">
                    {personalInfo.fullName}
                  </h3>
                  <p className="text-xs text-indigo-300 font-medium font-mono">
                    {personalInfo.title}
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed max-w-sm font-normal">
                Building modern web applications, backend services, and business-focused software solutions with React.js, Node.js, Python, PostgreSQL, and Odoo ERP.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-2.5 pt-2">
                <a
                  href={personalInfo.socials.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#131C2E] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-white hover:border-white/[0.2] transition-colors"
                  title="GitHub"
                >
                  <FiGithub className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.socials.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#131C2E] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-[#38BDF8] hover:border-sky-500/30 transition-colors"
                  title="LinkedIn"
                >
                  <FiLinkedin className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.socials.telegram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#131C2E] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-[#38BDF8] hover:border-sky-500/30 transition-colors"
                  title="Telegram"
                >
                  <FaTelegramPlane className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Navigation Links */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-4">
                Quick Navigation
              </h4>
              <ul className="space-y-2.5 text-sm">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-slate-400 hover:text-indigo-300 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Contact Info */}
            <div className="lg:col-span-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-4">
                Direct Contact
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2.5">
                  <FiMail className="w-4 h-4 text-indigo-400 shrink-0" />
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="hover:text-slate-200 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <FiPhone className="w-4 h-4 text-indigo-400 shrink-0" />
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="hover:text-slate-200 transition-colors font-mono"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <FiMapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span className="text-slate-300">{personalInfo.location}</span>
                </div>
                <div className="pt-2 text-xs text-slate-500">
                  BSc Software Engineering • Jigjiga University (2025)
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Full Circular Back to Top Button */}
          <div className="mt-12 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              &copy; 2026 {personalInfo.fullName}. All Rights Reserved.
            </div>

            {/* Full Round / Circular Back to Top Button */}
            {/* <div className="flex items-center gap-3">
              <span className="text-xs text-slate-400 hidden sm:inline font-mono">
                Back to top
              </span>
              <button
                type="button"
                onClick={scrollToTop}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#131C2E] border border-white/[0.1] hover:border-indigo-400/50 hover:bg-indigo-600 hover:text-white text-slate-300 flex items-center justify-center transition-all duration-200 shadow-md hover:scale-110 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-indigo-500"
                title="Back to top"
                aria-label="Back to top"
              >
                <FiArrowUp className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-y-0.5" />
              </button>
            </div> */}
          </div>
        </div>
      </footer>

      {/* Floating Circular Back to Top Button (when user scrolls down) */}
      <button
        type="button"
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-indigo-600 text-white shadow-xl shadow-indigo-900/40 border border-indigo-400/30 flex items-center justify-center transition-all duration-300 hover:bg-indigo-500 hover:scale-110 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
          showFloatingTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        title="Back to top"
        aria-label="Back to top"
      >
        <FiArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
      </button>
    </>
  );
}
