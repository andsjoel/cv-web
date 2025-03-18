import React, { useState } from 'react';
import './portfolio.css';
import Header from '../components/header/Header';
import Home from '../sections/Home/Home';
import About from '../sections/About/About';
import Skills from '../sections/Skills/Skills';
import Exp from '../sections/Exp/Exp';
import Projects from '../sections/Projects/Projects';
import Contact from '../sections/Contact/Contact';

const Portfolio = () => {
    const [isVisible, setIsVisible] = useState(false);
    


    const clickTag = (e) => {      
        const scrollTop = e.target.scrollTop;
        setIsVisible(scrollTop > 100);
    };


  return (
    <main onScroll={ clickTag } id="main">
        <Header isVisible={isVisible} />
        <Home />
        <About />
        <Skills />
        <Exp />
        <Projects />
        <Contact />
    </main>
  );
};

export default Portfolio;
