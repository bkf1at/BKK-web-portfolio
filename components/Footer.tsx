
import React from 'react';
import { CAREER_DATA } from '../constants';

const Footer: React.FC = () => {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-900 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <a 
              href="#home" 
              onClick={handleScrollToTop}
              className="text-2xl font-black text-gradient tracking-tighter hover:opacity-80 transition-opacity uppercase"
            >
              BARBARA.KUFFOUR
            </a>
            <p className="text-slate-500 text-sm mt-2">© {new Date().getFullYear()} {CAREER_DATA.name}. Built with Passion.</p>
          </div>

          <div className="flex gap-6">
            <a href="https://www.zabbywebsolutions.com/" className="text-slate-500 hover:text-blue-400 transition-colors">Zabby Web Solutions</a>
            <a href="https://github.com/bkf1at" className="text-slate-500 hover:text-blue-400 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/barbara-kuffuor/" className="text-slate-500 hover:text-blue-400 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
