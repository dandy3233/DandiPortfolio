import React, { useState } from 'react';
import SectionTitle from './UI/SectionTitle';
import ProjectCard from './ProjectCard';
import { projects, projectCategories } from '../data/projects';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((project) =>
        project.filterCategories?.includes(activeCategory)
      );

  return (
    <section id="projects" className="py-20 sm:py-24 bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Featured Projects"
          subtitle="Some of the real projects and software solutions I have worked on."
        />

        {/* Project Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-sm border border-indigo-400/25'
                    : 'bg-[#131C2E] text-slate-300 hover:text-white hover:bg-[#1A253C] border border-white/[0.08]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Note on Real Projects */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-500 font-mono">
            * All projects represent real software systems and production/academic implementations developed by Dandi Takilu Kebede.
          </p>
        </div>
      </div>
    </section>
  );
}
