import React from "react";
import './Home.css';
import Navbar from "../navbar/Navbar";



function Home(){
    return(
        <body className="home_body">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            <div className="home_container">
                <div className="home_nav">
                    <Navbar />
                </div>
                <div className="home_content">
                    <div className="home_introduction">
                        <p className="home_welcome">
                            Hello,
                        </p>
                        <p className="home_name">
                            I'm Zach
                        </p>
                        <span className="home_info">
                            <p>
                                Full Stack Developer
                            </p>
                        </span>
                    </div>
                    <div className="home_links">
                        <div>
                            <button className="home_contact">CONTACT</button>
                        </div>
                        <hr></hr>
                        <span className="home_icons">
                            <a href="https://github.com/darkzelli" target={"_blank"} rel="noreferrer"><img src={require("./images/github-logo.png")} alt="github.png"></img></a>
                            <a href="https://www.linkedin.com/" target={"_blank"} rel="noreferrer"><img src={require("./images/linkedin.png")} alt="linkedin.png"></img></a>
                        </span>
                    </div>
                </div>
                <div className="home_nextpage">
                    <p className="material-icons">expand_more</p>
                </div>    
            </div>
        </body>
    );
}


export default Home;