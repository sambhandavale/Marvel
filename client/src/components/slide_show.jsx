import React from "react";
import { Link, useLocation } from "react-router-dom";

const SlideShow = ({ details }) => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className={`${currentPath === "/movies" && "movies_cat"} categories`}>
            {details.map((detail, index) => (
                <Link to={detail.to} className={`${detail.class_name} tile`} key={index}>
                    <div className="title">{detail.title}</div>
                </Link>
            ))}
        </div>
    );
};

export default SlideShow;
