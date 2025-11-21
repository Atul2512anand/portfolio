import React from 'react';
import { Download } from 'lucide-react';
import { PROFILE_IMAGE_URL, RESUME_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-32 pb-12 lg:pt-40 lg:pb-20 bg-white overflow-hidden min-h-screen flex items-center">
      
      {/* Decorative Paint Splash - Positioned behind text */}
      <div className="absolute top-0 left-0 w-[900px] h-[900px] -translate-x-1/3 -translate-y-1/4 z-0 pointer-events-none text-secondary opacity-90 hidden md:block">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="fill-current w-full h-full">
          <path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.9C87.4,-34.7,90.1,-20.4,89.3,-6.3C88.5,7.8,84.2,21.7,76.8,34.4C69.4,47.1,58.9,58.6,46.8,66.2C34.7,73.8,21,77.5,7.1,77.2C-6.8,76.9,-20.9,72.6,-34.5,66.1C-48.1,59.6,-61.2,50.9,-71.1,39.2C-81,27.5,-87.7,12.8,-87.2,-1.6C-86.7,-16,-79,-30.1,-69,-41.6C-59,-53.1,-46.7,-62,-33.5,-69.6C-20.3,-77.2,-6.2,-83.5,6.8,-82.3C19.8,-81.1,30.5,-83.6,44.7,-76.4Z" transform="translate(100 100) scale(1.1)" />
        </svg>
      </div>
      
      {/* Mobile Background Splash */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-secondary/20 -skew-y-12 origin-top-left z-0 md:hidden"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="w-full md:w-1/2 space-y-4 mt-8 md:mt-0 text-center md:text-left">
            <span className="text-3xl md:text-4xl font-bold text-indigo-600 block animate-fadeIn" style={{animationDelay: '0.1s'}}>
              I'm
            </span>
            
            {/* Name with Gradient Text Shine Animation */}
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[1.1] mb-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-700 to-slate-900 bg-[length:200%_auto] animate-text-shine">
                Atul Anand
              </span>
            </h1>
            
            {/* Role with Infinite Typewriter Animation */}
            <div className="inline-flex items-center h-12 md:h-16">
              <p className="text-xl md:text-3xl font-semibold text-gray-700 overflow-hidden whitespace-nowrap border-r-4 border-secondary animate-typing pr-2">
                Cybersecurity & AI Engineer
              </p>
            </div>
            
            <p className="text-gray-700 text-lg max-w-lg mx-auto md:mx-0 mt-6 leading-relaxed animate-fadeIn font-medium" style={{animationDelay: '0.5s'}}>
              A passionate engineer skilled in securing digital assets and building intelligent AI pipelines. 
              Experienced in OSINT, Machine Learning, and Cloud Security.
            </p>

            <div className="pt-8 animate-fadeIn" style={{animationDelay: '0.8s'}}>
              <a 
                href={RESUME_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-primary rounded-full shadow-xl shadow-indigo-200 hover:bg-indigo-700 transition-all hover:-translate-y-1 hover:shadow-2xl"
              >
                View Resume <Download className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
               {/* Animated background blobs */}
              <div className="absolute top-0 right-0 w-full h-full bg-indigo-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-8 -left-8 w-full h-full bg-yellow-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
              
              {/* Main Image Container - Circle or Rounded Rect based on preference, used Circle here for cleaner look with splash */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-[6px] border-white bg-white">
                <img 
                  src={PROFILE_IMAGE_URL} 
                  alt="Atul Anand" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;