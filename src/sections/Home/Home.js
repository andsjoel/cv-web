import React, { useState } from "react";
import "./home.css";

const Home = () => {
    const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        // Normalizando o deslocamento dentro do olho
        const offsetX = (clientX - centerX) / 35;  
        const offsetY = (clientY - centerY) / 35;  

        setEyePosition({ x: offsetX, y: offsetY });
    };

    return (
        <section id="home" onMouseMove={handleMouseMove}>            
            <div className="letters">
                <div className="words word-dome">
                    <div className="letter-d"><p>D</p></div>
                    <div className="letter-o">
                        <div className="eye" style={{ transform: `translate(-50%, -50%) translate(${eyePosition.x}px, ${eyePosition.y}px)` }}></div>
                    </div>
                    <div className="letter-m"><p>M</p></div>
                    <div className="letter-e"><p>Ê</p></div>
                </div>
                <div className="words word-nico">
                    <div className="letter-n"><p>N</p></div>
                    <div className="letter-i"><p>I</p></div>
                    <div className="letter-c"><p>C</p></div>
                    <div className="letter-o">
                        <div className="eye" style={{ transform: `translate(-50%, -50%) translate(${eyePosition.x}px, ${eyePosition.y}px)` }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
