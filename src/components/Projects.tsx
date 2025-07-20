// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Github, ExternalLink, Globe, MessageCircle, CheckSquare, Sparkles, Youtube, BarChart, Eye } from 'lucide-react';

// const Projects = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const projects = [
//     {
//       title: 'GitGram - GitHub Like App',
//       description: 'A fully functional MERN website with features of liking github profiles, watch profile visits of github, explore page.',
//       icon: Globe,
//       tech: ['React', 'Node.js', 'MongoDB', 'Passport.js', 'HTML', 'CSS'],
//       gradient: 'from-blue-500 to-cyan-500',
//       features: ['Profile Liking', 'Visit Tracking', 'Explore Page', 'User Authentication'],
//       link: 'https://mern-git.onrender.com',
//       code: 'https://github.com/Akshatt10/GitGram',
//     },
//     {
//       title: 'Real-time Chat Application',
//       description: 'This is a Real-Time chat app based on firebase and reactJs. You can chat with your friends by logging into it.',
//       icon: MessageCircle,
//       tech: ['React', 'Firebase', 'JavaScript', 'HTML', 'CSS'],
//       gradient: 'from-purple-500 to-pink-500',
//       features: ['Real-time Messaging', 'User Authentication', 'Friend System', 'Responsive Design'],
//       link: 'https://my-chat-app-topaz.vercel.app/',
//       code: 'https://github.com/Akshatt10/RealTime-Chat-App',
//     },
//     {
//       title: 'Gemini Clone',
//       description: 'An application showing my frontend and API skills where I cloned Google GEMINI with ReactJs into a responsive website and deployed on Netlify.',
//       icon: Sparkles,
//       tech: ['React', 'JavaScript', 'HTML', 'CSS', 'API Integration'],
//       gradient: 'from-orange-500 to-red-500',
//       features: ['AI Chat Interface', 'Responsive Design', 'API Integration', 'Modern UI'],
//       link: 'https://mygeminiapp.netlify.app/',
//       code: 'https://github.com/Akshatt10/Gemini-Clone',
//     },
//     {
//       title: 'YouTube Data Analytics Web App',
//       description: 'Working Web app for analysis of any YouTube channel using different functions and YouTube API.',
//       icon: Youtube,
//       tech: ['Python', 'Streamlit', 'Data Analysis', 'YouTube API'],
//       gradient: 'from-red-500 to-pink-500',
//       features: ['Channel Analytics', 'YouTube API', 'Data Visualization', 'Interactive Dashboard'],
//       link: 'https://akshatt10-youtube-data-analysis-app-qagmkb.streamlit.app/',
//       code: 'https://github.com/Akshatt10/Youtube-Data-Analyzer',
//     },
//     {
//       title: 'PowerBI Spotify Dashboard',
//       description: 'A Concise dashboard consisting of all the songs on Spotify using SpotifyAPI and integrated with different DAX functionalities.',
//       icon: BarChart,
//       tech: ['PowerBI', 'Python', 'Spotify API', 'Data Analytics', 'DAX'],
//       gradient: 'from-green-500 to-emerald-500',
//       features: ['Spotify Integration', 'DAX Functions', 'Interactive Charts', 'Music Analytics'],
//       code: 'https://github.com/Akshatt10/Spotify-Dashboard',
//     },
//     {
//       title: 'Lip Reading WebApp',
//       description: 'Machine Learning Model training on a GRID CORPUS dataset with 20k+ video data for making Lip reading WEBAPP hosted on Streamlit.',
//       icon: Eye,
//       tech: ['Python', 'Machine Learning', 'Streamlit', 'TensorFlow', 'Computer Vision'],
//       gradient: 'from-violet-500 to-purple-500',
//       features: ['ML Model Training', '20k+ Video Dataset', 'Computer Vision', 'Streamlit Deployment'],
//       code: 'https://github.com/Akshatt10/Lip-Reading-WebApp',
//     }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6 }
//     }
//   };

