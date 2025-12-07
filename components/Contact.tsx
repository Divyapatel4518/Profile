import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <h2 className="font-serif text-4xl font-bold text-gold-dark mb-4">Get In Touch</h2>
        <div className="w-20 h-1 bg-gold mx-auto rounded-full mb-10"></div>
        
        <p className="text-gray-600 mb-10 text-lg">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>

        <div className="grid grid-cols-1 md: gap-6 mb-12">
          <a 
            href="mailto:divya.patel4518@gmail.com"
            className="flex items-center justify-center gap-4 p-6 bg-grey-light rounded-xl hover:bg-gold hover:text-white transition-all duration-300 group shadow-sm"
          >
            <div className="bg-white p-3 rounded-full text-gold group-hover:text-gold-dark transition-colors">
              <Mail size={24} />
            </div>
            <span className="font-medium">divya.patel4518@gmail.com</span>
          </a>

          
        </div>

        <div className="flex justify-center space-x-6">
          <a 
            href="https://www.linkedin.com/in/divya-patel-844878111/" 
            target="_blank" 
            rel="noreferrer" 
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gold hover:text-white transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://github.com/Divyapatel4518" 
            target="_blank" 
            rel="noreferrer" 
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gold hover:text-white transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};