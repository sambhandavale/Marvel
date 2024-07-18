import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import SlideShowPoster3 from "./slideshowPoster3";

const Content = ({ data }) => {
    const [idType, setIdTpye] = useState(data[0].id); // for the selection of which show, its sent to poster slideshow which sets current show
    const [getType, setGetType] = useState(null); // to store the current show and display details for it accordingly below
    const [gradient, setGradient] = useState(data[0].title); // each show has different gradient
    const location = useLocation();
    const avail_phases = [1, 2, 3, 4, 5, 6];
    const current_phase = parseInt(location.pathname.split("/")[3], 10); // Correctly parse the phase number
    const currentPath = location.pathname;

    const isNetflix = currentPath === "/series/netflix"; 
    const isMovie = currentPath.split("/")[1] === "movies";

    useEffect(() => {
        const foundShow = data.find(tile => tile.id === idType);
        if (foundShow) {
            setGetType(foundShow);
            setGradient(foundShow.title);
        } else {
            setGetType(null);
            setGradient(data[0].title);
        }
    }, [data, idType]);

    // Effect to update idType when phase changes
    useEffect(() => {
        if (isMovie) {
            const firstShowInPhase = data.find(show => show.phase === current_phase);
            if (firstShowInPhase) {
                setIdTpye(firstShowInPhase.id);
            }
        }
    }, [current_phase, isMovie, data]);

    if (!getType) {
        return <p>No show found.</p>;
    }

    const svgArray = Array(5).fill(null);

    const backgroundStyleShows = {
        background: getType ? `var(--bg-linear-gradient-${gradient}), url(/assets/series/netflix/${getType.title}/poster.jpg) lightgray 50% / cover no-repeat` : ''
    };

    const backgroundStyleMovies = {
        background: getType ? `var(--bg-linear-gradient-${gradient}), url(/assets/movies/phase${getType.phase}/${getType.title}/poster.jpg) lightgray 50% / cover no-repeat` : ''
    };

    return (
        <div className="content" style={isNetflix ? backgroundStyleShows : isMovie ? backgroundStyleMovies : {}}>       
            <div className="information" key={getType.id}>
                <div className="main_info">
                    <div className="content_header">
                        <div className="content_header_top">
                            <div className="content_title">Marvel’s {getType.name} ({getType.year_of_release})</div>
                            <div className="genre_lang">
                                <div className="genre">Crime  |  Drama  |  Action</div>
                                <div className="lang">• {getType.language_name}</div>
                            </div>
                        </div>
                        <div className="userscore">
                            <div className="score">
                                <img src="/icons/components/rating.svg" alt="rating" />
                                <div className="percent">{getType.imdb_rating * 10}%</div>
                            </div>
                            <div className="userscore_title">USER SCORE</div>
                        </div>
                    </div>
                    <div className="content_info">
                        <div className="no_of_seasons">{isNetflix ? `SEASONS: ${getType.no_of_seasons}` : isMovie ? `${getType.movie_duration}` : ''}</div>
                        <div className="director_credit">
                            <div className="director">Director: {getType.director}</div>
                            <div className="creditscenes">Credit Scenes: {getType.credit_scenes}</div>
                        </div>
                        <div className="desc">{getType.description}</div>
                        <div className="visit_option">
                            <Link to={getType.watch_now_link}>
                                <div className="watch_now">WATCH NOW</div>
                            </Link>
                            <div className="trailer">
                                <img src="/icons/components/play.svg" alt="trailer" />
                                <Link to={getType.trailer_link}>
                                    <div className="watch_now">PLAY TRAILER</div>
                                </Link>
                            </div>
                            <img src="/icons/components/heart.svg" alt="heart" />
                            <div className="more_info watch_now">MORE</div>
                        </div>
                    </div>
                </div>
                <div className="review_container">
                    <div className="review_box">
                        <div className="profile_rating">
                            <div className="review_user">
                                <div className="profile_photo"></div>
                                <div className="user_name_date">
                                    <div className="user_name">Review By Karen Page</div>
                                    <div className="review_date">Written on 15 Jun 2024</div>
                                </div>
                            </div>
                            <div className="rating_stars">
                                {svgArray.map((_, index) => (
                                    <img key={index} src="/icons/components/star_filled.svg" alt="star" />
                                ))}
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="review_content">{getType.default_review}</div>
                    </div>
                    <div className="write_review">
                        <div className="read_more">Read More Review</div>
                        <div className="write_your_review">
                            <img src="/icons/components/pen.svg" alt="pen" />
                            <div className="write_review_title">Write Your Review</div>
                        </div>
                    </div>
                </div>
            </div>
            <SlideShowPoster3 setType={setIdTpye} slideData={data}/>
            <div className="next_prev_phase">
                {avail_phases.includes(current_phase - 1) ? (
                    <Link to={`/movies/phase/${current_phase - 1}`}>
                        <div className="prev_phase">
                            <img src="/icons/components/prev.svg" alt="prev_icon" className="prev_icon"/>
                            <div className="next_prev_phase_tag">PHASE {current_phase - 1}</div>
                        </div>
                    </Link>
                ) : <div></div>
                }
                {avail_phases.includes(current_phase + 1) ? (
                    <Link to={`/movies/phase/${current_phase + 1}`}>
                        <div className="next_phase">
                            <div className="next_prev_phase_tag">PHASE {current_phase + 1}</div>
                            <img src="/icons/components/next.svg" alt="next_icon" className="next_icon"/>
                        </div>
                    </Link>
                ) : <div></div>
                }
            </div>
        </div>
    );
};

export default Content;
