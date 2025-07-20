import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Akshatt10', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/akshat-tyagi-305a50223/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:akshattyagi1010@gmail.com', label: 'Email' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10 text-center md:text-left">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-100 to-gray-500 bg-clip-text text-transparent mb-4">
              Akshat Tyagi
            </h3>
            <p className="text-gray-500 leading-relaxed">
              A software developer focused on building scalable, intelligent solutions and bringing innovative ideas to life through code.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-500 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex justify-center md:justify-start gap-5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-gray-500 hover:text-white hover:scale-110 transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800/50 pt-8">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
            <div className="flex items-center text-gray-500 text-sm">
              <span>© {currentYear} Akshat Tyagi. All rights reserved. Made with</span>
              <Heart className="text-gray-600 mx-1.5" size={14} />
              <span>in India.</span>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-gray-800/80 border border-gray-700/80 rounded-full text-gray-400 hover:text-white hover:border-gray-600 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
