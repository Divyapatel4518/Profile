import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <footer className="bg-[#111] text-white py-6 text-center text-sm">
        <p>© {new Date().getFullYear()} Divya Patel — All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default App;