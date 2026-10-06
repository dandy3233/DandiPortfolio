import React from 'react';
import { FiTarget, FiArrowRight } from 'react-icons/fi';
import { personalInfo } from '../data/personalInfo';

export default function CareerGoal() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const remInPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      const navOffset = 4.75 * remInPx;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-[#0B0F17] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-10 md:p-12 bg-gradient-to-br from-[#141C2E] via-[#111726] to-[#0E1422] border border-white/[0.09] shadow-xl overflow-hidden">
          
          {/* Eye-friendly subtle ambient glow using rem */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-[16rem] h-[16rem] bg-indigo-900/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-4">
                <FiTarget className="w-3.5 h-3.5" />
                <span>Professional Vision</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
                My Career Goal
              </h2>

              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                "{personalInfo.careerGoal}"
              </p>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <button
                type="button"
                onClick={scrollToContact}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] transition-all duration-150 shadow-md shadow-indigo-900/30 border border-indigo-400/25"
              >
                <span>Let's Connect</span>
                <FiArrowRight className="w-4 h-4 text-indigo-200" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
