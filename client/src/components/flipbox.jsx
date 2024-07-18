import React from "react";
import { useLocation } from 'react-router-dom';

const flipbox = (movie) => {  
    return (
      <FlipBox 
        key={movie.name} 
        name={movie.name}
        year={movie.year}
        imagePath={movie.imagePath}
        infoLink={movie.infoLink}
        released={movie.released} 
      />
    );
};

const FlipBox = (props) => {
    if(props.released === 1){
        return (
            <div className={`${props.name} movie`}>
                <div className="flip-box">
                    <div className="inner">
                        <div className="front">
                            <img src = {props.imagePath} alt={props.name} />
                        </div>
                        <div className="back">
                            <a className="small_info" href={props.infoLink}>Info</a>
                        </div>
                    </div>
                </div>
                <p className="title">{props.name}</p>
                <p className="year">{props.year}</p>
            </div>
        );
    }
};

export default FlipBox;
export {flipbox};
