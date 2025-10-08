
import React from 'react';
import Section from './Section';
import SectionTitle from './SectionTitle';
import { PROJECTS } from '../constants';
import { IconCode } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <Section id="works" className="bg-slate-900/70">
      <SectionTitle>My Works</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <div key={index} className="group relative bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-slate-600">
            <div className="overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-100 mb-2">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(t => (
                  <span key={t} className="bg-slate-700 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">{t}</span>
                ))}
              </div>
              <p className="mb-4 text-slate-400">{project.description}</p>
              <div className="flex items-center gap-4">
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">View Live</a>}
                {project.codeUrl && <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors flex items-center gap-2"><IconCode className="w-5 h-5" /> View Code</a>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;
