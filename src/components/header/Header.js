import React, { useState } from 'react';
import './header.css';

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
        </ul>
    </nav>
  );
};

export default Header;
