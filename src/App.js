
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/contact-me" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
