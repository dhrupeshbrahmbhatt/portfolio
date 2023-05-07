import React from "react";
import "../components/about.css";


export const About = () => {
    return (
        <div className="about-section" id="About">
            <div>
                <h2 className="about-title">About Me</h2>
                <div className="about-p-1">
                    <p>
                        Hello! My name is Dhrupesh and I enjoy creating things that live on the internet. My interest in web 
                        development started back in 2020 when i decided to try edit my Thumblr themes -- turns out hacking 
                        together a custom reblog botton taught me a lot about HTML & css!
                    </p>
                </div>
                <div className="about-p-1">
                    <p>
                        Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge 
                        corporation, and a student-led design studio. My main focus these days is building accessible, inclusive 
                        products and digital experiences at Upstatement for a variety of clients.
                    </p>
                </div>
                <div className="about-p-1">
                    <p>
                        I also recently launched a course that covers everything you need to build a web app with the Spotify API 
                        using Node & React.
                    </p>
                </div>
                <div className="about-p-1">
                    <p>
                        Here are few technologies i've been working with recently:
                    </p>
                    <ul className="list-2">
                        <li>Javascript(ES6+)</li>
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>Tailwind</li>
                        <li>Python</li>
                        <li>Express.js</li>
                    </ul>
                </div>
            </div>
            <div>
                <img src="../public/demo.jpg" alt="My image" className="about-img" />
            </div>
        </div>
    );
};