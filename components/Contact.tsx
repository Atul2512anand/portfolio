import React from 'react';
import { Github, Linkedin, Mail, Phone, Send, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
          <p className="text-gray-600">Reach out for collaborations or just a friendly hello</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl overflow-hidden shadow-xl">
          
          {/* Left: Info Panel */}
          <div className="w-full lg:w-5/12 bg-primary p-12 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>

            <div>
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-indigo-200 text-sm mb-1">Location</p>
                    <p className="font-semibold text-lg">Dharwad, Karnataka, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="p-3 bg-white/10 rounded-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-indigo-200 text-sm mb-1">Call Me</p>
                    <p className="font-semibold text-lg">+91 8002424420</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="p-3 bg-white/10 rounded-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-indigo-200 text-sm mb-1">Email Me</p>
                    <p className="font-semibold text-lg break-all">atul.btmtcs10232807@nfsu.ac.in</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-indigo-200 mb-4">Follow me</p>
              <div className="flex gap-4">
                <a href="https://github.com/Atul2512anand" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white hover:text-primary transition-all">
                  <Github size={20} />
                </a>
                <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white hover:text-primary transition-all">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="w-full lg:w-7/12 p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Your Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Message</label>
                <textarea 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                ></textarea>
              </div>

              <button 
                type="button"
                className="w-full md:w-auto px-8 py-4 bg-secondary text-indigo-900 font-bold rounded-lg shadow-lg shadow-yellow-100 hover:shadow-yellow-200 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;