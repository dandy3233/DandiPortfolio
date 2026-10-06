import React, { useState } from 'react';
import { 
  FiLayout, 
  FiServer, 
  FiDatabase, 
  FiBriefcase, 
  FiTool, 
  FiCheck,
  FiCode,
  FiShare2,
  FiLayers,
  FiTrendingUp,
  FiDollarSign,
  FiUsers,
  FiClock,
  FiFileText,
  FiFile,
  FiTable,
  FiSmartphone
} from 'react-icons/fi';
import { 
  SiReact, 
  SiJavascript, 
  SiHtml5, 
  SiTailwindcss, 
  SiReactrouter, 
  SiNodedotjs, 
  SiExpress, 
  SiPython, 
  SiPostgresql, 
  SiMysql, 
  SiMongodb, 
  SiOdoo, 
  SiGit, 
  SiGithub, 
  SiPostman 
} from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
import { TbRobot } from 'react-icons/tb';
import SectionTitle from './UI/SectionTitle';
import { skillCategories } from '../data/skills';

// Dedicated mapping of each tool to its official icon and brand accent color
const toolIconMap = {
  "React.js": { icon: SiReact, color: "text-[#61DAFB]", bg: "bg-[#61DAFB]/10", border: "border-[#61DAFB]/25" },
  "JavaScript ES6+": { icon: SiJavascript, color: "text-[#F7DF1E]", bg: "bg-[#F7DF1E]/10", border: "border-[#F7DF1E]/25" },
  "HTML5": { icon: SiHtml5, color: "text-[#E34F26]", bg: "bg-[#E34F26]/10", border: "border-[#E34F26]/25" },
  "CSS3": { icon: FaCss3Alt, color: "text-[#1572B6]", bg: "bg-[#1572B6]/10", border: "border-[#1572B6]/25" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "text-[#38BDF8]", bg: "bg-[#38BDF8]/10", border: "border-[#38BDF8]/25" },
  "Responsive Web Design": { icon: FiSmartphone, color: "text-[#818CF8]", bg: "bg-[#818CF8]/10", border: "border-[#818CF8]/25" },
  "UI/UX": { icon: FiLayers, color: "text-[#C084FC]", bg: "bg-[#C084FC]/10", border: "border-[#C084FC]/25" },
  "React Router": { icon: SiReactrouter, color: "text-[#F43F5E]", bg: "bg-[#F43F5E]/10", border: "border-[#F43F5E]/25" },

  "Node.js": { icon: SiNodedotjs, color: "text-[#22C55E]", bg: "bg-[#22C55E]/10", border: "border-[#22C55E]/25" },
  "Express.js": { icon: SiExpress, color: "text-slate-200", bg: "bg-slate-200/10", border: "border-slate-200/25" },
  "Python": { icon: SiPython, color: "text-[#38BDF8]", bg: "bg-[#38BDF8]/10", border: "border-[#38BDF8]/25" },
  "REST APIs": { icon: FiServer, color: "text-[#818CF8]", bg: "bg-[#818CF8]/10", border: "border-[#818CF8]/25" },
  "JSON": { icon: FiCode, color: "text-[#F59E0B]", bg: "bg-[#F59E0B]/10", border: "border-[#F59E0B]/25" },
  "API Integration": { icon: FiShare2, color: "text-[#06B6D4]", bg: "bg-[#06B6D4]/10", border: "border-[#06B6D4]/25" },

  "PostgreSQL": { icon: SiPostgresql, color: "text-[#38BDF8]", bg: "bg-[#38BDF8]/10", border: "border-[#38BDF8]/25" },
  "MySQL": { icon: SiMysql, color: "text-[#F97316]", bg: "bg-[#F97316]/10", border: "border-[#F97316]/25" },
  "MongoDB": { icon: SiMongodb, color: "text-[#10B981]", bg: "bg-[#10B981]/10", border: "border-[#10B981]/25" },

  "Odoo": { icon: SiOdoo, color: "text-[#A855F7]", bg: "bg-[#A855F7]/15", border: "border-[#A855F7]/30" },
  "Odoo Sales": { icon: FiTrendingUp, color: "text-[#A855F7]", bg: "bg-[#A855F7]/10", border: "border-[#A855F7]/25" },
  "Odoo Accounting": { icon: FiDollarSign, color: "text-[#10B981]", bg: "bg-[#10B981]/10", border: "border-[#10B981]/25" },
  "Odoo HR": { icon: FiUsers, color: "text-[#38BDF8]", bg: "bg-[#38BDF8]/10", border: "border-[#38BDF8]/25" },
  "Odoo Attendance": { icon: FiClock, color: "text-[#F59E0B]", bg: "bg-[#F59E0B]/10", border: "border-[#F59E0B]/25" },
  "Odoo Reporting": { icon: FiFileText, color: "text-[#A855F7]", bg: "bg-[#A855F7]/15", border: "border-[#A855F7]/30" },
  "QWeb Reports": { icon: FiCode, color: "text-[#818CF8]", bg: "bg-[#818CF8]/10", border: "border-[#818CF8]/25" },
  "PDF Reports": { icon: FiFile, color: "text-[#EF4444]", bg: "bg-[#EF4444]/10", border: "border-[#EF4444]/25" },
  "XLSX Reports": { icon: FiTable, color: "text-[#22C55E]", bg: "bg-[#22C55E]/10", border: "border-[#22C55E]/25" },

  "Git": { icon: SiGit, color: "text-[#F05032]", bg: "bg-[#F05032]/10", border: "border-[#F05032]/25" },
  "GitHub": { icon: SiGithub, color: "text-slate-100", bg: "bg-white/10", border: "border-white/25" },
  "VS Code": { icon: VscCode, color: "text-[#007ACC]", bg: "bg-[#007ACC]/10", border: "border-[#007ACC]/25" },
  "Postman": { icon: SiPostman, color: "text-[#FF6C37]", bg: "bg-[#FF6C37]/10", border: "border-[#FF6C37]/25" },
  "AI-assisted development tools": { icon: TbRobot, color: "text-[#818CF8]", bg: "bg-[#818CF8]/10", border: "border-[#818CF8]/25" }
};

