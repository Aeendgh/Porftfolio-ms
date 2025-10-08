
import React from 'react';
import Section from './Section';
import SectionTitle from './SectionTitle';

const About: React.FC = () => {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3">
          <p className="text-lg mb-6 leading-relaxed">
            I’m Mahmoud Samnejad, born in October 1992 in Kerman, Iran. I’m a senior backend developer with a strong background in software engineering and genetics. I enjoy creating efficient backend architectures, exploring new technologies, and continuously learning.
          </p>
          <p className="text-lg leading-relaxed">
            My journey from genetics to software engineering has given me a unique perspective on problem-solving, allowing me to approach complex challenges with a structured and analytical mindset.
          </p>
        </div>
        <div className="md:col-span-2 bg-slate-800/50 p-6 rounded-lg border border-slate-700">
          <ul className="space-y-4">
            <li><strong>Name:</strong> Mahmoud Samnejad</li>
            <li><strong>Date of Birth:</strong> October 1992</li>
            <li><strong>Location:</strong> Kerman, Iran</li>
            <li><strong>Role:</strong> Senior Backend Developer</li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default About;
