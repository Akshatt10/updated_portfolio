import React from 'react';
import Contact from '../components/Contact';
import Header from '../components/Header';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Header />
      <Contact />
    </div>
  );
};

export default ContactPage;
