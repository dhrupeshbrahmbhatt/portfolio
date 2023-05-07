import React from "react";
import "../components/hero_section.css";
import 'font-awesome/css/font-awesome.min.css';

export const Hero_section = () => {
        return (
        <section className="maincontent">
        <div className="content-1">
            <ul className="listvertical">
                <li><a href="https://github.com/dhrupeshbrahmbhatt" className="listitem"><i className="fa-brands fa-github" /></a></li>
                <li><a href="https://www.instagram.com/dhrupesh_brahmbhatt/" className="listitem"><i className="fa-brands fa-instagram" /> </a></li>
                <li><a href="https://twitter.com/Dhrupesh840" className="listitem"><i className="fa-brands fa-twitter" /></a></li>
                <li><a href="https://www.linkedin.com/in/dhrupesh-brahmbhatt-a45656237/" className="listitem"><i className="fa-brands fa-linkedin" /></a></li>
            </ul>
        </div>
        <div className="content-2">
            <div>
                <h1 className="intro">Hi, my name is</h1>
            </div>
            <div>
                <h2 className="name">Dhrupesh Brahmbhatt.</h2>
            </div>
            <div>
                <h3 className="work">I build things for the web.</h3>
            </div>
            <div>
                <p className="statement">
                I’m a software engineer specializing in building (and occasionally designing) exceptional 
                digital experiences.     
                Currently, I’m focused on building accessible, human-centered products at Upstatement.
                </p>
            </div>
            <div>
                <button className="hero-section-button">
                    Check out my cv!
                </button>
            </div>
        </div>
        <div className="content-3">
            <a href="mailto:dhrupesh840@gmail.com" className="mail">dhrupesh840@gmail.com</a>
        </div>
        </section>
    );
};