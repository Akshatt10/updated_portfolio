import React, { useState, useEffect } from 'react';
import { Download, Mail, Github, Linkedin, Code, ArrowDown } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
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
    // Changed the background to a dark grey/black gradient
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Changed the mouse-following gradient to a subtle white/grey */}
        <div
          className="absolute w-80 h-80 bg-gradient-to-r from-white/5 to-white/0 rounded-full blur-3xl transition-all duration-700 ease-out"
          style={{
            left: mousePosition.x - 160,
            top: mousePosition.y - 160,
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
        <div className="space-y-8">
          {/* Greeting */}
          <div className="text-4xl text-gray-400 opacity-0 animate-fadeIn">
            Hello, I'm
          </div>

          {/* Name with a new monochrome gradient */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold opacity-0 animate-fadeIn animation-delay-200">
            <span className="bg-gradient-to-r from-gray-100 to-gray-500 bg-clip-text text-transparent">
              Akshat Tyagi
            </span>
          </h1>

          {/* Subtitle with greyish tones */}
          <div className="text-xl md:text-2xl text-gray-300 font-light opacity-0 animate-fadeIn animation-delay-400">
            <span className="text-gray-300">Software Developer</span>
            <span className="text-gray-600 mx-4">•</span>
            <span className="text-gray-400">AI Enthusiast</span>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fadeIn animation-delay-600">
            Passionate about crafting innovative solutions that bridge technology and impact.
          </p>

          {/* Action buttons with the new color scheme */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fadeIn animation-delay-800">
            <button
              onClick={scrollToContact}
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full font-medium flex items-center gap-3 transition-all duration-300 hover:scale-105 border border-gray-700"
            >
              <Mail size={20} />
              Let's Connect
            </button>

            <a href=""></a>

            <div className="flex gap-4">
              <button
                onClick={scrollToProjects}
                className="border border-gray-600/50 text-gray-300 hover:bg-gray-300/10 px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all duration-300"
              >
                <Code size={18} />
                Projects
              </button>

              <a
                href="https://drive.google.com/file/d/1m5vmjzjrpTf6vjzFHDuG3gG3q4OeUMsB/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-700/50 text-gray-400 hover:bg-gray-400/10 px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all duration-300"
              >
                <Download size={18} />
                Resume
              </a>
            </div>
          </div>

          {/* Social links with updated hover color */}
          <div className="flex justify-center gap-6 opacity-0 animate-fadeIn animation-delay-1000">
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
                className="text-gray-500 hover:text-white transition-colors duration-300 p-3 rounded-full hover:bg-gray-800/50"
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator with the new theme */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer opacity-0 animate-fadeIn animation-delay-1200"
        onClick={scrollToProjects}
      >
        <div className="flex flex-col items-center space-y-2 text-gray-600 hover:text-gray-300 transition-colors">
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce" />
          </div>
          <ArrowDown size={16} />
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-1200 {
          animation-delay: 1.2s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
