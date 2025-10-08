
import React from 'react';
import Section from './Section';
import SectionTitle from './SectionTitle';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = [...new Set(SKILLS.map(skill => skill.category))];

  return (
    <Section id="skills" className="bg-slate-900/70">
      <SectionTitle>Technical Skills</SectionTitle>
      <div className="space-y-12">
        {categories.map(category => (
          <div key={category}>
            <h3 className="text-2xl font-semibold text-slate-100 mb-6 text-center">{category}</h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {SKILLS.filter(skill => skill.category === category).map(skill => (
                <div key={skill.name} className="group flex items-center gap-4 bg-slate-800/50 border border-slate-700 rounded-lg p-4 transition-all duration-300 hover:bg-slate-800 hover:border-cyan-400/50 hover:-translate-y-1 w-full sm:w-auto sm:min-w-[200px]">
                  <div className="text-cyan-400">
                    <skill.icon className="w-8 h-8" />
                  </div>
                  <span className="text-slate-200 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
