
import React from 'react';
import { CAREER_DATA } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 bg-slate-900/30 scroll-mt-24">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative glass p-4 rounded-[2rem] border border-slate-800">
              <img 
                src="https://picsum.photos/seed/dev-portrait/600/800" 
                alt="Profile" 
                className="rounded-3xl w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-10 right-10 glass p-6 rounded-2xl border border-slate-700 max-w-[200px] animate-bounce">
                <span className="text-3xl font-bold text-gradient">7+</span>
                <p className="text-sm text-slate-400 mt-1">Years of experience</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Mastering the <span className="text-gradient">Art of Code</span></h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              {CAREER_DATA.bio}
            </p>

            <div className="space-y-8">
              {CAREER_DATA.experience.map((exp, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-slate-800">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                  <div className="mb-1">
                    <span className="text-blue-400 font-bold text-sm tracking-widest uppercase">{exp.period}</span>
                    <h3 className="text-xl font-bold mt-1">{exp.position} — <span className="text-slate-400 font-medium">{exp.company}</span></h3>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3 text-slate-400 text-sm">
                        <span className="text-blue-500">▹</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
