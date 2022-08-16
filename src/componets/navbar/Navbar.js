import React from "react";
import './Navbar.css';




function Navbar(){
    return(
        <body>
            <div className="nav_container">
                <span className="nav_span">
                    <ul>
                        <li>
                            ABOUT
                        </li>
                        <li>
                            PROJECTS
                        </li>
                        <li>
                            SKILLS
                        </li>
                    </ul>
                </span>
            </div>
        </body>
    );
}


export default Navbar;