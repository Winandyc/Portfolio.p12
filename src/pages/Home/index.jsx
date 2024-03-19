import React from 'react';
import Header from '../../components/Header';
import Presentation from '../../components/Presentation';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

/*
 * @brief : Composant Home qui représente la page d'accueil.
 * @component
 * @returns {JSX.Element} Le composant Home rendu.
 */

const Home = () => {
  return (
    <div id="home">
      <Header />
      <Presentation />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
