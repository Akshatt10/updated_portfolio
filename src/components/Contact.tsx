// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Mail, Phone, MapPin, Github, Linkedin, X, Download, Sparkles, Zap, Heart } from 'lucide-react';

// const Contact = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const contactInfo = [
//     {
//       icon: Mail,
//       title: 'Email',
//       value: 'akshattyagi1010@gmail.com',
//       link: 'mailto:akshattyagi1010@gmail.com',
//       description: 'Drop me a line anytime'
//     },
//     {
//       icon: Phone,
//       title: 'Phone',
//       value: '+91 9319379610',
//       description: 'Let\'s have a chat'
//     },
//     {
//       icon: MapPin,
//       title: 'Location',
//       value: 'Noida, UP',
//       description: 'Based in India'
//     }
//   ];

//   const socialLinks = [
//     {
//       icon: Github,
//       name: 'GitHub',
//       url: 'https://github.com/Akshatt10',
//       color: 'hover:text-gray-400',
//       description: 'Check out my code'
//     },
//     {
//       icon: Linkedin,
//       name: 'LinkedIn',
//       url: 'https://www.linkedin.com/in/akshat-tyagi-305a50223/',
//       color: 'hover:text-blue-400',
//       description: 'Professional network'
//     },
//     {
//       icon: X,
//       name: 'X (Twitter)',
//       url: 'https://x.com/Akshat01T',
//       color: 'hover:text-sky-400',
//       description: 'Follow my journey'
//     },
//     {
//       icon: Mail,
//       name: 'Email',
//       url: 'mailto:akshattyagi1010@gmail.com',
//       color: 'hover:text-green-400',
//       description: 'Direct message'
//     }
//   ];

//   const floatingElements = [
//     { icon: Sparkles, delay: 0, duration: 3 },
//     { icon: Zap, delay: 1, duration: 4 },
//     { icon: Heart, delay: 2, duration: 3.5 }
//   ];

//   return (
//     <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
//             initial={{ 
//               x: Math.random() * window.innerWidth,
//               y: Math.random() * window.innerHeight,
//               opacity: 0
//             }}
//             animate={{ 
//               y: [null, -100],
//               opacity: [0, 1, 0]
//             }}
//             transition={{
//               duration: Math.random() * 3 + 2,
//               repeat: Infinity,
//               delay: Math.random() * 2
//             }}
//           />
//         ))}
//       </div>

//       {/* Floating Icons */}
//       {floatingElements.map((element, index) => (
//         <motion.div
//           key={index}
//           className="absolute top-20 right-20 text-blue-400/30"
//           animate={{
//             y: [-20, 20, -20],
//             rotate: [0, 180, 360],
//             opacity: [0.3, 0.6, 0.3]
//           }}
//           transition={{
//             duration: element.duration,
//             repeat: Infinity,
//             delay: element.delay
//           }}
//           style={{
//             right: `${20 + index * 80}px`,
//             top: `${100 + index * 50}px`
//           }}
//         >
//           <element.icon size={24} />
//         </motion.div>
//       ))}

//       <div className="container mx-auto px-6 relative z-10">
//         {/* Header */}
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <motion.div
//             initial={{ scale: 0.5, opacity: 0 }}
//             animate={inView ? { scale: 1, opacity: 1 } : {}}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="inline-block mb-6"
//           >
//             <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-violet-400 to-blue-400 bg-clip-text text-transparent bg-size-200 animate-gradient">
//               Let's Work Together
//             </h2>
//           </motion.div>
          
//           <motion.div
//             initial={{ width: 0 }}
//             animate={inView ? { width: 96 } : {}}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="h-1 bg-gradient-to-r from-blue-400 to-violet-400 mx-auto mb-6 rounded-full"
//           />
          
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={inView ? { opacity: 1 } : {}}
//             transition={{ duration: 0.6, delay: 0.7 }}
//             className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed"
//           >
//             Whether it's a freelance gig, collaboration, or full-time opportunity — I'm always open to meaningful conversations that create something amazing!
//           </motion.p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           {/* Contact Info Section */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="space-y-8"
//           >
//             <div className="bg-gray-800/60 backdrop-blur-lg border border-gray-700/50 rounded-3xl p-8 shadow-2xl">
//               <motion.h3 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.5, delay: 0.3 }}
//                 className="text-3xl font-bold text-white mb-8 flex items-center"
//               >
//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//                   className="mr-3"
//                 >
//                   ✨
//                 </motion.div>
//                 Get In Touch
//               </motion.h3>
              
