 import React from "react";
 import "../components/work.css";

 export const Work = () => {
    return (
        <div className="work-card" id="Work">
            <div>
                <h2 className="section_title">Some Things I've Built</h2>
            </div>
            <div className="grid_div">
                <div className="img_div">
                    <img src="../../public/project.jpg" alt="Work Image" className="project_photo" />
                </div>
                <div className="info_div">
                    <p className="project_type">Featured Project</p>
                    <a href="#" className="project_title">Piano Tales Game</a>
                    <div>
                        <p className="project_p">
                        Piano Tales is a captivating musical journey through the world of piano music, featuring beautiful melodies and emotional performances.
                        </p>
                    </div>
                    <div className="link-container">
                        <a href="#" className="link_code">Vs Code</a>
                        <a href="https://github.com/dhrupeshbrahmbhatt" className="projecticon"><i className="fa-brands fa-github" /></a>
                    </div>                   
                </div>
            </div>
        </div>
    )
 }