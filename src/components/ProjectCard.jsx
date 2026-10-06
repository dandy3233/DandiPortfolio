import React from 'react';
import { 
  FiExternalLink, 
  FiGithub, 
  FiCheck, 
  FiLock,
  FiGlobe,
  FiShield
} from 'react-icons/fi';

export default function ProjectCard({ project }) {
  const hasLiveDemo = Boolean(project.liveDemoUrl);
  const hasGithub = Boolean(project.githubUrl);
  const hasAnyLink = hasLiveDemo || hasGithub;

  return (
    <div className="group relative rounded-2xl bg-[#131C2E] border border-white/[0.08] hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl hover:shadow-indigo-950/30">
      
      {/* Modern Mock Browser / Header Bar */}
      <div className="px-4 py-3 bg-[#0E1524] border-b border-white/[0.06] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block"></span>
        </div>

        {/* Simulated Domain / URL Bar */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0A0F1A] border border-white/[0.05] text-[0.6875rem] font-mono text-slate-400 max-w-[13rem] truncate">
          <FiLock className="w-3 h-3 text-emerald-400 shrink-0" />
          <span className="truncate">{project.domain || "private-deployment"}</span>
        </div>

        {/* Status Badge */}
        {hasLiveDemo ? (
          <div className="flex items-center gap-1.5 text-[0.625rem] font-mono font-medium text-emerald-300 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <span className="hidden sm:inline">Live</span>
          </div>
        ) : (
          <div className="text-[0.625rem] font-mono text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]">
            {project.statusText || "Internal"}
          </div>
        )}
      </div>

      {/* Card Content Body */}
      <div className="p-6">
        {/* Category & Badge */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
            {project.category}
          </span>
          <span className="text-xs font-mono text-slate-400">
            {project.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-100 group-hover:text-indigo-200 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm text-slate-400 leading-relaxed font-normal">
          {project.description}
        </p>

        {/* Key Features List */}
        <div className="mt-5 space-y-1.5">
          <div className="text-[0.6875rem] font-mono text-slate-400 uppercase tracking-wider mb-2">
            Key Features &amp; Scope:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {project.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-300">
                <FiCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer: Technologies & Active Links */}
      <div className="p-6 pt-4 bg-[#0E1524] border-t border-white/[0.06] mt-auto">
        {/* Technologies Badges */}
        <div className="mb-5">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 text-[0.6875rem] font-medium rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.06]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons: Display ONLY when links exist */}
        {hasAnyLink ? (
          <div className="flex items-center gap-3 pt-1">
            {hasLiveDemo && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] transition-all duration-150 shadow-md shadow-indigo-900/30 border border-indigo-400/25 group/btn"
                title={`Visit live demo for ${project.title}`}
              >
                <span>Live Demo</span>
                <FiExternalLink className="w-4 h-4 text-indigo-200 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            )}

            {hasGithub && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] active:scale-[0.98] transition-all duration-150 border border-white/[0.09]"
                title={`View GitHub repository for ${project.title}`}
              >
                <FiGithub className="w-4 h-4 text-slate-300" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        ) : (
          /* When there is NO link, do not display broken/empty buttons — display clean status instead */
          <div className="pt-2 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <FiShield className="w-3.5 h-3.5 text-indigo-400" />
              <span>Private / Client Architecture</span>
            </span>
            <span className="text-[0.6875rem] text-slate-500">Verified Work</span>
          </div>
        )}
      </div>

    </div>
  );
}
