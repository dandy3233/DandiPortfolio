import React from 'react';
import { FiLayout, FiServer, FiLayers, FiBriefcase } from 'react-icons/fi';
import SectionTitle from './UI/SectionTitle';
import { services } from '../data/services';

const iconMap = {
  FiLayout: FiLayout,
  FiServer: FiServer,
  FiLayers: FiLayers,
  FiBriefcase: FiBriefcase
};

export default function WhatIDo() {
  return (
    <section id="services" className="py-20 sm:py-24 bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="What I Do"
          subtitle="Delivering reliable, scalable software solutions with a focus on clean architecture, modern development practices, and business impact."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || FiLayers;
            return (
              <div
                key={service.id}
                className="group relative p-6 rounded-2xl bg-[#131C2E] border border-white/[0.08] hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-indigo-950/30"
              >
                <div>
                  {/* Top card header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-500 group-hover:text-indigo-400 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-indigo-200 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mt-6 pt-4 border-t border-white/[0.06]">
                  <div className="flex flex-wrap gap-1.5">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 text-[11px] font-medium rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                      >
                        {tech}
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
