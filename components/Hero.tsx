import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

const roles = [
  "Business Analyst", 
  "Data Analyst", 
  "Power BI Developer", 
  "Problem Solver",
  "IT Support", 
  "Web Developer", 
  "Customer Supporter"
];

export const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(150);

  useEffect(() => {
    let ticker = setTimeout(() => {
      tick();
    }, delta);

    return () => clearTimeout(ticker);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, delta]);

  const tick = () => {
    let i = roleIndex % roles.length;
    let fullText = roles[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(50);
    } else {
      setDelta(100);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(2000); // Pause at end of word
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setRoleIndex(roleIndex + 1);
      setDelta(500); // Pause before next word
    }
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-gray-200/50 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-gray-800">
            Hi, I'm <span className="text-gold-dark">Divya Patel</span>
          </h1>
          
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed font-light">
            Master of IT (Business Analysis) • B.TECH (Computer) • Php Developer (Icon Technology) • Customer Service (Coles)
          </p>

          <div className="text-2xl md:text-3xl font-light text-gray-700 min-h-[40px] mb-10">
            I'm a <span className="font-semibold text-gold-dark">{text}</span>
            <span className="cursor-blink ml-1 text-gray-400">|</span>
          </div>

          <a 
            href="/Divya_Resume.pdf" 
            target="_blank"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white px-8 py-3 rounded-md font-medium transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};