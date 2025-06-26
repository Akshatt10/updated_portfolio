import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '/projects' }, // This links to the projects page
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '/contact' }
  ];

  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-4"
            >
              Akshat Tyagi
            </motion.div>
            <p className="text-gray-400 leading-relaxed">
              Passionate backend developer and AI enthusiast, crafting scalable solutions 
              and bringing innovative ideas to life through code.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="text-center md:text-right">
            <h3 className="text-white font-semibold mb-4">Built With</h3>
            <div className="flex flex-wrap justify-center md:justify-end gap-2">
              {['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-800/50 border border-gray-700/50 rounded-full text-xs text-gray-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="mx-2"
              >
                <Heart className="text-red-500" size={16} fill="currentColor" />
              </motion.div>
              <span>© {currentYear} Akshat Tyagi. All rights reserved.</span>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full text-white hover:shadow-lg transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600"></div>
    </footer>
  );
};

export default Footer;