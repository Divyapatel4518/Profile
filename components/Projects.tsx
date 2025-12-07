import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  subtitle: string;
  focus: string;
  outcome?: string;
  challenges?: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "LLM Tool for Strategic Foresight",
    subtitle: "AI + RAG + Relevance",
    focus: "Developed a LLM use of RAG tool on Relevance AI for the Queensland Government to streamline the extraction of Driving Forces within the PESTEL framework.",
    challenges: "Adapted to scope changes and optimized tool accuracy through iterative improvements.",
    link: "https://github.com/Divyapatel4518/LLM-Tool-for-Strategic-Foresight"
  },
  {
    title: "Blockchain in Education",
    subtitle: "Student Skills Ledger",
    focus: "Explored blockchain for secure, transparent data management. Findings identified adoption benefits but noted cost and skill challenges.",
    outcome: "Recommended strategies for overcoming barriers, emphasizing cost management, technical training, and institutional support.",
    link: "https://github.com/Divyapatel4518/Blockchain-in-Education"
  },
  {
    title: "Hospital Dashboard",
    subtitle: "Power BI KPI Analysis",
    focus: "Analyzed key KPIs—wait times, readmission, mortality, satisfaction, sources and profit—to uncover trends and system challenges.",
    outcome: "Identified regional performance gaps and provided actionable insights to improve healthcare planning and decision-making.",
    link: "https://github.com/Divyapatel4518/Australian-Hospital-Performance-Dashboard"
  },
  {
    title: "Housing Market Dataset",
    subtitle: "ABS + RBA + Forecasts",
    focus: "Collected and merged real-world data from ABS, RBA, and real estate sources covering prices, rents, demographics, and affordability metrics.",
    outcome: "Delivered a clean, unified Excel dataset ready for Power BI dashboard prototyping, providing the foundation for visual insights.",
    link: "https://github.com/Divyapatel4518/Australian-Real-Estate-Housing-Market-Dashboard"
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-gold-dark mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white rounded-xl border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              
              <div className="mb-4">
                <span className="text-xs font-bold tracking-wider text-gold uppercase">{project.subtitle}</span>
                <h3 className="font-serif text-2xl font-bold text-gray-800 mt-2 mb-4 group-hover:text-gold-dark transition-colors">{project.title}</h3>
              </div>

              <div className="text-gray-600 mb-6 text-sm leading-relaxed space-y-2">
                <p><span className="font-semibold text-gray-800">Focus:</span> {project.focus}</p>
                {project.challenges && <p><span className="font-semibold text-gray-800">Challenges:</span> {project.challenges}</p>}
                {project.outcome && <p><span className="font-semibold text-gray-800">Outcome:</span> {project.outcome}</p>}
              </div>

              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center text-gold-dark font-semibold text-sm hover:text-gold transition-colors"
                >
                  View Details <ArrowRight size={16} className="ml-2" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};