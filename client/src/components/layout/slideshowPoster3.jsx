import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

const SlideShowPoster3 = ({ setType, slideData }) => {
    const [enlarge, setEnlarge] = useState(null);
    const location = useLocation();
    const currentPath = location.pathname;
    const path = location.pathname.split("/")[1];
    const current_phase = parseInt(location.pathname.split("/")[3], 10);

    const handleClick = (id) => {
        if (enlarge === id) {
            setEnlarge(null);
        } else { 
            setType(id);
            setEnlarge(id);
        }
    };

    const getImageSrc = (show) => {
        const pathLength = currentPath.split("/").length;
        if (path === "series") {
            return `/assets/series/netflix/${show.title}/${show.title}.jpg`;
        } else if (path.includes("movies") && pathLength > 2) {
            return `/assets/movies/phase${show.phase}/${show.title}/${show.title}.jpg`;
        } else if (path.includes("movies") && pathLength === 2 && show.studios.includes("Fox Studios")) {
            return `/assets/movies/fox_studios/${show.version.split("-")[0]}/${show.title}/${show.title}.jpg`;
        } else if (path.includes("movies") && pathLength === 2 && show.studios.includes("Sony Pictures")) {
            return `/assets/movies/sony_pictures/${show.version.split("-")[0]}/${show.title}/${show.title}.jpg`;
        }else {
            return "";
        }
    };
    

    const slidesPerView = current_phase === 6 || currentPath === "/movies" ? 2.5 : 5.2;
    const spaceBetween = current_phase === 6 ? 5 : 2;

    return (
        <div className="poster_slideshow">
            <Swiper
                loop={currentPath === "/movies"}
                grabCursor
                slidesPerView={slidesPerView}
                spaceBetween={spaceBetween}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                }}
            >
                {slideData.map((show) => (
                    <SwiperSlide key={show.id}>
                        <Link key={show.id} to="#" onClick={() => currentPath !== "/movies" && handleClick(show.id)}>
                            <div className={`poster1 poster ${show.id === enlarge ? "grow" : ""}`}>
                                <img src={getImageSrc(show)} alt={show.name} />
                                {currentPath === "/movies" ? (
                                    ""
                                ) : (
                                    <>
                                        <div className="poster_title">{show.name}</div>
                                        <div className="poster_year poster_title">{path === "series" ? show.series_duration : show.year_of_release}</div>
                                    </>
                                )}
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SlideShowPoster3;