//               <div className="space-y-6">
//                 {contactInfo.map((info, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={inView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.4, delay: 0.1 * index + 0.4 }}
//                     whileHover={{ scale: 1.03, x: 10 }}
//                     className="group"
//                   >
//                     <a
//                       href={info.link || '#'}
//                       className="flex items-center p-6 bg-gradient-to-r from-gray-700/40 to-gray-700/20 rounded-2xl hover:from-gray-600/50 hover:to-gray-600/30 transition-all duration-500 border border-gray-600/30 hover:border-blue-400/50 shadow-lg hover:shadow-xl"
//                     >
//                       <motion.div 
//                         className="p-4 bg-gradient-to-br from-blue-600 to-violet-600 rounded-xl mr-6 shadow-lg"
//                         whileHover={{ scale: 1.1, rotate: 5 }}
//                         transition={{ type: "spring", stiffness: 400, damping: 10 }}
//                       >
//                         <info.icon className="text-white" size={24} />
//                       </motion.div>
//                       <div className="flex-1">
//                         <p className="text-gray-400 text-sm font-medium">{info.title}</p>
//                         <p className="text-white font-bold text-lg">{info.value}</p>
//                         <p className="text-gray-500 text-sm mt-1">{info.description}</p>
//                       </div>
//                       <motion.div
//                         initial={{ opacity: 0, x: -10 }}
//                         whileHover={{ opacity: 1, x: 0 }}
//                         className="text-blue-400"
//                       >
//                         →
//                       </motion.div>
//                     </a>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//             {/* Social Links + Resume */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.5 }}
//               className="bg-gray-800/60 backdrop-blur-lg border border-gray-700/50 rounded-3xl p-8 shadow-2xl"
//             >
//               <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
//                 <motion.div
//                   animate={{ scale: [1, 1.2, 1] }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                   className="mr-3"
//                 >
//                   🚀
//                 </motion.div>
//                 Connect With Me
//               </h3>
              
//               <div className="grid grid-cols-2 gap-4 mb-8">
//                 {socialLinks.map((social, index) => (
//                   <motion.a
//                     key={index}
//                     href={social.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={inView ? { opacity: 1, scale: 1 } : {}}
//                     transition={{ duration: 0.4, delay: 0.1 * index + 0.6 }}
//                     whileHover={{ scale: 1.05, y: -5 }}
//                     whileTap={{ scale: 0.95 }}
//                     className={`flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-700/40 to-gray-700/20 rounded-2xl border border-gray-600/30 hover:border-blue-400/50 transition-all duration-300 text-gray-400 ${social.color} group hover:shadow-lg`}
//                   >
//                     <motion.div
//                       whileHover={{ rotate: 360 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       <social.icon size={28} className="mb-2" />
//                     </motion.div>
//                     <span className="font-semibold text-sm">{social.name}</span>
//                     <span className="text-xs text-gray-500 mt-1 group-hover:text-gray-400">{social.description}</span>
//                   </motion.a>
//                 ))}
//               </div>

//               <motion.a
//                 href="https://drive.google.com/file/d/1m5vmjzjrpTf6vjzFHDuG3gG3q4OeUMsB/view?usp=drive_link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.6, delay: 0.8 }}
//                 whileHover={{ scale: 1.02, y: -2 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="w-full inline-flex items-center justify-center bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600 bg-size-200 hover:bg-pos-100 text-white py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-500 shadow-xl hover:shadow-2xl border border-blue-500/20"
//               >
//                 <motion.div
//                   animate={{ y: [0, -2, 0] }}
//                   transition={{ duration: 1.5, repeat: Infinity }}
//                 >
//                   <Download size={24} className="mr-3" />
//                 </motion.div>
//                 Download Resume
//                 <motion.div
//                   animate={{ x: [0, 5, 0] }}
//                   transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
//                   className="ml-2"
//                 >
//                   →
//                 </motion.div>
//               </motion.a>
//             </motion.div>
//           </motion.div>

//           {/* Right Side — Enhanced Message */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="relative"
//           >
//             <div className="bg-gradient-to-br from-blue-700/40 via-indigo-700/30 to-violet-700/40 border border-gray-700/50 backdrop-blur-lg rounded-3xl p-10 text-white shadow-2xl h-full flex flex-col justify-center relative overflow-hidden">
//               {/* Decorative elements */}
//               <div className="absolute top-4 right-4 text-blue-400/20">
//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//                 >
//                   ⚡
//                 </motion.div>
//               </div>
              
