import React from "react";
import styles from './Home.module.css';



const Home = () => {
    return(
        <body>
            <div className="introduction">
                <p className="welcome">
                    Hello,
                </p>
                <p className="name">
                    I'm Zach
                </p>
                <span className="info">
                    <p>
                        Full Stack Developer
                    </p>
                </span>
            </div>
            <div className="links">
                <div>
                    <button className="contact">CONTACT</button>
                </div>
                <hr></hr>
                <span className="icons">
                    <a href="https://github.com/darkzelli" target={"_blank"} rel="noreferrer"><img src={require("./images/github-logo.png")} alt="github.png"></img></a>
                    <a href="https://www.linkedin.com/" target={"_blank"} rel="noreferrer"><img src={require("./images/linkedin.png")} alt="linkedin.png"></img></a>
                </span>
            </div>
        </body>
    );
}


export default Home;