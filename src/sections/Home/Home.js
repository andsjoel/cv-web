import React, { useState, useEffect } from 'react';
import './home.css';
import nameDomeOne from "../../assets/images/name_dome1.png"
import nameDomeTwo from "../../assets/images/name_dome2.png"

const Home = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const handleMouseMove = (e) => {
        const x = (e.clientX - window.innerWidth / 2) / 100;
        const y = (e.clientY - window.innerHeight / 2) / 100;
        setPosition({ x, y });
      };
  
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

  return (
    <section id='home'>
        <img className='name-one' alt='logo com nome domenico' src={ nameDomeOne } />
        <img className='name-two' alt='logo com nome domenico' src={ nameDomeTwo } style={{ transform: `translate(${position.x}px, ${position.y}px)` }} />
    </section>
  );
};

export default Home;
