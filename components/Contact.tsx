
import React, { useState } from 'react';
import Section from './Section';
import SectionTitle from './SectionTitle';

const IconGitHub = ({ className = "w-6 h-6" }: { className?: string }) => <svg className={className} viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.89 1.53 2.34 1.09 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.95c0-1.1.39-1.99 1.03-2.69c-.1-.25-.45-1.27.1-2.65c0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85 0 1.7.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.38.2 2.4.1 2.65c.64.7 1.03 1.59 1.03 2.69c0 3.85-2.34 4.7-4.57 4.94c.36.31.68.92.68 1.85v2.73c0 .27.18.58.69.48A10 10 0 0 0 22 12A10 10 0 0 0 12 2Z"/></svg>;
const IconLinkedIn = ({ className = "w-6 h-6" }: { className?: string }) => <svg className={className} viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3c0-2.82-1.29-3.92-3.32-3.92A3.33 3.33 0 0 0 12 11.1V10H9v8.5h3v-4.7c0-1.26.47-2.12 1.63-2.12c1.08 0 1.37.84 1.37 2.12V18.5H18.5M6.88 8.5H4V18.5h2.88V8.5M5.44 7a1.44 1.44 0 1 0 0-2.88a1.44 1.44 0 1 0 0 2.88Z"/></svg>;

const Contact: React.FC = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Submitting...');
    // Simulate form submission
    setTimeout(() => {
      setStatus('Message sent successfully!');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };
  return (
    <Section id="contact">
      <SectionTitle>Get In Touch</SectionTitle>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="flex flex-col">
          <p className="text-lg mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to reach out.
          </p>
          <div className="space-y-4 mb-8">
             <a href="mailto:placeholder@email.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-slate-800/50 rounded-full flex items-center justify-center border border-slate-700 group-hover:bg-slate-800 group-hover:text-cyan-400 transition-all"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg></div>
                <span className="group-hover:text-cyan-400 transition-colors">placeholder@email.com</span>
             </a>
          </div>
          <div className="flex space-x-4">
             <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors"><IconGitHub className="w-8 h-8" /></a>
             <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors"><IconLinkedIn className="w-8 h-8" /></a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" placeholder="Your Name" name="name" required className="w-full p-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            <input type="email" placeholder="Your Email" name="email" required className="w-full p-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            <textarea placeholder="Your Message" name="message" rows={5} required className="w-full p-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"></textarea>
            <button type="submit" className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg w-full">
                Send Message
            </button>
            {status && <p className="text-center mt-4">{status}</p>}
        </form>
      </div>
    </Section>
  );
};

export default Contact;
