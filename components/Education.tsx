import React from 'react';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export const Education: React.FC = () => {
  const educationList = [
      {
      degree: "Professional Year",
      institution: "Queensland University Of Technology",
      location: "Brisbane, Qld",
      period: "June 2025 - Feb 2026",
      subjects: " Australian Business Culture and Environment, Achieving Career Success, Australian Workplace Skills and Professional Business Communication",
    },
    {
      degree: "Master of Information Technology",
      institution: "Queensland University Of Technology",
      location: "Brisbane, Qld",
      period: "Feb 2023 - Nov 2024",
      subjects: "Business Process Modelling (BPMN), Database Management, IT Project Management, Systems Analysis and Business Analysis, ",
    },
    {
      degree: "Bachelor of Computer Engineering",
      institution: "", 
      location: "",
      period: "June 2013 - May 2017",
      subjects: "C, C++, JAVA, PHP, .NET, SQL, IT Professionals, IT Projects, Programming Fundamentals",
    }
  ];

  return (
    <section id="education" className="py-20 bg-grey-light">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-gold-dark mb-4">Education</h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {educationList.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-gold"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-gray-800 flex items-center gap-3">
                    <GraduationCap className="text-gold" size={24} />
                    {edu.degree}
                  </h3>
                  {edu.institution && (
                    <p className="text-lg font-medium text-gray-600 mt-1">
                      {edu.institution} {edu.location && <span className="text-gray-400 font-light">• {edu.location}</span>}
                    </p>
                  )}
                </div>
                <div className="flex items-center text-gold-dark font-medium bg-gold/10 px-4 py-2 rounded-full self-start">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">{edu.period}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="flex items-center text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">
                  <BookOpen size={16} className="mr-2" />
                  Key Subjects
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {edu.subjects}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};