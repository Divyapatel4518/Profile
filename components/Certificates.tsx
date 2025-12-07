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
    link: "https://www.linkedin.com/learning/certificates/26fe28a27ea5cc25d6c7655322fd43810b218ca135142d8e62d67069117ac4bf" // Replace with actual certificate URL
  },
  { 
    name: "Power BI For Beginner", 
    issuer: "Microsoft", 
    link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzIyIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODkyODU1NV85Mjk1MDc2MTc1NzIzNTEzNTAzNS5wbmciLCJ1c2VybmFtZSI6IkRpdnlhIFBhdGVsIn0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4211%2FPower%2520BI%2520for%2520Beginners%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1517786748087730843&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVT0sJzE5xNkxOi0iyrytKTUstKsrMS49PKsovL04tsnVNSU8FAP0dVWc9AAAA" 
  },
  { 
    name: "Data Analytics Job Simulation", 
    issuer: "Deloitte Australia (Forage)", 
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_J8FiXkmw8upihxWZf_1749283296381_completion_certificate.pdf" 
  },
  { 
    name: "Technology Job Simulation", 
    issuer: "Deloitte Australia (Forage)", 
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_8f5SpGWPZsECg3Jtt_1751243384237_completion_certificate.pdf" 
  },
  { 
    name: "Microsoft Azure Fundamentals", 
    issuer: "Skillsoft", 
    link: "https://skillsoft.digitalbadges.skillsoft.com/63c19f38-eeeb-4783-89ee-f6da5f3f4bc9" 
  },
  { 
    name: "Cyber Job Simulation", 
    issuer: "Deloitte Australia (Forage)", 
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_J8FiXkmw8upihxWZf_1753403648627_completion_certificate.pdf" 
  },
  { 
    name: "Digital Job Simulation", 
    issuer: "NSW Government (Forage)", 
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/nppSEH2cXYTz95hL7/cyvjFvbkyoWcsFNhM_nppSEH2cXYTz95hL7_8f5SpGWPZsECg3Jtt_1756431079382_completion_certificate.pdf" 
  },
 
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