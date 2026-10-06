import React from 'react';
import { 
  FiUser, 
  FiBriefcase, 
  FiMapPin, 
  FiAward, 
  FiCalendar, 
  FiDownload, 
  FiCheckSquare,
  FiCode
} from 'react-icons/fi';
import SectionTitle from './UI/SectionTitle';
import { personalInfo } from '../data/personalInfo';

export default function About() {
  const keyCards = [
    { label: "Full Name", value: personalInfo.fullName, icon: FiUser },
    { label: "Role", value: "Software Developer", icon: FiBriefcase },
    { label: "Location", value: personalInfo.location, icon: FiMapPin },
    { label: "Education", value: "BSc Software Engineering", icon: FiAward },
    { label: "Graduated", value: personalInfo.graduationYear, icon: FiCalendar },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 bg-[#0E1422]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={personalInfo.aboutHeading}
          subtitle="Get to know more about my software engineering background, core competencies, and development approach."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left / Profile Visual Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm">
              
              {/* Soft decorative glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-indigo-500/15 to-sky-500/15 rounded-3xl blur-xl opacity-50"></div>
              
              {/* Profile Container */}
              <div className="relative bg-[#131C2E] border border-white/[0.09] rounded-2xl p-6 sm:p-8 text-center shadow-xl">
                
                {/* Developer Avatar Monogram */}
                <div className="relative mx-auto w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-br from-[#1A253C] to-[#0F1726] border border-white/[0.1] p-1.5 flex items-center justify-center shadow-inner">
                  <div className="w-full h-full rounded-xl bg-indigo-950/30 flex flex-col items-center justify-center text-center">
                    <FiCode className="w-12 h-12 text-indigo-400 mb-1" />
                    <span className="text-xs font-mono font-bold text-slate-300 tracking-wider">
                      DANDI TAKILU
                    </span>
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="absolute -bottom-2 -right-2 px-2.5 py-1 rounded-full bg-[#0D211A] border border-emerald-500/30 text-[11px] font-medium text-emerald-300 flex items-center gap-1.5 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>Available</span>
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-100">
                  {personalInfo.fullName}
                </h3>
                <p className="text-sm font-medium text-indigo-300 mt-1">
                  Software Developer
                </p>
                <p className="text-xs text-slate-400 mt-0.5 font-mono">
                  Full-Stack &amp; Odoo Developer
                </p>

                {/* Micro Tech Tags */}
                <div className="mt-5 flex flex-wrap justify-center gap-1.5">
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] bg-white/[0.04] text-slate-300 border border-white/[0.06]">React.js</span>
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] bg-white/[0.04] text-slate-300 border border-white/[0.06]">Node.js</span>
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] bg-white/[0.04] text-slate-300 border border-white/[0.06]">Python</span>
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] bg-white/[0.04] text-slate-300 border border-white/[0.06]">PostgreSQL</span>
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] bg-white/[0.04] text-slate-300 border border-white/[0.06]">Odoo ERP</span>
                </div>

                {/* Download CV Action */}
                <div className="mt-6 pt-5 border-t border-white/[0.08]">
                  <a
                    href={personalInfo.cvUrl}
                    download="Dandi_Takilu_CV.pdf"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-sm"
                  >
                    <FiDownload className="w-4 h-4 text-indigo-200" />
                    <span>Download Official CV</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right / Bio Description & Key Info Cards */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Bio Paragraphs */}
            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              {personalInfo.aboutParagraphs.map((para, idx) => (
                <p key={idx} className="text-slate-300">
                  {para}
                </p>
              ))}
            </div>

            {/* Key Information Cards */}
            <div className="pt-2">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <FiCheckSquare className="w-4 h-4 text-indigo-400" />
                <span>Key Information</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {keyCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.label}
                      className="p-4 rounded-xl bg-[#131C2E] border border-white/[0.07] hover:border-white/[0.14] transition-colors flex items-start gap-3.5 shadow-sm"
                    >
                      <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs text-slate-400 font-medium">
                          {card.label}
                        </div>
                        <div className="text-sm sm:text-base font-semibold text-slate-100 truncate mt-0.5">
                          {card.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
