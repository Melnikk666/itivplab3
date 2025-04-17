import React from 'react';
import GoalsSection from '../components/GoalsSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import '../components/index.css';

const Home = () => {
  return (
    <>
      <NavBar/>
      <Header />
      <main>
      <GoalsSection />
      <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default Home;
