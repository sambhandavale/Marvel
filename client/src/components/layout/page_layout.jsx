import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FlipBoxHeader from "../flipbox_header";


const PageLayout = () => {
  const { pathname: currentPath } = useLocation();
  
  const [loading, setLoading] = useState(true);
  const [marvelMovies, setMovies] = useState([]); // to store the fetched data from API
  const [marvelShows, setShows] = useState([]); // to store the fetched data from API

  const isMovies = currentPath === "/movies";
  const isSeries = currentPath === "/series";

  useEffect(() => {
    const fetchMovies = async () => {
        try {
            const response = await fetch('https://marvel-api-mcu.vercel.app/api/movies');
            if (!response.ok) {
                throw new Error('Failed to fetch Movies');
            }
            const data = await response.json();
            // console.log(data);
            setMovies(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching Movies:', error);
            setLoading(false);
        }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    const fetchShows = async () => {
        try {
            const response = await fetch('https://marvel-api-mcu.vercel.app/api/shows');
            if (!response.ok) {
                throw new Error('Failed to fetch Shows');
            }
            const data = await response.json();
            // console.log(data);
            setShows(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching Shows:', error); 
            setLoading(false);
        }
    };

    fetchShows();
  }, []);

  return (
      <div className="top">
        <div
          className={`intro_poster ${
            isMovies ? "marvel_movies" : isSeries ? "shows" : ""
          }`}
        ></div>
        <div className="recent_movies">
            {isSeries &&
                marvelShows
                  .filter(({ series_page }) => series_page === 1)
                  .map(({ name, title, info_link, phase }) => {
                    const poster_link = `/assets/series/disney+/${title}/${title}.jpg`;
                    return (
                      <FlipBoxHeader
                        key={name}
                        name={name}
                        imagePath={poster_link}
                        infoLink={info_link}
                      />
                    );
                  })
              }
              {isMovies &&
                marvelMovies
                  .filter(({ movies_page }) => movies_page === 1)
                  .map(({ name, title, info_link, phase }) => {
                    const poster_link = `/assets/movies/phase${phase}/${title}/${title}.jpg`;

                    return (
                      <FlipBoxHeader
                        key={name}
                        name={name}
                        imagePath={poster_link}
                        infoLink={info_link}
                      />
                    );
                  })
              }
        </div>
      </div>
  );
};

export default PageLayout;
