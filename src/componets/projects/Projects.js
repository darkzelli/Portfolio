import React from "react";
import './Projects.css';
import Navbar from "../navbar/Navbar";
import Nextpage from "../nextpage/Nextpage";


function Projects(){
    return(
        <body className="projects_body">
            <div className="projects_container">
                <div className="projects_nav">
                    <Navbar />
                </div>
                <div className="projects_content">

                </div>
                <div className="projects_nextpage">
                    <Nextpage />
                </div>
            </div>
        </body>
    );
}



export default Projects;