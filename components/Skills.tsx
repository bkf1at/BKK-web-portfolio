
import React from 'react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip 
} from 'recharts';
import { CAREER_DATA } from '../constants';

const Skills: React.FC = () => {
  const chartData = CAREER_DATA.skills.map(skill => ({
    subject: skill.name,
    A: skill.level,
    fullMark: 100,
  }));

  return (
    <section id="skills" className="py-24 px-4 scroll-mt-24">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Core <span className="text-gradient">Arsenal</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My technical stack spans across the entire modern development lifecycle, from polished interfaces to robust cloud architectures.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Radar Chart */}
          <div className="h-[400px] glass rounded-3xl p-4 border border-slate-800 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Proficiency"
                  dataKey="A"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.5}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', color: '#fff' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Progress Bars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CAREER_DATA.skills.map((skill, idx) => (
              <div key={idx} className="glass p-5 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors group">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-bold text-slate-200">{skill.name}</span>
                  <span className="text-xs font-medium text-blue-400 bg-blue-500/10 px-2 py-1 rounded-lg">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
