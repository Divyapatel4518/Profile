import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  { name: "Business Analysis", items: ["BPMN", "UML", "Agile", "Scrum", "Waterfall", "Requirements Elicitation"] },
  { name: "Analytics & Tools", items: ["Power BI", "Tableau", "Excel", "JIRA", "WordPress Framework","Dreamweaver", "Relevance", "Visual Studio"] },
  { name: "Programing", items: ["HTML/CSS", "JavaScript", "SQL", "Java", "Python", "PHP"] }, 
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-grey-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-gold-dark mb-4">Skills</h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-md text-center border-b-4 border-gold hover:shadow-lg transition-shadow"
            >
              <h3 className="font-serif text-xl font-bold text-gray-800 mb-6">{category.name}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.items.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-sm font-medium border border-gray-100 hover:bg-gold hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};