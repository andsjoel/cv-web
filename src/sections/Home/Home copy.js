import React, { useState, useEffect, useRef } from 'react';
import './home.css';
import nameDome from "../../assets/images/name_dome.png";
import nameDomeOne from "../../assets/images/name_dome1.png";
import nameDomeTwo from "../../assets/images/name_dome2.png";
import iconInsta from "../../assets/images/icons/icon-insta_1.png";
import iconGithub from "../../assets/images/icons/icon-github_1.png";

const Home = () => {
    const [isClicked, setIsClicked] = useState(false);
    const positionRef = useRef({ x: 0, y: 0 });
    const nameTwoRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX - window.innerWidth / 2) / 50;
            const y = (e.clientY - window.innerHeight / 2) / 50;
            positionRef.current = { x, y };

            if (nameTwoRef.current) {
                nameTwoRef.current.style.transform = `translate(${x}px, ${y}px)`;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    return (
        <section id='home' 
                 onMouseDown={handleMouseDown}
                 onMouseUp={handleMouseUp}
        >
            {isClicked && <img className='name-dome' alt='logo com nome domenico' src={nameDome} draggable="false" />}
            
            <div className='div-controller' draggable="false">
                <img className='name-one' alt='logo com nome domenico' src={nameDomeOne} draggable="false" />
                <img className='name-two' alt='logo com nome domenico' src={nameDomeTwo} ref={nameTwoRef} draggable="false" />
                
                <div className='div-controller-two'>
                    {/* <a>
                        <img className='icon-insta' src={ iconInsta } />
                    </a>
                    <a>
                        <img className='icon-insta' src={ iconGithub } />
                    </a> */}
                </div>
            </div>
        </section>
    );
};

export default Home;