const categoryIcons = {
  frontend: FiLayout,
  backend: FiServer,
  databases: FiDatabase,
  erp: FiBriefcase,
  tools: FiTool
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCategories = activeCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="py-20 sm:py-24 bg-[#0E1422]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Technical Skills"
          subtitle="A comprehensive, categorized overview of the development frameworks, databases, enterprise systems, and toolchains I work with."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-indigo-600 text-white shadow-sm border border-indigo-400/25'
                : 'bg-[#131C2E] text-slate-300 hover:text-white hover:bg-[#1A253C] border border-white/[0.08]'
            }`}
          >
            All Categories
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-indigo-600 text-white shadow-sm border border-indigo-400/25'
                  : 'bg-[#131C2E] text-slate-300 hover:text-white hover:bg-[#1A253C] border border-white/[0.08]'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const CategoryIcon = categoryIcons[category.id] || FiCode;
            const isErp = category.id === 'erp';
            
            return (
              <div
                key={category.id}
                className={`p-6 rounded-2xl bg-[#131C2E] border transition-all duration-300 flex flex-col justify-between shadow-sm ${
                  isErp
                    ? 'border-indigo-500/35 md:col-span-2 lg:col-span-1 shadow-indigo-950/20'
                    : 'border-white/[0.08] hover:border-white/[0.14]'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-100">
                        {category.title}
                      </h3>
                      <span className="text-[0.6875rem] font-mono text-slate-400">
                        {category.skills.length} tools &amp; technologies
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5 font-normal">
                    {category.description}
                  </p>

                  {/* Skills Grid with Modern Tool Icons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {category.skills.map((skill) => {
                      const toolConfig = toolIconMap[skill.name] || {
                        icon: FiCode,
                        color: "text-indigo-400",
                        bg: "bg-indigo-500/10",
                        border: "border-indigo-500/20"
                      };
                      const ToolIcon = toolConfig.icon;

                      return (
                        <div
                          key={skill.name}
                          className="group/item flex items-center gap-2.5 p-2 rounded-xl bg-[#0E1524] border border-white/[0.06] hover:border-white/[0.14] hover:bg-[#151F33] transition-all duration-200"
                        >
                          {/* Tool Icon Box */}
                          <div
                            className={`w-7 h-7 rounded-lg ${toolConfig.bg} ${toolConfig.border} border flex items-center justify-center shrink-0 transition-transform group-hover/item:scale-110`}
                          >
                            <ToolIcon className={`w-3.5 h-3.5 ${toolConfig.color}`} />
                          </div>

                          {/* Skill Name & Level */}
                          <div className="min-w-0 flex-1">
                            <div className="text-xs font-semibold text-slate-200 truncate group-hover/item:text-white">
                              {skill.name}
                            </div>
                            {skill.level && (
                              <div className="text-[0.625rem] text-slate-400 font-mono truncate">
                                {skill.level}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Footer Note */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[0.6875rem] text-slate-400">
                  <span className="flex items-center gap-1">
                    <FiCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Practical Implementation
                  </span>
                  <span className="font-mono text-slate-500">Verified</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
