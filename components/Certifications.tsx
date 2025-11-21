import React from 'react';
import { CERTIFICATIONS } from '../constants';
import { Award } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Continuous learning is key. Here are some of the professional certifications I have earned.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.id} className="bg-white rounded-xl border border-gray-200 p-2 hover:border-secondary/50 transition-colors duration-300 group cursor-pointer shadow-sm hover:shadow-md">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4 bg-gray-100">
                {/* Simulated Certificate visual */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 group-hover:scale-105 transition-transform duration-500">
                    <Award className="w-16 h-16 text-gray-300 group-hover:text-secondary transition-colors" />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
              </div>
              <div className="px-2 pb-2">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{cert.title}</h3>
                <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600 font-medium">{cert.issuer}</span>
                    <span className="text-gray-400">{cert.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
             <button className="px-8 py-3 bg-indigo-50 text-primary font-semibold rounded-lg hover:bg-indigo-100 transition-colors">
                 Additional Certificates
             </button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;