import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Projects</h2>
            <div className="w-16 h-1 bg-primary"></div>
          </div>
          <button className="mt-4 md:mt-0 px-6 py-2 bg-primary text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium">
            All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex flex-col h-full">
                <div className="flex p-6 md:p-8 gap-6">
                  {/* Icon Container */}
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      {/* Simple dynamic initial logic or generic icon */}
                      <span className="text-2xl font-bold">{project.title.charAt(0)}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="mb-4">
                      <span className="text-xs font-bold text-gray-900 uppercase tracking-wider block mb-2">Tools Used</span>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <span key={tool} className="text-xs font-medium text-primary bg-indigo-50 px-2 py-1 rounded">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 mt-auto pt-4 border-t border-gray-100">
                      <button className="text-sm font-semibold text-gray-600 hover:text-primary flex items-center gap-1 transition-colors">
                        View Project <ArrowUpRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;