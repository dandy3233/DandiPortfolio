import React from 'react';
import { 
  FiCheckCircle, 
  FiLayers, 
  FiTrendingUp, 
  FiShield, 
  FiZap, 
  FiUsers 
} from 'react-icons/fi';
import SectionTitle from './UI/SectionTitle';
import { whyWorkWithMe } from '../data/whyWorkWithMe';

const iconMap = {
  FiCheckCircle: FiCheckCircle,
  FiLayers: FiLayers,
  FiTrendingUp: FiTrendingUp,
  FiShield: FiShield,
  FiZap: FiZap,
  FiUsers: FiUsers
};

export default function WhyWorkWithMe() {
  return (
    <section className="py-20 sm:py-24 bg-[#0E1422]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Why Work With Me?"
          subtitle="A combination of practical engineering, enterprise business understanding, clean code practices, and dedication to team success."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyWorkWithMe.map((item) => {
            const Icon = iconMap[item.icon] || FiCheckCircle;
            return (
              <div
                key={item.title}
                className="group p-6 rounded-2xl bg-[#131C2E] border border-white/[0.08] hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-indigo-950/20"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-200">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-slate-100 group-hover:text-indigo-200 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-sm text-slate-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
