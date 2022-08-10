import React from "react";
import './Home.css';


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
                    <span className="circle">
                        <a href="https://github.com/darkzelli" target={"_blank"} rel="noreferrer"><img src=".../" alt="github"></img></a>
                    </span>
                    <span className="circle">
                        <a href="https://www.linkedin.com/"><img src="https://www.linkedin.com/favicon.ico" alt="linkedIn"></img></a>
                    </span>
                </span>
            </div>
        </body>
    );
}


export default Home;