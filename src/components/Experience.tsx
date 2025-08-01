// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Building, Award, Calendar, CheckCircle } from 'lucide-react';
// import GitHubCalendar from 'react-github-calendar';

// const Experience = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const experiences = [
//     {
//       title: 'Software Developer',
//       company: 'AFI DigitalServices LLP',
//       duration: 'June 2025 - Present',
//       achievements: [
//         'Transitioned to a full-time role after successful internship with continued contributions to large-scale backend systems.',
//         'Leading new modules in microservices infrastructure and API integrations for client delivery.',
//         'Working with stakeholders on feature planning, technical design, and scalable implementation.'
//       ],
//       technologies: ['Node.js', 'TypeScript', 'Azure', 'Microservices', 'GraphQL', 'Neo4j']
//     },
//     {
//       title: 'Software Developer Intern',
//       company: 'AFI DigitalServices LLP',
//       duration: 'Dec 2024 - May 2025',
//       achievements: [
//         'Redesigned and led the backend architecture of a production-level enterprise application, creating scalable microservices with well-structured ERDs and normalized data models.',
//         'Engineered high-performance REST APIs using FastAPI, Node.js, and TypeScript, integrating multiple external services to streamline user workflows and boost feature delivery speed.',
//         'Optimized Azure cloud infrastructure, configuring Blob Storage, tuning Cosmos DB containers, and improving database performance through indexing, partitioning, and query optimization.',
//         'Delivered core backend modules that significantly improved system scalability, security, and responsiveness across the platform.',
//         'Collaborated closely with DevOps and frontend teams to ensure CI/CD pipeline integration, code quality, and seamless deployment to staging and production environments.',
//         'Contributed to the development of an internal Learning Management System (LMS) using Django.'
//       ],
//       technologies: ['Node.js', 'Koa.js', 'TypeScript', 'FastAPI', 'Neo4j', 'RESTAPI', 'GraphQL', 'Azure', 'Microservices']
//     },
//     {
//       title: 'Data Science Intern',
//       company: 'Bharat Intern',
//       duration: 'Sept 2023 - Oct 2023',
//       achievements: [
//         'Worked on the respective given task involving Data analysis and model training.'
//       ],
//       technologies: ['Python', 'Data Analytics', 'Machine Learning']
//     }
//   ];

//   const certifications = [
//     {
//       name: 'ServiceNow Certified System Administrator (CSA)',
//       issuer: 'ServiceNow',
//       date: '2024',
//       badge: '🏅'
//     },
//     {
//       name: 'ServiceNow Certified Application Developer (CAD)',
//       issuer: 'ServiceNow',
//       date: '2024',
//       badge: '🎯'
//     },
//     {
//       name: 'Cypher Fundamentals',
//       issuer: 'Neo4j',
//       date: '2025',
//       badge: '☁️'
//     },
//     {
//       name: 'Python for Data Science',
//       issuer: 'Coursera',
//       date: '2023',
//       badge: '🐍'
//     }
//   ];

//   return (
//     <section id="experience" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={inView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.5 }}
//         className="text-center mb-10"
//       >
//         <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
//           Proof of Contributions
//         </h3>
//       </motion.div>
//           <div className="flex justify-center">
//             <GitHubCalendar
//               username="Akshatt10"
//               blockSize={20}
//               blockMargin={5}
//               fontSize={16}
//               colorScheme="dark"
//             />
//           </div>
//       <div className="container mx-auto px-6">
//         <div className="mt-16" />
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
//             Experience & Certifications
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-violet-400 mx-auto"></div>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             {experiences.map((exp, expIdx) => (
//               <div
//                 key={expIdx}
//                 className="mb-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300"
//               >
//                 <div className="flex items-center mb-6">
//                   <div className="p-3 bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl mr-4">
//                     <Building className="text-white" size={24} />
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
//                     <p className="text-blue-400 font-semibold">{exp.company}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center text-gray-400 mb-6">
//                   <Calendar size={16} className="mr-2" />
//                   <span>{exp.duration}</span>
//                 </div>

//                 <div className="space-y-4">
//                   <h4 className="text-lg font-semibold text-white mb-4">Key Achievements:</h4>
//                   {exp.achievements.map((point, i) => (
//                     <motion.div
//                       key={i}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={inView ? { opacity: 1, x: 0 } : {}}
//                       transition={{ duration: 0.4, delay: 0.1 * i }}
//                       className="flex items-start"
//                     >
//                       <CheckCircle className="text-green-400 mr-3 mt-1 flex-shrink-0" size={18} />
//                       <p className="text-gray-300">{point}</p>
//                     </motion.div>
//                   ))}
//                 </div>

//                 <div className="mt-8">
//                   <h4 className="text-lg font-semibold text-white mb-4">Technologies Used:</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {exp.technologies.map((tech) => (
//                       <span
//                         key={tech}
//                         className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-violet-600/20 border border-blue-400/30 rounded-full text-blue-400 text-sm font-medium"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-violet-400/50 transition-all duration-300">
//               <div className="flex items-center mb-8">
//                 <div className="p-3 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl mr-4">
//                   <Award className="text-white" size={24} />
//                 </div>
//                 <h3 className="text-2xl font-bold text-white">Certifications</h3>
//               </div>

