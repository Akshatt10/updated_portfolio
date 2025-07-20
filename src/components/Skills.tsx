import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Cloud, Settings, Cpu } from 'lucide-react';

// --- TYPE DEFINITIONS for TypeScript ---
// This makes our code type-safe and prevents the errors you were seeing.

// Defines the shape of each line object in the terminal output.
type Line = 
  | { type: 'command'; text: string }
  | { type: 'output'; text: string; color?: string }
  | { type: 'skills'; skills: string[] }
  | { type: 'prompt' };

// This is the main component, now written in TypeScript (.tsx)
const SkillsTerminal = (): JSX.Element => {
  // --- DATA ---
  // The data structure remains the same.
  const skillCategories = [
    {
      icon: Code,
      title: 'Languages',
      skills: ['Python', 'JavaScript', 'TypeScript', 'C++', 'SQL', 'Go'],
    },
    {
      icon: Settings,
      title: 'Frameworks & Libraries',
      skills: ['FastAPI', 'React', 'Node.js', 'Koa.js', 'Prisma'],
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'Neo4j', 'Redis', 'CosmosDB'],
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: ['Azure', 'Docker', 'Git', 'CI/CD', 'Linux'],
    }
  ];

  const additionalTech = [
    'WebSockets', 'Agentic AI', 'Microservices', 'REST APIs', 'GraphQL',
    'JWT', 'OAuth', 'Machine Learning', 'TensorFlow', 'Pandas',
    'NumPy', 'Nginx', 'Web3', 'Blockchain', 'Cypher Query Language'
  ];
  
  // --- STATE FOR ANIMATION ---
  // We explicitly tell useState that it will hold an array of our 'Line' type.
  const [lines, setLines] = useState<Line[]>([]);
  // We type useRef to expect an HTMLDivElement for proper DOM access.
  const terminalRef = useRef<HTMLDivElement>(null);

  // --- LOGIC TO GENERATE AND ANIMATE LINES ---
  useEffect(() => {
    // We explicitly type the 'generatedLines' array.
    const generatedLines: Line[] = [];
    generatedLines.push({ type: 'command', text: './list-skills.sh' });
    generatedLines.push({ type: 'output', text: 'Initializing skill assessment protocol...' });
    generatedLines.push({ type: 'output', text: ' ' });

    skillCategories.forEach(category => {
      generatedLines.push({ type: 'output', text: `// ${category.title}`, color: 'text-purple-400' });
      generatedLines.push({ type: 'skills', skills: category.skills });
      generatedLines.push({ type: 'output', text: ' ' });
    });
    
    generatedLines.push({ type: 'output', text: `// Additional Technologies`, color: 'text-purple-400' });
    generatedLines.push({ type: 'skills', skills: additionalTech });
    generatedLines.push({ type: 'output', text: ' ' });

    generatedLines.push({ type: 'output', text: 'Skill matrix loaded successfully.', color: 'text-green-400' });
    generatedLines.push({ type: 'prompt' });

    // This effect handles the line-by-line animation.
    let index = 0;
    const interval = setInterval(() => {
      if (index < generatedLines.length) {
        // By using slice, we create a new array for the state on each update.
        // This replaces the previous state instead of appending to it, which prevents duplication.
        setLines(generatedLines.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 250); // Adjust delay between lines here

    // The cleanup function clears the interval when the component unmounts.
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs only once on mount

  // --- AUTO-SCROLLING LOGIC ---
  useEffect(() => {
    // The ref is now correctly typed, so TypeScript knows about 'scrollTop' and 'scrollHeight'.
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  // --- RENDER ---
  return (
    <section id="skills" className="py-24 bg-gray-900 font-sans">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
           <div className="inline-flex items-center gap-3 mb-4">
             <Cpu className="w-8 h-8 text-teal-300" />
             <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-300 to-purple-400 bg-clip-text text-transparent">
               My Tech Stack
             </h2>
           </div>
           <p className="text-gray-400 text-lg max-w-3xl mx-auto">
             A curated list of technologies I work with, presented in a classic terminal interface.
           </p>
        </div>

        {/* Terminal Window */}
        <div className="max-w-4xl mx-auto bg-black bg-opacity-50 backdrop-blur-sm rounded-xl shadow-2xl shadow-teal-500/10 border border-gray-700 overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-gray-800/80 p-3 flex items-center gap-2 border-b border-gray-700">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <p className="text-xs text-gray-400 ml-2 font-mono">/bin/bash</p>
          </div>

          {/* Terminal Body */}
          <div ref={terminalRef} className="p-4 md:p-6 h-96 overflow-y-auto font-mono text-sm text-gray-300">
            {lines.map((line, index) => {
              // The switch statement now correctly infers the properties available on 'line'.
              switch (line.type) {
                case 'command':
                  return (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-teal-400">user@portfolio:~$</span>
                      <span className="flex-1">{line.text}</span>
                    </div>
                  );
                case 'output':
                  return <p key={index} className={line.color || ''}>{line.text}</p>;
                case 'skills':
                  return (
                    <div key={index} className="flex flex-wrap gap-2 py-1">
                      {line.skills.map((skill: string) => ( // Explicitly typing 'skill' as a string
                        <span key={skill} className="px-3 py-1 bg-gray-700/50 border border-gray-600/80 text-teal-300 rounded-md hover:bg-teal-500/20 hover:border-teal-400/70 transition-all duration-300 cursor-default">
                          {skill}
                        </span>
                      ))}
                    </div>
                  );
                case 'prompt':
                  return (
                     <div key={index} className="flex items-center gap-2">
                       <span className="text-teal-400">user@portfolio:~$</span>
                       <span className="w-2 h-4 bg-green-400 animate-pulse"></span>
                     </div>
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsTerminal;
