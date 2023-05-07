import React from "react";
import "../components/Navbar.css";
import { useState } from "react";

export const Navbar = () => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function(){
        var currentScrollpos = window.pageYOffset;
        if(prevScrollpos > currentScrollpos){
            document.getElementById("nav").style.top = "0";
        }else {
            document.getElementById("nav").style.top = "-100px";
        }
        prevScrollpos = currentScrollpos;
    }
    function openNav(){
        const element = document.getElementById("navLinks")
        console.log(element.style.right = "20%")
    }
    function closeNav(){
        const element = document.getElementById("navLinks")
        console.log(element.style.right = "-30%")
    }
    return (
    <header>
        <nav className="container" role={"navigation"} id="nav">
            <div className="container-1"> 
                <h4>Dhrupesh</h4>
            </div>
            <button className="Bars_icon" onClick={openNav}>
                    <i className="fa-solid fa-bars-staggered" />
            </button>
            <div className="container-2">
                <ul className="Navbar-list" id="navLinks">
                    <li className="Navbar-list-item"><a href="#About">About</a></li>
                    <li className="Navbar-list-item"><a href="#Experiance">Experience</a></li>
                    <li className="Navbar-list-item"><a href="#Work">Work</a></li>
                    <li className="Navbar-list-item"><a href="#Contact">Contact</a></li>
                    <button className="flex">
                        <a href="#">Resume</a>
                    </button>
                    <button className="X_icon" onClick={closeNav}>
                        <i className="fa-sharp fa-regular fa-x" />
                    </button>
                </ul>
            </div>
        </nav> 
    </header>
  );
};