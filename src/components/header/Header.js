import React, { useState } from 'react';
import './header.css';
import iconInsta from "../../assets/images/icons/insta_icon.svg";
import iconGithub from "../../assets/images/icons/github_icon.svg";

const Header = ({ isVisible, wheresMouse }) => {
    const [mouseIn, setMouseIn] = useState(null);

    const mouseOn = () => {
        setMouseIn(false);
        wheresMouse(mouseIn);
    }

    const mouseOff = () => {
        setMouseIn(true);
        wheresMouse(mouseIn);
    }

  return (
    <nav className={`header ${isVisible ? "normal-header" : ""}`}>
        <ul>
            <li><a onMouseEnter={ mouseOn } onMouseLeave={ mouseOff } href='#home'>Home</a></li>
            <li><a onMouseEnter={ mouseOn } onMouseLeave={ mouseOff } href='#about'>Sobre</a></li>
            <li><a onMouseEnter={ mouseOn } onMouseLeave={ mouseOff } href='#skills'>Habilidades</a></li>
            <li><a onMouseEnter={ mouseOn } onMouseLeave={ mouseOff } href='#exp'>Experiência</a></li>
            <li><a onMouseEnter={ mouseOn } onMouseLeave={ mouseOff } href='#projects'>Projetos</a></li>
            <li><a onMouseEnter={ mouseOn } onMouseLeave={ mouseOff } href='#contact'>Contato</a></li>
            <div className='home-menu'>
                <a>
                    <span>→</span>
                    veja um resumo
                </a>

                <div className='icons-div'>
                    <a>
                        <img className='icon-insta' src={ iconInsta } />
                    </a>
                    <a>
                        <img className='icon-insta' src={ iconGithub } />
                    </a>
                </div>
                
            </div>
        </ul>
    </nav>
  );
};

export default Header;
