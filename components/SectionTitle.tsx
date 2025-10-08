
import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-100 tracking-tight">{children}</h2>
      <div className="mt-4 w-20 h-1 bg-cyan-400 mx-auto rounded"></div>
    </div>
  );
};

export default SectionTitle;
