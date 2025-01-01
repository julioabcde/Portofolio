import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll';

const intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Julio</span></span>
            <p className="introPara">I currently studying at Binus University majoring in Computer Science </p>
            <a href="https://drive.google.com/file/d/1TgDJSo0xGtauSssydnE4t5y7Nwf7wcgJ/view?usp=sharing" download>
                <button className="btn">
                    <img src={btnImg} alt="Download CV" className="btnImg" />Download CV
                </button>
            </a>  
        </div>
        <img src={bg} alt="Profile" className="bg"/>
    </section>
  )
}

export default intro;