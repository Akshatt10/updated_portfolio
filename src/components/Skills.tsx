import React from 'react';
import { Code, Database, Cloud, Settings, Zap, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Languages',
      description: 'Core programming languages I use daily',
      skills: [
        { name: 'Python', color: 'from-yellow-400 to-yellow-600', expertise: 'expert' },
        { name: 'JavaScript', color: 'from-blue-400 to-blue-600', expertise: 'expert' },
        { name: 'TypeScript', color: 'from-blue-500 to-blue-700', expertise: 'advanced' },
        { name: 'C++', color: 'from-purple-400 to-purple-600', expertise: 'advanced' },
        { name: 'SQL', color: 'from-green-400 to-green-600', expertise: 'expert' },
        { name: 'Go', color: 'from-cyan-400 to-cyan-600', expertise: 'intermediate' },
      ]
    },
    {
      icon: Settings,
      title: 'Frameworks & Libraries',
      description: 'Modern frameworks for efficient development',
      skills: [
        { name: 'FastAPI', color: 'from-teal-400 to-teal-600', expertise: 'expert' },
        { name: 'React', color: 'from-cyan-400 to-cyan-600', expertise: 'advanced' },
        { name: 'Node.js', color: 'from-lime-400 to-lime-600', expertise: 'advanced' },
        { name: 'Koa.js', color: 'from-emerald-400 to-emerald-600', expertise: 'advanced' },
        { name: 'Prisma', color: 'from-indigo-400 to-indigo-600', expertise: 'advanced' },
      ]
    },
    {
      icon: Database,
      title: 'Databases',
      description: 'Data storage and management solutions',
      skills: [
        { name: 'PostgreSQL', color: 'from-blue-500 to-blue-700', expertise: 'expert' },
        { name: 'MongoDB', color: 'from-emerald-400 to-emerald-600', expertise: 'advanced' },
        { name: 'Neo4j', color: 'from-gray-400 to-gray-600', expertise: 'advanced' },
        { name: 'Redis', color: 'from-red-400 to-red-600', expertise: 'advanced' },
        { name: 'CosmosDB', color: 'from-violet-400 to-violet-600', expertise: 'intermediate' },
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Deployment and infrastructure management',
      skills: [
        { name: 'Azure', color: 'from-blue-400 to-blue-600', expertise: 'advanced' },
        { name: 'Docker', color: 'from-sky-400 to-sky-600', expertise: 'advanced' },
        { name: 'Git', color: 'from-orange-400 to-orange-600', expertise: 'expert' },
        { name: 'CI/CD', color: 'from-indigo-400 to-indigo-600', expertise: 'advanced' },
        { name: 'Linux', color: 'from-yellow-500 to-yellow-700', expertise: 'advanced' },
      ]
    }
  ];

  const expertiseColors = {
    expert: 'bg-green-500/20 text-green-400 border-green-500/30',
    advanced: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    intermediate: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-violet-500/5 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <Zap className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-violet-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and frameworks I leverage to build scalable, efficient solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  <p className="text-gray-400 text-sm">{category.description}</p>
                </div>
              </div>

              {/* Skills */}
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/skill relative bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/30 hover:border-gray-500/50 rounded-xl p-4 transition-all duration-300"
                  >
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium text-sm">{skill.name}</span>
                        <span className={`px-2 py-1 rounded-md text-xs font-medium border ${expertiseColors[skill.expertise]}`}>
                          {skill.expertise}
                        </span>
                      </div>
                      
                      {/* Skill indicator bar */}
                      <div className="w-full bg-gray-700/50 rounded-full h-1.5 overflow-hidden">
                        <div className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-500 group-hover/skill:animate-pulse`}>
                          <div className="h-full bg-white/20 animate-shimmer"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 mb-8">
            <Globe className="w-6 h-6 text-violet-400" />
            <h3 className="text-2xl font-bold text-white">Additional Technologies</h3>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'WebSockets', 'Agentic AI', 'Microservices', 'REST APIs', 'GraphQL',
              'JWT', 'OAuth', 'Machine Learning', 'TensorFlow', 'Pandas',
              'NumPy', 'Nginx', 'Web3', 'Blockchain', 'Cypher Query Language'
            ].map((tech) => (
              <div
                key={tech}
                className="group px-4 py-2 bg-gradient-to-r from-gray-800/60 to-gray-700/60 border border-gray-600/40 hover:border-blue-400/60 rounded-full text-gray-300 hover:text-blue-400 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <span className="relative z-10">{tech}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-violet-600/0 group-hover:from-blue-600/10 group-hover:to-violet-600/10 rounded-full transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;