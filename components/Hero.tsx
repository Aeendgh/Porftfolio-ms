
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 w-full h-full bg-slate-900"></div>
            <div className="absolute bottom-0 left-[-20%] right-[-20%] top-[20%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
            <div className="absolute bottom-0 right-[-20%] top-[20%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,122,255,.15),rgba(255,255,255,0))]"></div>
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-subtle-pulse"></div>
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-subtle-pulse animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 z-10">
            <div className="w-40 h-40 mx-auto mb-8">
                <img
                    src="https://picsum.photos/seed/mahmoud/200/200"
                    alt="Mahmoud Samnejad"
                    className="rounded-full w-full h-full object-cover border-4 border-slate-700 shadow-xl"
                    style={{
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    }}
                />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-100 tracking-tighter leading-tight">
                Hi, I’m <span className="text-cyan-400">Mahmoud Samnejad</span>
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-semibold text-slate-200">
                A Senior Software Developer
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-slate-400">
                Passionate about building scalable backend systems and creative web applications.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/resume.pdf" download className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto">
                    Download Resume
                </a>
                <a href="#contact" className="border-2 border-slate-600 text-slate-200 font-bold py-3 px-8 rounded-full hover:bg-slate-800 hover:border-slate-500 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                    Contact Me
                </a>
            </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <a href="#about" aria-label="Scroll down">
                <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center items-start p-1">
                    <div className="w-1 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                </div>
            </a>
        </div>
    </section>
  );
};

export default Hero;
