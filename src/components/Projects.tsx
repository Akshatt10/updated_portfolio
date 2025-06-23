import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Globe, MessageCircle, CheckSquare, Sparkles, Youtube, BarChart, Eye } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'GitGram - GitHub Like App',
      description: 'A fully functional MERN website with features of liking github profiles, watch profile visits of github, explore page.',
      icon: Globe,
      tech: ['React', 'Node.js', 'MongoDB', 'Passport.js', 'HTML', 'CSS'],
      gradient: 'from-blue-500 to-cyan-500',
      features: ['Profile Liking', 'Visit Tracking', 'Explore Page', 'User Authentication'],
      link: 'https://mern-git.onrender.com',
      code: 'https://github.com/Akshatt10/GitGram',
    },
    {
      title: 'Real-time Chat Application',
      description: 'This is a Real-Time chat app based on firebase and reactJs. You can chat with your friends by logging into it.',
      icon: MessageCircle,
      tech: ['React', 'Firebase', 'JavaScript', 'HTML', 'CSS'],
      gradient: 'from-purple-500 to-pink-500',
      features: ['Real-time Messaging', 'User Authentication', 'Friend System', 'Responsive Design'],
      link: 'https://my-chat-app-topaz.vercel.app/',
      code: 'https://github.com/Akshatt10/RealTime-Chat-App',
    },
    {
      title: 'Gemini Clone',
      description: 'An application showing my frontend and API skills where I cloned Google GEMINI with ReactJs into a responsive website and deployed on Netlify.',
      icon: Sparkles,
      tech: ['React', 'JavaScript', 'HTML', 'CSS', 'API Integration'],
      gradient: 'from-orange-500 to-red-500',
      features: ['AI Chat Interface', 'Responsive Design', 'API Integration', 'Modern UI'],
      link: 'https://mygeminiapp.netlify.app/',
      code: 'https://github.com/Akshatt10/Gemini-Clone',
    },
    {
      title: 'YouTube Data Analytics Web App',
      description: 'Working Web app for analysis of any YouTube channel using different functions and YouTube API.',
      icon: Youtube,
      tech: ['Python', 'Streamlit', 'Data Analysis', 'YouTube API'],
      gradient: 'from-red-500 to-pink-500',
      features: ['Channel Analytics', 'YouTube API', 'Data Visualization', 'Interactive Dashboard'],
      link: 'https://akshatt10-youtube-data-analysis-app-qagmkb.streamlit.app/',
      code: 'https://github.com/Akshatt10/Youtube-Data-Analyzer',
    },
    {
      title: 'PowerBI Spotify Dashboard',
      description: 'A Concise dashboard consisting of all the songs on Spotify using SpotifyAPI and integrated with different DAX functionalities.',
      icon: BarChart,
      tech: ['PowerBI', 'Python', 'Spotify API', 'Data Analytics', 'DAX'],
      gradient: 'from-green-500 to-emerald-500',
      features: ['Spotify Integration', 'DAX Functions', 'Interactive Charts', 'Music Analytics'],
      code: 'https://github.com/Akshatt10/Spotify-Dashboard',
    },
    {
      title: 'Lip Reading WebApp',
      description: 'Machine Learning Model training on a GRID CORPUS dataset with 20k+ video data for making Lip reading WEBAPP hosted on Streamlit.',
      icon: Eye,
      tech: ['Python', 'Machine Learning', 'Streamlit', 'TensorFlow', 'Computer Vision'],
      gradient: 'from-violet-500 to-purple-500',
      features: ['ML Model Training', '20k+ Video Dataset', 'Computer Vision', 'Streamlit Deployment'],
      code: 'https://github.com/Akshatt10/Lip-Reading-WebApp',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-violet-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of the projects I've built to solve real-world problems
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-blue-400/50 transition-all duration-500"
            >
              {/* Project Header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

              <div className="p-8">
                {/* Icon and Title */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} mr-4`}>
                    <project.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-gray-400">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-20 border border-opacity-30 rounded-full text-xs font-medium text-white`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.code || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                    >
                      <Github size={18} />
                      View Code
                    </motion.button>
                  </a>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full border-2 border-blue-400/50 text-blue-400 hover:bg-blue-400 hover:text-gray-900 py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </motion.button>
                    </a>
                  )}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/Akshatt10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600/20 to-violet-600/20 border-2 border-blue-400/50 text-blue-400 hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 hover:text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
            >
              View All Projects on GitHub
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
