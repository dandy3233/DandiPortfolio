import React from 'react';
import { FiArrowRight, FiMail, FiDownload, FiTerminal, FiCheckCircle } from 'react-icons/fi';
import { personalInfo } from '../data/personalInfo';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const remInPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      const navOffset = 4.75 * remInPx;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[50rem] flex items-center pt-24 pb-16 sm:pt-28 sm:pb-24 overflow-hidden"
    >
      {/* Eye-Friendly Ambient Glows using rem */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[37.5rem] h-[37.5rem] bg-indigo-950/20 rounded-full blur-[8.75rem] pointer-events-none -z-10" />
      <div className="absolute bottom-12 right-12 w-[25rem] h-[25rem] bg-sky-950/20 rounded-full blur-[7.5rem] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading and Info */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            


            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.12]">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-indigo-200 to-sky-300">
                {personalInfo.shortName}
              </span>
            </h1>

            {/* Professional Title */}
            <div className="mt-3.5 text-lg sm:text-xl md:text-2xl font-semibold text-indigo-300/90">
              {personalInfo.title}
            </div>

            {/* Description */}
            <p className="mt-5 text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl font-normal">
              {personalInfo.heroSubtitle}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              {/* Primary 1: View My Projects */}
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] transition-all duration-150 shadow-md shadow-indigo-900/30 border border-indigo-400/25"
              >
                <span>View My Projects</span>
                <FiArrowRight className="w-4 h-4 text-indigo-200" />
              </button>

              {/* Primary 2: Contact Me */}
              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] active:scale-[0.98] transition-all duration-150 border border-white/[0.1] shadow-sm"
              >
                <FiMail className="w-4 h-4 text-indigo-300" />
                <span>Contact Me</span>
              </button>

              {/* Secondary: Download CV */}
              <a
                href={personalInfo.cvUrl}
                download="Dandi_Takilu_CV.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-300 hover:text-white bg-transparent hover:bg-white/[0.04] active:scale-[0.98] transition-all duration-150 border border-white/[0.08] hover:border-slate-600"
                title="Download CV"
              >
                <FiDownload className="w-4 h-4 text-indigo-300" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Quick Credibility Features */}
            <div className="mt-10 pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
              <div className="flex items-center gap-2.5">
                <FiCheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300">Modern Frontend &amp; React</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FiCheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300">Backend &amp; REST APIs</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FiCheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300">Odoo ERP Customization</span>
              </div>
            </div>
          </div>

          {/* Right Column: Code Terminal Mockup Card */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="w-full max-w-lg lg:max-w-none relative">
              
              {/* Outer gentle ambient glow using rem */}
              <div className="absolute -inset-0.25 bg-gradient-to-r from-indigo-500/10 to-sky-500/10 rounded-2xl blur-xl opacity-60"></div>

              {/* Code Terminal */}
              <div className="relative rounded-2xl bg-[#0E1524] border border-white/[0.09] shadow-2xl overflow-hidden">
                {/* Terminal Header */}
                <div className="px-4 py-3 bg-[#0A0F1A] border-b border-white/[0.07] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block"></span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <FiTerminal className="w-3.5 h-3.5 text-indigo-400" />
                    <span>DandiTakilu.jsx</span>
                  </div>
                  <div className="text-[0.625rem] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Active
                  </div>
                </div>

                {/* Terminal Content with Soft Colors */}
                <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-slate-300">
                  <div className="text-slate-500">// Personal Profile &amp; Engineering Stack</div>
                  <div className="mt-1">
                    <span className="text-indigo-400">const</span>{' '}
                    <span className="text-sky-300">developer</span> = &#123;
                  </div>
                  
                  <div className="pl-4 sm:pl-6 space-y-1 mt-1">
                    <div>
                      <span className="text-slate-400">name:</span>{' '}
                      <span className="text-emerald-300">"Dandi Takilu Kebede"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">title:</span>{' '}
                      <span className="text-emerald-300">"Software Developer"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">education:</span>{' '}
                      <span className="text-amber-300">"BSc Software Engineering"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">university:</span>{' '}
                      <span className="text-emerald-300">"Jigjiga University (2025)"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">location:</span>{' '}
                      <span className="text-emerald-300">"Addis Ababa, Ethiopia"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">coreTech:</span> [
                      <div className="pl-4 text-sky-300">
                        "React.js", "JavaScript", "Node.js",<br />
                        "Python", "PostgreSQL", "Odoo ERP"
                      </div>
                      ],
                    </div>
                    <div>
                      <span className="text-slate-400">focus:</span>{' '}
                      <span className="text-indigo-300">"Full-Stack &amp; Business Systems"</span>
                    </div>
                  </div>

                  <div className="mt-1">&#125;;</div>

                  <div className="mt-3 pt-3 border-t border-white/[0.06] text-slate-500">
                    // Ready to contribute to engineering teams
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-indigo-300 font-semibold">
                    <span className="text-slate-400">&gt;</span> developer.buildSolution();
                    <span className="w-2 h-4 bg-indigo-400 inline-block animate-pulse"></span>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="px-4 py-3 bg-[#0A0F1A]/80 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-2 text-[0.6875rem] text-slate-400">
                  <span>Stack: React • Node • Python • Odoo</span>
                  <span className="text-indigo-300 font-medium">BSc Graduate 2025</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
