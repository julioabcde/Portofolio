import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const skills = () => {
  return (
    <section id="skills">
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I am skilled and passionate web designer with experience in creating visually appealing and user-friendly website. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS and JavaScript</span>
        <div className='skillBars'>
            <div className='skillBar'> 
                <img src={UIDesign} alt="UIDesign" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>UI/UX design</h2>
                    <p>Trial</p>
                </div>
            </div>
            <div className='skillBar'> 
                <img src={WebDesign} alt="WebDesign" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>Website design</h2>
                    <p>Trial</p>
                </div>
            </div>
            <div className='skillBar'> 
                <img src={AppDesign} alt="AppDesign" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>App design</h2>
                    <p>Trial</p>
                </div>
            </div>
        </div>
    
    </section>

  );
}

export default skills