import React from 'react';
import { 
  FiBookOpen, 
  FiMapPin, 
  FiCalendar, 
  FiCheckCircle 
} from 'react-icons/fi';
import SectionTitle from './UI/SectionTitle';
import { educationData } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-24 bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Education Background"
          subtitle="My academic journey from West Wollega to Software Engineering."
        />

        {/* Visual Flow Indicator */}
        <div className="hidden lg:flex items-center justify-center gap-3 mb-16 text-xs font-mono text-slate-400">
          <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.07]">
            Guliso Elementary (Grades 1-8)
          </span>
          <span className="text-indigo-400 font-bold">→</span>
          <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.07]">
            Guliso Sec. &amp; Prep (Grades 9-11)
          </span>
          <span className="text-indigo-400 font-bold">→</span>
          <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.07]">
            Grade 12 Preparatory
          </span>
          <span className="text-indigo-400 font-bold">→</span>
          <span className="px-3 py-1 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 font-semibold">
            Jigjiga University (BSc 2025)
          </span>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Timeline Spine */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-indigo-500/40 via-sky-500/30 to-emerald-500/30"></div>

          <div className="space-y-8 sm:space-y-12">
            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.step}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#0B0F17] border-2 border-indigo-400/80 flex items-center justify-center text-xs font-mono font-bold text-indigo-300 z-10 shadow-lg shadow-black/40">
                    {item.step}
                  </div>

                  {/* Spacer for 2-column alternating layout */}
                  <div className="hidden sm:block sm:w-1/2"></div>

                  {/* Content Card Container */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                    <div
                      className={`group p-6 rounded-2xl bg-[#131C2E] border transition-all duration-300 shadow-sm ${
                        item.isDegree
                          ? 'border-indigo-500/35 bg-gradient-to-br from-[#131C2E] to-[#172238] shadow-indigo-950/20'
                          : 'border-white/[0.08] hover:border-white/[0.14]'
                      }`}
                    >
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span
                          className={`px-2.5 py-0.5 rounded-md text-xs font-semibold ${
                            item.isDegree
                              ? 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/25'
                              : 'bg-white/[0.04] text-slate-300 border border-white/[0.06]'
                          }`}
                        >
                          {item.badge}
                        </span>
                        
                        <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                          <FiCalendar className="w-3.5 h-3.5 text-indigo-400" />
                          <span>{item.period}</span>
                        </span>
                      </div>

                      {/* Institution Name */}
                      <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-indigo-200 transition-colors">
                        {item.institution}
                      </h3>

                      {/* Degree / Level */}
                      <div className="text-sm font-semibold text-indigo-300 mt-1">
                        {item.degree || item.level}
                      </div>

                      {/* Grades & Location Meta */}
                      <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400">
                        {item.grades && (
                          <div className="flex items-center gap-1 font-mono">
                            <FiBookOpen className="w-3.5 h-3.5 text-slate-400" />
                            <span>{item.grades}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1">
                          <FiMapPin className="w-3.5 h-3.5 text-indigo-400" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                        {item.description}
                      </p>

                      {/* Degree Specific Highlight */}
                      {item.isDegree && (
                        <div className="mt-4 pt-3 border-t border-indigo-500/20 flex items-center gap-2 text-xs text-emerald-400 font-medium">
                          <FiCheckCircle className="w-4 h-4 shrink-0" />
                          <span>Officially Graduated BSc in Software Engineering</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
