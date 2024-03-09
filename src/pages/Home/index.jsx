import React from 'react';
import Presentation from '../../components/Presentation';
import Skills from '../../components/Skills';
import Contact from '../../components/Contact';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './style.scss';

/*
 * @brief : Composant Home qui représente la page d'accueil.
 * @component
 * @returns {JSX.Element} Le composant Home rendu.
 */

const Home = () => {
  return (
    <div>
      <Header />
      <Presentation />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
