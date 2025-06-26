import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

import ProjectsPage from './pages/projects'; // ✅ full page
import ContactPage from './pages/contact'; // ✅ full page
import ScrollToTop from './components/ScrollToTop'; // ✅ scroll to top component
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
        <Header />
        <ScrollToTop />
        <Routes>
          {/* Homepage */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Skills />
                <Experience />
            
              </>
            }
          />

          {/* Full Projects Page */}
          <Route path="/projects" element={<ProjectsPage />} />
          {/* Full Contact Page */}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
