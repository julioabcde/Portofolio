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
            <Link><button className="btn">< img src={btnImg} alt="Hire" className="btnImg" />Hire Me</button></Link>
        </div>

        <img src={bg} alt="Profile" className="bg"/>
    </section>
  )
}

export default intro;