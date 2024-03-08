import React from 'react';
import Presentation from '../components/Presentation';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

import './home.scss';

const Home = () => {
  return (
    <div>
      <Presentation />
      <Skills />
      <Contact />
    </div>
  );
}

export default Home;
