import React from 'react';
import './about.css';
import traçoDome from "../../assets/images/traço_dome.png";
import apelidoDome from "../../assets/images/apelido_dome.png"

const About = () => {
  return (
    <section id='about'>
        <h2><span>/</span>quem sou eu?</h2>
        <div className='about-content'>
          <div className='about-left'>
            <p className='about-left-text'>estudante multidisciplinar. Desenvolvedor web, ilustrador e tatuador unindo arte e tecnologia para transformar ideias em realidade.</p>
            <div className='tags'>
              <p><span>#</span>arte</p>
              <p><span>#</span>código</p>
              <p><span>#</span>inovação</p>
            </div>
          </div>
          <div className='about-right'>
            <p className='about-right-text'>meu nome é <span>anderson joel</span> mas pode me chamar de <span>
              domênico
              <img src={ apelidoDome } alt='traço de marcação' className='traço-dome' />
            </span> se preferir.</p>
          </div>
        </div>
    </section>
  );
};

export default About;
