
import React from 'react';
import Section from './Section';
import SectionTitle from './SectionTitle';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <Section id="experience">
      <SectionTitle>Experience</SectionTitle>
      <div className="max-w-3xl mx-auto">
        <div className="relative border-l-2 border-slate-700 pl-8 space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[41px] top-1 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900 ring-4 ring-cyan-400"></div>
              <h3 className="text-2xl font-bold text-slate-100">{exp.role}</h3>
              <p className="text-lg font-semibold text-cyan-400 mb-1">{exp.company}</p>
              <p className="text-sm text-slate-500 mb-4">{exp.duration}</p>
              <p className="leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
