
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900/50 border-t border-slate-800 py-6 text-center text-slate-500">
      <div className="container mx-auto px-6">
        <p>&copy; {new Date().getFullYear()} Mahmoud Samnejad. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
