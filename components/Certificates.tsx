import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface Certificate {
  name: string;
  issuer: string;
  link: string;
}

const certs: Certificate[] = [
  { 
    name: "Business Analysis Foundations", 
    issuer: "LinkedIn Learning", 
    link: "#" // Replace with actual certificate URL
  },
  { 
    name: "Power BI For Beginner", 
    issuer: "Microsoft", 
    link: "#" 
  },
  { 
    name: "Data Analytics Job Simulation", 
    issuer: "Deloitte Australia (Forage)", 
    link: "#" 
  },
  { 
    name: "Technology Job Simulation", 
    issuer: "Deloitte Australia (Forage)", 
    link: "#" 
  },
  { 
    name: "Microsoft Azure Fundamentals", 
    issuer: "Skillsoft", 
    link: "#" 
  },
  { 
    name: "Cyber Job Simulation", 
    issuer: "Deloitte Australia (Forage)", 
    link: "#" 
  },
  { 
    name: "Digital Job Simulation", 
    issuer: "NSW Government (Forage)", 
    link: "#" 
  },
  { 
    name: "RAG Training", 
    issuer: "Relevance AI", 
    link: "#" 
  }
];

export const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-20 bg-[#FAF9F6]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-gold-dark mb-4">Certificates</h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-2 border-transparent hover:border-gold flex flex-col items-center text-center relative overflow-hidden cursor-pointer"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold mb-4 group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                <Award size={24} />
              </div>
              <h3 className="text-gray-800 font-semibold text-sm mb-1 group-hover:text-gold-dark transition-colors">{cert.name}</h3>
              <p className="text-gray-500 text-xs uppercase tracking-wide">{cert.issuer}</p>
              
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gold-dark">
                <ExternalLink size={16} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};