//   return (
//     <section id="projects" className="py-20 bg-gray-800">
//       <div className="container mx-auto px-6">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
//             Featured Projects
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-violet-400 mx-auto mb-6"></div>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             Here are some of the projects I've built to solve real-world problems
//           </p>
//         </motion.div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//           className="grid md:grid-cols-2 gap-8"
//         >
//           {projects.map((project) => (
//             <motion.div
//               key={project.title}
//               variants={itemVariants}
//               whileHover={{ y: -10 }}
//               className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-blue-400/50 transition-all duration-500"
//             >
//               {/* Project Header */}
//               <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

//               <div className="p-8">
//                 {/* Icon and Title */}
//                 <div className="flex items-center mb-6">
//                   <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} mr-4`}>
//                     <project.icon className="text-white" size={24} />
//                   </div>
//                   <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
//                     {project.title}
//                   </h3>
//                 </div>

//                 {/* Description */}
//                 <p className="text-gray-400 text-lg mb-6 leading-relaxed">
//                   {project.description}
//                 </p>

//                 {/* Features */}
//                 <div className="mb-6">
//                   <h4 className="text-white font-semibold mb-3">Key Features:</h4>
//                   <div className="grid grid-cols-2 gap-2">
//                     {project.features.map((feature) => (
//                       <div key={feature} className="flex items-center text-sm text-gray-400">
//                         <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
//                         {feature}
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Tech Stack */}
//                 <div className="mb-8">
//                   <div className="flex flex-wrap gap-2">
//                     {project.tech.map((tech) => (
//                       <span
//                         key={tech}
//                         className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-20 border border-opacity-30 rounded-full text-xs font-medium text-white`}
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex gap-4">
//                   <a
//                     href={project.code || '#'}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex-1"
//                   >
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300"
//                     >
//                       <Github size={18} />
//                       View Code
//                     </motion.button>
//                   </a>

//                   {project.link && (
//                     <a
//                       href={project.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex-1"
//                     >
//                       <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         className="w-full border-2 border-blue-400/50 text-blue-400 hover:bg-blue-400 hover:text-gray-900 py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300"
//                       >
//                         <ExternalLink size={18} />
//                         Live Demo
//                       </motion.button>
//                     </a>
//                   )}
//                 </div>
//               </div>

//               {/* Hover Effect Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* View More Projects Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 1 }}
//           className="text-center mt-16"
//         >
//           <a
//             href="https://github.com/Akshatt10"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-gradient-to-r from-blue-600/20 to-violet-600/20 border-2 border-blue-400/50 text-blue-400 hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 hover:text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
//             >
//               View All Projects on GitHub
//             </motion.button>
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Projects;



import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Globe, MessageCircle, Sparkles, Youtube, BarChart, Eye, X, CheckCircle, LucideIcon } from 'lucide-react';

// --- Define a TypeScript interface for a single project ---
interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  icon: LucideIcon;
  tech: string[];
  features: string[];
  link?: string;
  code: string;
}

