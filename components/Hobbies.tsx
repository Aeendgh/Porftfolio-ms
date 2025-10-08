
import React from 'react';
import Section from './Section';
import SectionTitle from './SectionTitle';
import { HOBBIES } from '../constants';

const Hobbies: React.FC = () => {
  return (
    <Section id="hobbies" className="bg-slate-900/70">
      <SectionTitle>Beyond Coding</SectionTitle>
      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {HOBBIES.map((hobby, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6 bg-slate-800/50 border border-slate-700 rounded-lg w-40 h-40 justify-center transition-all duration-300 hover:bg-slate-800 hover:border-cyan-400/50 hover:-translate-y-1">
            <div className="text-cyan-400 mb-3">
              <hobby.icon className="w-12 h-12" />
            </div>
            <p className="font-medium text-slate-200">{hobby.name}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Hobbies;
