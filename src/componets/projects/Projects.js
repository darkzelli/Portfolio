import React from "react";
import './Projects.css';
import Navbar from "../navbar/Navbar";
import Nextpage from "../nextpage/Nextpage";
import Animations from "../animations/Animations";

function Projects(){
    return(
        <body className="projects_body">
            <div className="projects_container">
                <div className="projects_nav">
                    <Navbar />
                </div>
                <div className="projects_content">
                    <div className="projects_title">
                        <p className="projects_title_text">PROJECTS</p>
                        <hr></hr>
                        <Animations />
                    </div>
                    <div className="projects_projects">

                    </div>
                    <div className="projects_more">

                    </div>
                </div>
                <div className="projects_nextpage">
                    <Nextpage />
                </div>
            </div>
        </body>
    );
}



export default Projects;