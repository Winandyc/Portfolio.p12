import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index.jsx';
import About from './pages/About/index.jsx';

import './global.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