// --- Data for Projects (now typed with the Project interface) ---
const projectsData: Project[] = [
    {
      title: 'GitGram - GitHub Like App',
      category: 'Web App',
      image: 'https://placehold.co/600x400/111827/9CA3AF?text=GitGram',
      description: 'A fully functional MERN website with features of liking github profiles, watch profile visits of github, explore page.',
      icon: Globe,
      tech: ['React', 'Node.js', 'MongoDB', 'Passport.js', 'HTML', 'CSS'],
      features: ['Profile Liking', 'Visit Tracking', 'Explore Page', 'User Authentication'],
      link: 'https://mern-git.onrender.com',
      code: 'https://github.com/Akshatt10/GitGram',
    },
    {
      title: 'Real-time Chat Application',
      category: 'Web App',
      image: 'https://placehold.co/600x400/111827/9CA3AF?text=Chat+App',
      description: 'This is a Real-Time chat app based on firebase and reactJs. You can chat with your friends by logging into it.',
      icon: MessageCircle,
      tech: ['React', 'Firebase', 'JavaScript', 'HTML', 'CSS'],
      features: ['Real-time Messaging', 'User Authentication', 'Friend System', 'Responsive Design'],
      link: 'https://my-chat-app-topaz.vercel.app/',
      code: 'https://github.com/Akshatt10/RealTime-Chat-App',
    },
    {
      title: 'Gemini Clone',
      category: 'Web App',
      image: 'https://placehold.co/600x400/111827/9CA3AF?text=Gemini+Clone',
      description: 'An application showing my frontend and API skills where I cloned Google GEMINI with ReactJs into a responsive website and deployed on Netlify.',
      icon: Sparkles,
      tech: ['React', 'JavaScript', 'API'],
      features: ['AI Chat Interface', 'Responsive Design', 'API Integration', 'Modern UI'],
      link: 'https://mygeminiapp.netlify.app/',
      code: 'https://github.com/Akshatt10/Gemini-Clone',
    },
    {
      title: 'YouTube Data Analytics',
      category: 'Data Viz',
      image: 'https://placehold.co/600x400/111827/9CA3AF?text=YT+Analytics',
      description: 'Working Web app for analysis of any YouTube channel using different functions and YouTube API.',
      icon: Youtube,
      tech: ['Python', 'Streamlit', 'Data Analysis', 'API'],
      features: ['Channel Analytics', 'YouTube API', 'Data Visualization', 'Interactive Dashboard'],
      link: 'https://akshatt10-youtube-data-analysis-app-qagmkb.streamlit.app/',
      code: 'https://github.com/Akshatt10/Youtube-Data-Analyzer',
    },
    {
      title: 'PowerBI Spotify Dashboard',
      category: 'Data Viz',
      image: 'https://placehold.co/600x400/111827/9CA3AF?text=Spotify+Dashboard',
      description: 'A Concise dashboard consisting of all the songs on Spotify using SpotifyAPI and integrated with different DAX functionalities.',
      icon: BarChart,
      tech: ['PowerBI', 'Python', 'API', 'Data Analysis'],
      features: ['Spotify Integration', 'DAX Functions', 'Interactive Charts', 'Music Analytics'],
      code: 'https://github.com/Akshatt10/Spotify-Dashboard',
    },
    {
      title: 'Lip Reading WebApp',
      category: 'ML',
      image: 'https://placehold.co/600x400/111827/9CA3AF?text=Lip+Reading+AI',
      description: 'Machine Learning Model training on a GRID CORPUS dataset with 20k+ video data for making Lip reading WEBAPP hosted on Streamlit.',
      icon: Eye,
      tech: ['Python', 'ML', 'Streamlit', 'TensorFlow'],
      features: ['ML Model Training', '20k+ Video Dataset', 'Computer Vision', 'Streamlit Deployment'],
      code: 'https://github.com/Akshatt10/Lip-Reading-WebApp',
    }
];

const filters = ['All', 'Web App', 'Data Viz', 'ML'];

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState('All');
  // --- Explicitly type the state to be a Project object or null ---
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-6">
        {/* --- Section Header --- */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-100 to-gray-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of my work, from web applications to data science models.
          </p>
        </motion.div>

        {/* --- Filter Buttons --- */}
        <div className="flex justify-center gap-2 md:gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gray-200 text-black'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* --- Projects Grid --- */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-300"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                  <span className="absolute top-4 right-4 bg-gray-900/80 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">{project.category}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 h-10 overflow-hidden">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((t: string) => <span key={t} className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded-full">{t}</span>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* --- Project Detail Modal --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: 'spring', damping: 20, stiffness: 200 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 text-gray-500 hover:text-white z-10">
                <X size={24} />
              </button>
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover" />
              <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((t: string) => <span key={t} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">{t}</span>)}
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">{selectedProject.description}</p>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2 text-gray-400">
                    {selectedProject.features.map((f: string) => <li key={f} className="flex items-center"><CheckCircle className="text-gray-500 mr-2" size={16} />{f}</li>)}
                  </ul>
                </div>
                <div className="flex gap-4 mt-8">
                  <a href={selectedProject.code} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300">
                      <Github size={18} /> View Code
                    </button>
                  </a>
                  {selectedProject.link && (
                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <button className="w-full bg-gray-200 hover:bg-white text-black py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300">
                        <ExternalLink size={18} /> Live Demo
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
