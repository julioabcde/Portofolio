import React from 'react';
import './works.css';
import Portofolio1 from '../../assets/portfolio-1.png'
import Portofolio2 from '../../assets/portfolio-2.png'
import Portofolio3 from '../../assets/portfolio-3.png'
import Portofolio4 from '../../assets/portfolio-4.png'
import Portofolio5 from '../../assets/portfolio-5.png'
import Portofolio6 from '../../assets/portfolio-6.png'

const works = () => {
  return (
    <section id='works'>
        <h2 className="worksTitle">My Portofolio</h2>
        <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my works is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
        <div className="worksImgs">
            <div className="worksImg">
                <img src={Portofolio1} alt="Portofolio 1" className="worksImg" />
                <div className="description">
                    <p className="descriptionText">Create a website prototype and company website that represents the VhoTel image. Develop responsive website front-end using HTML, CSS, and Javascript</p>
                    <a href="https://github.com/username/project1" target="_blank" className="githubBtn">View on GitHub</a>
                </div>
            </div>
            <div className="worksImg">
                <img src={Portofolio2} alt="Portofolio 2" className="worksImg" />
                <div className="description">
                    <p className="descriptionText">Create a website prototype and company website that represents the VhoTel image. Develop responsive website front-end using HTML, CSS, and Javascript</p>
                    <a href="https://github.com/username/project2" target="_blank" className="githubBtn">View on GitHub</a>
                </div>
            </div>
            <div className="worksImg">
                <img src={Portofolio3} alt="Portofolio 2" className="worksImg" />
                <div className="description">
                    <p className="descriptionText">Create a website prototype and company website that represents the VhoTel image. Develop responsive website front-end using HTML, CSS, and Javascript</p>
                    <a href="https://github.com/username/project2" target="_blank" className="githubBtn">View on GitHub</a>
                </div>
            </div>
            <div className="worksImg">
                <img src={Portofolio4} alt="Portofolio 2" className="worksImg" />
                <div className="description">
                    <p className="descriptionText">Create a website prototype and company website that represents the VhoTel image. Develop responsive website front-end using HTML, CSS, and Javascript</p>
                    <a href="https://github.com/username/project2" target="_blank" className="githubBtn">View on GitHub</a>
                </div>
            </div>
            <div className="worksImg">
                <img src={Portofolio5} alt="Portofolio 2" className="worksImg" />
                <div className="description">
                    <p className="descriptionText">Create a website prototype and company website that represents the VhoTel image. Develop responsive website front-end using HTML, CSS, and Javascript</p>
                    <a href="https://github.com/username/project2" target="_blank" className="githubBtn">View on GitHub</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default works