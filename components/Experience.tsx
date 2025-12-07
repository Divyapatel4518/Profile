import React from 'react';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

export const Experience: React.FC = () => {
  const experiences = [
    {
      role: "Customer Service Supervisor",
      company: "Coles",
      description: "Leadership, training, operations management, and ensuring high-quality customer service delivery in a fast-paced retail environment.",
      year: "March 2023 – Present"
    },
    {
      role: "PHP Developer",
      company: "Icon Technology",
      description: "Responsive website development, system updates, database management, and collaborative teamwork to deliver client solutions.",
      year: "July 2017 – Dec 2020"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-gold-dark mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className="relative border-l-2 border-gray-200 ml-4 md:ml-0 md:pl-0 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:flex items-center justify-between">
                <div className="hidden md:block w-5/12 text-right pr-10">
                  <h3 className="font-serif text-xl font-bold text-gray-800">{exp.role}</h3>
                  <p className="text-gold font-medium">{exp.company}</p>
                </div>

                {/* Center Icon */}
                <div className="absolute left-[-9px] md:left-1/2 md:-ml-[21px] top-0 md:top-2 w-10 h-10 bg-white border-2 border-gold rounded-full flex items-center justify-center text-gold shadow-sm z-10">
                  <Briefcase size={18} />
                </div>

                {/* Mobile View Title */}
                <div className="md:hidden mb-2">
                  <h3 className="font-serif text-xl font-bold text-gray-800">{exp.role}</h3>
                  <p className="text-gold font-medium">{exp.company}</p>
                </div>

                <div className="md:w-5/12 pl-0 md:pl-10">
                   <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                     <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
                     <span className="inline-block mt-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">{exp.year}</span>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};