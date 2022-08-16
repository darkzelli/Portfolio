import React from "react";
import './Home.css';



function Home(){
    return(
        <body className="home-body">
            <div className="home-container">
                <div className="home-introduction">
                    <p className="home-welcome">
                      Hello,
                    </p>
                    <p className="home-name">
                        I'm Zach
                    </p>
                    <span className="home-info">
                        <p>
                            Full Stack Developer
                        </p>
                    </span>
                </div>
                <div className="home-links">
                    <div>
                        <button className="home-contact">CONTACT</button>
                    </div>
                    <hr></hr>
                    <span className="home-icons">
                        <a href="https://github.com/darkzelli" target={"_blank"} rel="noreferrer"><img src={require("./images/github-logo.png")} alt="github.png"></img></a>
                        <a href="https://www.linkedin.com/" target={"_blank"} rel="noreferrer"><img src={require("./images/linkedin.png")} alt="linkedin.png"></img></a>
                    </span>
                </div>    
            </div>
            <div className="home-nextpage">

            </div>
        </body>
    );
}


export default Home;