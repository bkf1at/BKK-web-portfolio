
import React from 'react';
import { CAREER_DATA } from '../constants';

const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 scroll-mt-24">
      <div className="container mx-auto text-center z-10">
        <div className="inline-block glass px-4 py-2 rounded-full text-blue-400 text-sm font-bold mb-6 border border-blue-500/20 tracking-wider uppercase animate-pulse">
          Open to new opportunities
        </div>
        
        <h1 className="text-5xl md:text-8xl font-extrabold mb-6 tracking-tight">
          Crafting Digital <br />
          <span className="text-gradient">Experiences.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Hi, I'm <span className="text-slate-100 font-bold">{CAREER_DATA.name}</span>. I build high-performance 
          web applications with a focus on modern UI/UX and effective web migrations across various platforms.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, 'projects')}
            className="w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold transition-all shadow-lg shadow-blue-600/20 transform hover:-translate-y-1 active:scale-95"
          >
            Explore My Work
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, 'contact')}
            className="w-full md:w-auto px-8 py-4 glass border border-slate-700 hover:border-slate-500 rounded-2xl font-bold transition-all transform hover:-translate-y-1 active:scale-95"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll Indicator */}
        <a 
          href="#about"
          onClick={(e) => handleScrollTo(e, 'about')}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hover:opacity-100 transition-opacity"
        >
          <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
