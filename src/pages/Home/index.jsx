import React from 'react';
import Header from '../../components/Header/index.jsx';
import Presentation from '../../components/Presentation/index.jsx';
import Skills from '../../components/Skills/index.jsx';
import Projects from '../../components/Projects/index.jsx';
import Contact from '../../components/Contact/index.jsx';
import Footer from '../../components/Footer/index.jsx';

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