//               <motion.h3 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.6, delay: 0.6 }}
//                 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
//               >
//                 Let's Create Something Amazing
//               </motion.h3>
              
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.6, delay: 0.7 }}
//                 className="space-y-6 text-lg leading-relaxed"
//               >
//                 <p className="text-gray-200">
//                   Whether you're building an <span className="text-blue-300 font-semibold">AI-powered platform</span>, 
//                   a <span className="text-violet-300 font-semibold">product-driven startup</span>, 
//                   or a <span className="text-green-300 font-semibold">creative side project</span> — I'm all ears.
//                 </p>
                
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={inView ? { opacity: 1, scale: 1 } : {}}
//                   transition={{ duration: 0.6, delay: 0.9 }}
//                   className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
//                 >
//                   <p className="text-gray-300 mb-4">
//                     🎯 <strong>What I bring to the table:</strong>
//                   </p>
//                   <div className="grid grid-cols-2 gap-4 text-sm">
//                     <div className="text-blue-300">• Full-stack development</div>
//                     <div className="text-violet-300">• AI/ML integration</div>
//                     <div className="text-green-300">• Creative problem solving</div>
//                     <div className="text-yellow-300">• Passionate collaboration</div>
//                   </div>
//                 </motion.div>
                
//                 <motion.p 
//                   initial={{ opacity: 0 }}
//                   animate={inView ? { opacity: 1 } : {}}
//                   transition={{ duration: 0.6, delay: 1.1 }}
//                   className="text-gray-400 text-base"
//                 >
//                   Reach out to me via the links or drop a message via email. 
//                   I'd love to hear about your vision and explore how we can bring it to life! 🚀
//                 </motion.p>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes gradient {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradient 3s ease infinite;
//         }
//         .bg-size-200 {
//           background-size: 200% 200%;
//         }
//         .bg-pos-100 {
//           background-position: 100% 100%;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Contact;

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Github, Linkedin, X, Download, Sparkles, Zap, Heart } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'akshattyagi1010@gmail.com',
      link: 'mailto:akshattyagi1010@gmail.com',
      description: 'Drop me a line anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9319379610',
      description: 'Let\'s have a chat'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Noida, UP',
      description: 'Based in India'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/Akshatt10',
      description: 'Check out my code'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/akshat-tyagi-305a50223/',
      description: 'Professional network'
    },
    {
      icon: X,
      name: 'X (Twitter)',
      url: 'https://x.com/Akshat01T',
      description: 'Follow my journey'
    },
    {
      icon: Mail,
      name: 'Email',
      url: 'mailto:akshattyagi1010@gmail.com',
      description: 'Direct message'
    }
  ];

  const floatingElements = [
    { icon: Sparkles, delay: 0, duration: 3 },
    { icon: Zap, delay: 1, duration: 4 },
    { icon: Heart, delay: 2, duration: 3.5 }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gray-700/30 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{ 
              y: [null, -100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-100 to-gray-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-gray-700 mx-auto mb-6 rounded-full" />
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Whether it's a freelance gig, collaboration, or full-time opportunity — I'm always open to meaningful conversations that create something amazing!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-3xl p-8 shadow-2xl shadow-black/30">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                <Sparkles className="mr-3 text-gray-400" />
                Get In Touch
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 * index + 0.4 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="group"
                  >
                    <a
                      href={info.link || '#'}
                      className="flex items-center p-6 bg-gray-800/50 rounded-2xl hover:bg-gray-800/80 transition-all duration-300 border border-gray-700/50 hover:border-gray-600"
                    >
                      <div className="p-4 bg-gray-900/80 border border-gray-700 rounded-xl mr-6">
                        <info.icon className="text-gray-300" size={24} />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-400 text-sm font-medium">{info.title}</p>
                        <p className="text-white font-bold text-lg">{info.value}</p>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side — Social Links + Resume */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-3xl p-8 shadow-2xl shadow-black/30 h-full flex flex-col">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                <Zap className="mr-3 text-gray-400" />
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-8 flex-grow">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300 text-gray-400 hover:text-white"
                  >
                    <social.icon size={28} className="mb-2" />
                    <span className="font-semibold text-sm">{social.name}</span>
                  </motion.a>
                ))}
              </div>
              <motion.a
                href="https://drive.google.com/file/d/1m5vmjzjrpTf6vjzFHDuG3gG3q4OeUMsB/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="w-full inline-flex items-center justify-center bg-gray-200 text-black py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300"
              >
                <Download size={20} className="mr-3" />
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
