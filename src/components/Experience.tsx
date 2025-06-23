import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, Award, Calendar, CheckCircle } from 'lucide-react';
import GitHubCalendar from 'react-github-calendar'; // ✅ New import

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Software Developer Intern',
      company: 'AFI DigitalServices LLP',
      duration: 'Dec 2024 - Present',
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
      name: 'Neo4j Fundamentals',
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
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Experience & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-violet-400 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {experiences.map((exp, expIdx) => (
              <div
                key={expIdx}
                className="mb-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl mr-4">
                    <Building className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    <p className="text-blue-400 font-semibold">{exp.company}</p>
                  </div>
                </div>

                <div className="flex items-center text-gray-400 mb-6">
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
                      <CheckCircle className="text-green-400 mr-3 mt-1 flex-shrink-0" size={18} />
                      <p className="text-gray-300">{point}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-violet-600/20 border border-blue-400/30 rounded-full text-blue-400 text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-violet-400/50 transition-all duration-300">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl mr-4">
                  <Award className="text-white" size={24} />
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
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30 hover:border-violet-400/50 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="text-2xl mr-3">{cert.badge}</span>
                          <h4 className="text-lg font-semibold text-white">{cert.name}</h4>
                        </div>
                        <p className="text-violet-400 font-medium">{cert.issuer}</p>
                        <p className="text-gray-400 text-sm mt-1">{cert.date}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-8 p-6 bg-gradient-to-r from-blue-600/10 to-violet-600/10 border border-blue-400/20 rounded-xl"
              >
                <h4 className="text-lg font-semibold text-white mb-3">Currently Pursuing</h4>
                <div className="space-y-2">
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* GitHub Contribution Graph */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent">
            Proof of contributions
          </h3>
          <div className="flex justify-center">
            <GitHubCalendar
              username="Akshatt10"
              blockSize={15}
              blockMargin={5}
              color="#22c55e"
              fontSize={16}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
