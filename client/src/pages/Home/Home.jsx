import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import FlipBoxHeader from "../../components/flipbox_header";
import "../../styles/pages/Home/home.css"



const Home = () =>{
    const location = useLocation();
    const currentPath = location.pathname;
    const [marvelMovies, setMovies] = useState([]); // to store the fetched data from API
    const [loading, setLoading] = useState(true);
    
    const isHome = currentPath === "/home" || currentPath === "/";

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

    console.log(marvelMovies);

    return(
        <div className="home">
            <div className="intro_poster">
                <img src="/assets/home/home_header_logo.jpg" alt="Marvel Studios" />
            </div>
            <div className="upcoming_movies">
            {isHome &&
                marvelMovies
                  .filter(({ homepage }) => homepage === 1)
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

export default Home;