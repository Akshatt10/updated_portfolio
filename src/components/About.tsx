import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Brain, Zap, Users, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const traits = [
    { icon: Code, title: 'Problem Solver', description: 'Love tackling complex challenges with innovative solutions' },
    { icon: Brain, title: 'Quick Learner', description: 'Adaptable to new technologies and frameworks rapidly' },
    { icon: Zap, title: 'Performance Focused', description: 'Optimizing code and systems for maximum efficiency' },
    { icon: Users, title: 'Team Player', description: 'Collaborative approach to building amazing products' },
    { icon: Target, title: 'Goal Oriented', description: 'Driven by results and continuous improvement' },
    { icon: Lightbulb, title: 'Creative Thinker', description: 'Finding unique approaches to technical challenges' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-violet-400 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-600 to-violet-600 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 bg-gray-800 rounded-full flex items-center justify-center">
                  <div className="text-6xl font-bold text-blue-400">AT</div>
                </div>
              </div>
              
              {/* Floating elements around profile */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-4 right-4 w-16 h-16 border-2 border-blue-400/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-4 left-4 w-12 h-12 border-2 border-violet-400/30 rounded-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Passionate about building the future
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a final-year Computer Science student with a deep passion for backend development 
              and artificial intelligence. My journey in tech started with curiosity about how systems 
              work behind the scenes, and it has evolved into a mission to build scalable, intelligent solutions.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring the latest in AI/ML research, contributing 
              to open-source projects, or experimenting with Web3 technologies. I believe in writing 
              clean, efficient code that makes a real impact.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              {['Python', 'FastAPI', 'AI/ML', 'Backend Architecture', 'Cloud Computing'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-violet-600/20 border border-blue-400/30 rounded-full text-blue-400 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Personal Traits */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">What Drives Me</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {traits.map((trait, index) => (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300"
              >
                <trait.icon className="text-blue-400 mb-4" size={32} />
                <h4 className="text-xl font-semibold text-white mb-3">{trait.title}</h4>
                <p className="text-gray-400">{trait.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;