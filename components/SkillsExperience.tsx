import React, { useState } from 'react';
import { EXPERIENCES, EDUCATION, SKILLS } from '../constants';

const SkillsExperience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Skills & Experience</h2>
          <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
            Over 2 years of academic and internship experience building end-to-end AI applications and securing digital assets.
            From Machine Learning models to Offensive Security, leveraging Python, Cloud platforms, and best practices in Engineering.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left Side: Skills */}
          <div className="w-full lg:w-5/12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="w-8 h-1 bg-primary mr-3"></span>
              My Skills
            </h3>
            
            <div className="space-y-8">
              {SKILLS.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-bold text-gray-700 group-hover:text-primary transition-colors">{skill.name}</span>
                    <span className="font-bold text-gray-900">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <div 
                      className={`h-2.5 rounded-full ${skill.color} transition-all duration-1000 ease-out group-hover:opacity-80`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
              <h4 className="font-bold text-gray-900 mb-2">Focus Areas</h4>
              <div className="flex flex-wrap gap-2">
                {['Intrusion Detection', 'Phishing Detection', 'Predictive Models', 'Cloud Security', 'OSINT'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Tabs for Exp/Edu */}
          <div className="w-full lg:w-7/12">
            <div className="flex mb-8 border-b border-gray-200">
              <button
                onClick={() => setActiveTab('experience')}
                className={`pb-4 pr-8 text-xl font-bold transition-all relative ${
                  activeTab === 'experience' 
                    ? 'text-primary' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                Experience
                {activeTab === 'experience' && <span className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-t-full"></span>}
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`pb-4 px-8 text-xl font-bold transition-all relative ${
                  activeTab === 'education' 
                    ? 'text-secondary' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                Education
                {activeTab === 'education' && <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary rounded-t-full"></span>}
              </button>
            </div>

            <div className="space-y-8">
              {activeTab === 'experience' ? (
                <div className="space-y-12 animate-fadeIn">
                  {EXPERIENCES.map((exp) => (
                    <div key={exp.id} className="flex gap-6 group">
                      <div className="flex flex-col items-center">
                         <div className="w-12 h-12 rounded-full bg-indigo-50 text-primary flex items-center justify-center font-bold text-xl group-hover:bg-primary group-hover:text-white transition-colors border-2 border-indigo-100">
                            {exp.id}
                         </div>
                         <div className="w-0.5 h-full bg-gray-200 my-2 group-last:hidden"></div>
                      </div>
                      <div className="pb-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-1">{exp.role}</h4>
                        <div className="text-primary font-medium mb-2">{exp.company} <span className="text-gray-400 mx-2">|</span> <span className="text-gray-500 text-sm">{exp.period}</span></div>
                        <ul className="list-disc list-outside ml-4 text-gray-600 space-y-2 text-sm leading-relaxed marker:text-secondary">
                          {exp.description.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-12 animate-fadeIn">
                  {EDUCATION.map((edu, index) => (
                    <div key={edu.id} className="flex gap-6 group">
                       <div className="flex flex-col items-center">
                         <div className="w-12 h-12 rounded-full bg-amber-50 text-secondary flex items-center justify-center font-bold text-xl group-hover:bg-secondary group-hover:text-white transition-colors border-2 border-amber-100">
                            {index + 1}
                         </div>
                         <div className="w-0.5 h-full bg-gray-200 my-2 group-last:hidden"></div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-1">{edu.degree}</h4>
                        <div className="text-secondary font-medium mb-2">{edu.institution}</div>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="bg-gray-100 px-2 py-1 rounded">{edu.period}</span>
                          {edu.score && <span className="font-bold text-gray-700">{edu.score}</span>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsExperience;