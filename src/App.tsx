import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import all your components and pages
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';
import ProjectsPage from './pages/projects';
import ContactPage from './pages/contact';
import ScrollToTop from './components/scrolltotop';
import EntryPage from './components/entry'; // Import the EntryPage

function App() {
  // State to manage whether the user has passed the entry page
  const [showPortfolio, setShowPortfolio] = useState(false);

  // Function to be called by the EntryPage to transition to the main site
  const handleEnter = () => {
    setShowPortfolio(true);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
        {/* The Header is now conditionally rendered. It will only show if showPortfolio is true. */}
        {showPortfolio && <Header />}
        
        {/* Use a ternary operator to switch between the EntryPage and your main content */}
        {!showPortfolio ? (
          // If the portfolio is not shown, render the EntryPage
          <EntryPage onEnter={handleEnter} />
        ) : (
          // Once entered, render your main content with routing
          <>
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
            {/* The Footer is also conditionally rendered. */}
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
