import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Python', level: 90, color: 'from-yellow-400 to-yellow-600' },
        { name: 'JavaScript/TypeScript', level: 85, color: 'from-blue-400 to-blue-600' },
        { name: 'C++', level: 80, color: 'from-purple-400 to-purple-600' },
        { name: 'SQL', level: 85, color: 'from-green-400 to-green-600' },
        { name: 'Go', level: 30, color: 'from-gray-400 to-gray-600' },
      ]
    },
    {
      title: 'Frameworks & Tools',
      skills: [
        { name: 'FastAPI', level: 95, color: 'from-teal-400 to-teal-600' },
        { name: 'Node.js', level: 80, color: 'from-lime-400 to-lime-600' },
        { name: 'React', level: 85, color: 'from-cyan-400 to-cyan-600' },
        
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'PostgreSQL', level: 90, color: 'from-blue-500 to-blue-700' },
        { name: 'MongoDB', level: 85, color: 'from-emerald-400 to-emerald-600' },
        { name: 'CosmosDB', level: 80, color: 'from-violet-400 to-violet-600' },
        { name: 'Redis', level: 75, color: 'from-red-400 to-red-600' },
        { name: 'Neo4j', level: 70, color: 'from-gray-400 to-gray-600' },
      ]
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'Azure', level: 65, color: 'from-blue-400 to-blue-600' },
        { name: 'Docker', level: 80, color: 'from-sky-400 to-sky-600' },
        { name: 'Git', level: 90, color: 'from-orange-400 to-orange-600' },
        { name: 'CI/CD', level: 75, color: 'from-indigo-400 to-indigo-600' },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-violet-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm font-bold">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Cloud */}
    {/* Additional Skills Cloud */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, delay: 0.8 }}
  className="mt-16 text-center"
>
  <h3 className="text-2xl font-bold text-white mb-8">Also Experienced With</h3>

  <div className="flex flex-wrap justify-center gap-4">
    {[
      'FastAPI', 'Koa.js', 'Prisma','WebScokets', 'Agentic AI',
      'PostgreSQL', 'MongoDB', 'Cypher Query Language', 'Redis',
      'Neo4j', 'Azure', 'Docker', 'Git', 'CI/CD',
      'Machine Learning', 'TensorFlow', 'Pandas', 'NumPy', 'Microservices',
      'REST APIs', 'GraphQL', 'JWT', 'OAuth','Linux',
      'Nginx', 'Web3', 'Blockchain',
    ].map((tech, index) => (
      <motion.div
        key={tech}
        initial={{ opacity: 0, scale: 0 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.1 * index }}
        whileHover={{ scale: 1.1 }}
        className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-violet-600/20 border border-blue-400/30 rounded-full text-blue-400 text-sm font-medium hover:border-blue-400/60 transition-all duration-200"
      >
        {tech}
      </motion.div>
    ))}
  </div>
</motion.div>

      </div>
    </section>
  );
};

export default Skills;