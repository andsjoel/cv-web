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
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [cursorWhere, setCursorWhere] = useState(false);
    
    const clickTag = (e) => {      
        const scrollTop = e.target.scrollTop;
        setIsVisible(scrollTop > 100);
    };

    const handleMouseMove = (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        setCursorPosition({ x: posX, y: posY });
      };
  
      window.addEventListener("mousemove", handleMouseMove);

      const wheresMouse = (wheres) => {
        setCursorWhere(wheres);
      }


  return (
    <main onScroll={ clickTag } id="main">
        <div style={{left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px`}} className="cursor-dot"></div>
        <div style={{left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px`}} className={`cursor-outline ${cursorWhere ? 'cursor-in' : ''}`}></div>
        <Header isVisible={isVisible} wheresMouse={wheresMouse} />
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
