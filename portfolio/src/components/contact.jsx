import React from "react";
import "../components/contact.css";

export const Contact = () => {
    return (
        <div className="main-Contact" id="Contact">
            <div>
                <h2 className="contact-title">
                    Get In Touch
                </h2>
            </div>
            <div>
                <p className="contact-p">
                    Althought I'm Currently looking for any new opportunities, my inbox is always open. whether you have a 
                    question or just want to say hi, I'll try my best to get back to you!
                </p>
            </div>
            <div>
                <button className="contact-button">
                    <a href="mailto:">say Hello</a>
                </button>
            </div>
            <div className="footer_div">
                <p className="footer_P">Design by Dhrupesh</p>
            </div>
        </div>
        
    )
}