//               <div className="space-y-6">
//                 {certifications.map((cert, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={inView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.4, delay: 0.1 * index }}
//                     whileHover={{ scale: 1.02 }}
//                     className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30 hover:border-violet-400/50 transition-all duration-300"
//                   >
//                     <div className="flex items-start justify-between">
//                       <div className="flex-1">
//                         <div className="flex items-center mb-2">
//                           <span className="text-2xl mr-3">{cert.badge}</span>
//                           <h4 className="text-lg font-semibold text-white">{cert.name}</h4>
//                         </div>
//                         <p className="text-violet-400 font-medium">{cert.issuer}</p>
//                         <p className="text-gray-400 text-sm mt-1">{cert.date}</p>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           viewport={{ once: true }}
//           className="mt-20 mb-10 text-center"
//         >
          
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Experience;



import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, Award, Calendar, CheckCircle } from 'lucide-react';
import GitHubCalendar from 'react-github-calendar';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Software Developer',
      company: 'AFI DigitalServices LLP',
      duration: 'June 2025 - Present',
      achievements: [
        'Transitioned to a full-time role after successful internship with continued contributions to large-scale backend systems.',
        'Leading new modules in microservices infrastructure and API integrations for client delivery.',
        'Working with stakeholders on feature planning, technical design, and scalable implementation.'
      ],
      technologies: ['Node.js', 'TypeScript', 'Azure', 'Microservices', 'GraphQL', 'Neo4j']
    },
    {
      title: 'Software Developer Intern',
      company: 'AFI DigitalServices LLP',
      duration: 'Dec 2024 - May 2025',
      achievements: [
        'Redesigned and led the backend architecture of a production-level enterprise application, creating scalable microservices with well-structured ERDs and normalized data models.',
        'Engineered high-performance REST APIs using FastAPI, Node.js, and TypeScript, integrating multiple external services to streamline user workflows and boost feature delivery speed.',
        'Optimized Azure cloud infrastructure, configuring Blob Storage, tuning Cosmos DB containers, and improving database performance through indexing, partitioning, and query optimization.',
        'Delivered core backend modules that significantly improved system scalability, security, and responsiveness across the platform.',
        'Collaborated closely with DevOps and frontend teams to ensure CI/CD pipeline integration, code quality, and seamless deployment to staging and production environments.',
        'Contributed to the development of an internal Learning Management System (LMS) using Django.'
      ],
      technologies: ['Node.js', 'Koa.js', 'TypeScript', 'FastAPI', 'Neo4j', 'RESTAPI', 'GraphQL', 'Azure', 'Microservices']
    },
    {
      title: 'Data Science Intern',
      company: 'Bharat Intern',
      duration: 'Sept 2023 - Oct 2023',
      achievements: [
        'Worked on the respective given task involving Data analysis and model training.'
      ],
      technologies: ['Python', 'Data Analytics', 'Machine Learning']
    }
  ];

  const certifications = [
    {
      name: 'ServiceNow Certified System Administrator (CSA)',
      issuer: 'ServiceNow',
      date: '2024',
      badge: '🏅'
    },
    {
      name: 'ServiceNow Certified Application Developer (CAD)',
      issuer: 'ServiceNow',
      date: '2024',
      badge: '🎯'
    },
    {
      name: 'Cypher Fundamentals',
      issuer: 'Neo4j',
      date: '2025',
      badge: '☁️'
    },
    {
      name: 'Python for Data Science',
      issuer: 'Coursera',
      date: '2023',
      badge: '🐍'
    }
  ];

  return (
    // Matched background to the Hero component's gradient
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Matched header gradient to the Hero component's style */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-100 to-gray-500 bg-clip-text text-transparent">
            Experience & Certifications
          </h2>
          {/* Updated underline gradient to match */}
          <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-gray-700 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            {experiences.map((exp, expIdx) => (
              <div
                key={expIdx}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  {/* Updated icon background to a solid dark grey */}
                  <div className="p-3 bg-gray-800 rounded-xl mr-4">
                    <Building className="text-gray-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    {/* Updated company text color */}
                    <p className="text-gray-400 font-semibold">{exp.company}</p>
                  </div>
                </div>

                <div className="flex items-center text-gray-500 mb-6">
                  <Calendar size={16} className="mr-2" />
                  <span>{exp.duration}</span>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white mb-4">Key Achievements:</h4>
                  {exp.achievements.map((point, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.1 * i }}
                      className="flex items-start"
                    >
                      {/* Updated checkmark color */}
                      <CheckCircle className="text-gray-500 mr-3 mt-1 flex-shrink-0" size={18} />
                      <p className="text-gray-300">{point}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {/* Updated technology tags to match the dark theme */}
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-gray-300 text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Certifications Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-gray-800 rounded-xl mr-4">
                  <Award className="text-gray-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Certifications</h3>
              </div>

              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    whileHover={{ scale: 1.02, borderColor: '#4B5563' }} // gray-600
                    className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/80 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="text-2xl mr-3">{cert.badge}</span>
                          <h4 className="text-lg font-semibold text-white">{cert.name}</h4>
                        </div>
                        <p className="text-gray-400 font-medium">{cert.issuer}</p>
                        <p className="text-gray-500 text-sm mt-1">{cert.date}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* GitHub Calendar Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 text-center" // Increased top margin for a bigger gap
        >
          {/* Matched heading size and style */}
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-gray-100 to-gray-500 bg-clip-text text-transparent">
            Proof of Contributions
          </h2>
          <div className="flex justify-center p-4 sm:p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
            <GitHubCalendar
              username="Akshatt10"
              blockSize={16}
              blockMargin={5}
              fontSize={14}
              colorScheme="dark"
              theme={{
                dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
