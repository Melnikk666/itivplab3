import React from 'react';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import Principles from '../components/Principles';
import Navbar2 from '../components/Navbar2';
import Testimonials from '../components/Testimonials';

const About = () => (
  <>
    <div className='body2'>
    <Navbar2 />
    <main>
      <AboutSection />
      <Principles />
      <Testimonials />
    </main>
    <Footer />
    </div>
  </>
);

export default About;
