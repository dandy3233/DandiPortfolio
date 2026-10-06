import React from 'react';
import { 
  FiGlobe, 
  FiServer, 
  FiDatabase, 
  FiCpu, 
  FiShare2, 
  FiTerminal
} from 'react-icons/fi';
import SectionTitle from './UI/SectionTitle';
import { developmentExperience } from '../data/experience';

const iconMap = {
  FiGlobe: FiGlobe,
  FiServer: FiServer,
  FiDatabase: FiDatabase,
  FiCpu: FiCpu,
  FiShare2: FiShare2,
  FiTerminal: FiTerminal
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24 bg-[#0E1422]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Development Experience"
          subtitle="Hands-on software development experience spanning client-side engineering, backend systems, database management, and enterprise ERP customization."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {developmentExperience.map((exp, index) => {
            const Icon = iconMap[exp.icon] || FiServer;
            return (
              <div
                key={exp.id}
                className="group p-6 rounded-2xl bg-[#131C2E] border border-white/[0.08] hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-indigo-950/20"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-500">
                      AREA 0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-indigo-200 transition-colors">
                    {exp.area}
                  </h3>

                  {/* Summary */}
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed font-normal">
                    {exp.summary}
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-6 pt-4 border-t border-white/[0.06]">
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
