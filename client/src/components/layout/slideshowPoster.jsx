import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SlideShowPoster = ({ setType, slideData }) => {
    const [enlarge, setEnlarge] = useState(null);
    const location = useLocation();
    const path = location.pathname.split("/")[1];

    console.log(slideData);

    const handleClick = (id) => {
        if (enlarge === id) {
            setEnlarge(null);
        } else { 
            setType(id);
            setEnlarge(id);
        }
    };

    return (
        <div className="poster_slideshow">
            {slideData.map((show) => (
                <Link key={show.id} to="#" onClick={() => handleClick(show.id)}>
                    <div className={`poster1 poster ${show.id === enlarge ? "grow" : ""}`}>
                        <img src={path === "series" && `/assets/series/netflix/${show.title}/${show.title}.jpg` || path === "movies" && `/assets/movies/phase${show.phase}/${show.title}/${show.title}.jpg`} alt={show.name} />
                        <div className="poster_title">{show.name}</div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default SlideShowPoster;
