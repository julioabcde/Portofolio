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
                    <p className="descriptionText">CALORIFY design based on Human-Computer Interaction (HCI) principles focuses on creating a user experience that is intuitive, pleasant, and minimizes cognitive load.</p>
                    <a href="https://www.figma.com/design/OvYkVDIC5XRviWDUZH4wkT/Kelompok-3_LF01_AOL-HCI?node-id=0-1&t=hpmOTK1Hu65FaOGR-1" target="_blank" className="githubBtn">View on GitHub</a>
                </div>
            </div>
            <div className="worksImg">
                <img src={Portofolio2} alt="Portofolio 2" className="worksImg" />
                <div className="description">
                    <p className="descriptionText">Vhotel is a web-based platform designed to help users easily book hotel rooms. Built using HTML, CSS, JavaScript, and a high-fidelity prototype in Figma.</p>
                    <a href="https://github.com/julioabcde/VhoTel" target="_blank" className="githubBtn">View on GitHub</a>
                </div>
            </div>
            <div className="worksImg">
                <img src={Portofolio3} alt="Portofolio 3" className="worksImg" />
                <div className="description">
                    <p className="descriptionText">BeaScholar is a web application designed to assist students in finding and applying for scholarships. Built with React for the frontend, Go for the backend</p>
                    <a href="https://github.com/julioabcde/Beascholar" target="_blank" className="githubBtn">View on GitHub</a>
                </div>
            </div>
            <div className="worksImg">
                <img src={Portofolio4} alt="Portofolio 4" className="worksImg" />
                <div className="description">
                    <p className="descriptionText">GymMe is a web-based platform designed to streamline supplement sales and management for gyms. Developed using ASP.NET and C# for the backend, SQL Server, Crystal Reports.</p>
                    <a href="https://github.com/julioabcde/GymMe" target="_blank" className="githubBtn">View on GitHub</a>
                </div>
            </div>
            <div className="worksImg">
                <img src={Portofolio5} alt="Portofolio 5" className="worksImg" />
                <div className="description">
                    <p className="descriptionText">Dimsum Master is a mobile app that simplifies the ordering of various dimsum dishes. Built with Android Studio and Firebase Realtime Database.</p>
                    <a href="https://github.com/julioabcde/DimsumMaster" target="_blank" className="githubBtn">View on GitHub</a>
                </div>
            </div>
        
        </div>
    </section>
  )
}

export default works