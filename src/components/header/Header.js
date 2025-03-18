import React from 'react';
import './header.css';

const Header = ({ isVisible }) => {
  return (
    <nav className={`header ${isVisible ? "normal-header" : ""}`}>
        <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>Sobre</a></li>
            <li><a href='#skills'>Habilidades</a></li>
            <li><a href='#exp'>Experiência</a></li>
            <li><a href='#projects'>Projetos</a></li>
            <li><a href='#contact'>Contato</a></li>
        </ul>
    </nav>
  );
};

export default Header;
