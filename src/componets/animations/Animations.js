import React from "react";
import './Animations.css';
import { useState } from "react";

function Animations(){

    const[animation, setAnimation] = useState('on');

    return(
        <body className="animations_body">
            <div className="animations_content">
                <p>ANIMATIONS</p>
                <div className="animations_button" onClick={animation === 'off' ? () => setAnimation('on'): () => setAnimation('off')}>
                    <p className="animations_text noselect">
                        { animation === 'off' ? 'ON' : 'OFF'}
                    </p>
                    <div className="animations_circle"></div>
                </div>
            </div>
        </body>
    );
}


export default Animations;