import React, { useState, useEffect } from 'react';
import { Download, Mail, Github, Linkedin, Code, ArrowDown } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-violet-900">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>

        {/* Mouse-following gradient */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/15 to-violet-500/15 rounded-full blur-3xl transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}

        {/* Subtle geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-400/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-violet-400/20 transform rotate-45 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="animate-fadeInUp max-w-4xl mx-auto">
          {/* Simple greeting */}
          <div className="text-base sm:text-lg text-gray-400 mb-3 sm:mb-4 animate-slideInLeft">
            👋 Hello, I'm
          </div>

          {/* Name with gradient animation */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 animate-scaleIn px-4">
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              Akshat Tyagi
            </span>
          </h1>

          {/* Simple subtitle */}
          <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-gray-300 mb-6 sm:mb-8 font-light animate-slideInRight px-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              <span className="text-blue-400">Software Developer</span>
              <span className="text-gray-500 hidden sm:inline">|</span>
              <span className="text-violet-400">AI Enthusiast</span>
            </div>
          </div>

          {/* Rotating specialties */}
          <div className="text-base sm:text-lg md:text-xl text-blue-400 mb-8 sm:mb-12 h-12 sm:h-16 flex items-center justify-center animate-fadeIn px-4">
            <Code size={20} className="sm:w-6 sm:h-6 mr-2 sm:mr-3 animate-spin-slow" />
            <div className="animate-typewriter">
              <span className="inline-block animate-bounce">Backend Development</span>
            </div>
          </div>

          {/* Clean description */}
          <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 max-w-xl sm:max-w-2xl mx-auto leading-relaxed animate-slideInUp px-4">
            Passionate about crafting innovative solutions that bridge technology and impact.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 animate-slideInUp px-4">
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white px-6 sm:px-8 py-3 rounded-full font-medium flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Mail size={18} sm:size={20} />
              Let's Connect
            </button>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
              <button
                onClick={scrollToProjects}
                className="w-full sm:w-auto border-2 border-blue-400/60 text-blue-400 hover:bg-blue-400/10 px-6 sm:px-8 py-3 rounded-full font-medium flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105"
              >
                <Code size={18} />
                View Projects
              </button>

              <a
                href="https://drive.google.com/file/d/1m5vmjzjrpTf6vjzFHDuG3gG3q4OeUMsB/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto border-2 border-violet-400/60 text-violet-400 hover:bg-violet-400/10 px-6 sm:px-8 py-3 rounded-full font-medium flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105"
              >
                <Download size={18} />
                Resume
              </a>
            </div>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 animate-fadeIn px-4">
            {[
              { icon: Github, href: 'https://github.com/Akshatt10', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/akshat-tyagi-305a50223/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:akshattyagi1010@gmail.com', label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-gray-500 hover:text-blue-400 transition-all duration-300 p-2 sm:p-3 rounded-full hover:bg-gray-800/30 transform hover:scale-110"
                aria-label={label}
              >
                <Icon size={20} className="sm:w-6 sm:h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={scrollToProjects}
      >
        <div className="flex flex-col items-center space-y-1 sm:space-y-2 text-blue-400 hover:text-blue-300 transition-colors">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-current rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-current rounded-full mt-1 sm:mt-2 animate-pulse" />
          </div>
          <ArrowDown size={14} className="sm:w-4 sm:h-4" />
          <span className="text-xs hidden sm:block">Scroll</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out 0.1s both;
        }

        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out 0.3s both;
        }

        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out 0.5s both;
        }

        .animate-scaleIn {
          animation: scaleIn 0.8s ease-out 0.2s both;
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out 0.7s both;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }

        .animate-typewriter {
          animation: fadeIn 0.8s ease-out 0.9s both;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;