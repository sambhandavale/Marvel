import React from "react";
import { useLocation } from 'react-router-dom';

const FlipBoxHeader = (props) => {
    return (
        <div className={`${props.name} movie`}>
            <div className="flip-box enlarge">
                <div className="inner">
                    <div className="front">
                        <img src = {props.imagePath} alt={props.name} />
                    </div>
                    <div className="back">
                        <a className="a_header" href={props.infoLink}>Info</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlipBoxHeader;
