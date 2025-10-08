
import React from 'react';
import Section from './Section';
import SectionTitle from './SectionTitle';
import { EDUCATIONS, CERTIFICATES } from '../constants';

const Education: React.FC = () => {
  return (
    <Section id="education">
      <SectionTitle>Education & Certifications</SectionTitle>
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold text-slate-100 mb-6 text-center">Education</h3>
          <div className="space-y-6">
            {EDUCATIONS.map((edu, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <p className="text-lg font-bold text-slate-100">{edu.degree}</p>
                <p className="text-cyan-400">{edu.university}</p>
                <p className="text-slate-500">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-slate-100 mb-6 text-center">Certificates</h3>
          <div className="space-y-4">
            {CERTIFICATES.map((cert, index) => (
              <div key={index} className="flex items-center gap-4 bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                <div className="text-cyan-400 bg-slate-700/50 p-3 rounded-full">
                  <cert.icon className="w-6 h-6" />
                </div>
                <div>
                    <p className="font-semibold text-slate-200">{cert.name}</p>
                    <p className="text-sm text-slate-500">{cert.hours} hrs</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;
