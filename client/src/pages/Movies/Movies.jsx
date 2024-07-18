import React, { useState, useEffect } from "react";
import PageLayout from "../../components/layout/page_layout";
import Saga from "../../components/movies/saga_tile";
import SlideShowPoster3 from "../../components/layout/slideshowPoster3";

const Movies = () => {
  const [xmenMovies, setXmenMovies] = useState([]); 
  const [f4Movies, setf4Movies] = useState([]); 
  const [spidermanMovies, setspidermanMovies] = useState([]); 
  const [idType, setIdTpye] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const fetchMarvelMovies = async () => {
          try {
              const route = `https://marvel-api-mcu.vercel.app/api/movies?movie=x_men`;
              const response = await fetch(route);
              if (!response.ok) {
                  throw new Error(`Failed to fetch X-Men Movies`);
              }
              const data = await response.json();
              setXmenMovies(data);
              setLoading(false);
          } catch (error) {
              console.error(`Error fetching X-Men Movies:`, error);
              setLoading(false);
              window.location.assign("/");
          }
      };

      fetchMarvelMovies();
  }, []);

  useEffect(() => {
    const fetchMarvelMovies = async () => {
        try {
            const route = `https://marvel-api-mcu.vercel.app/api/movies?movie=fantastic_four&studios=Fox Studios`;
            const response = await fetch(route);
            if (!response.ok) {
                throw new Error(`Failed to fetch f4 Movies`);
            }
            const data = await response.json();
            setf4Movies(data);
            setLoading(false);
        } catch (error) {
            console.error(`Error fetching f4 Movies:`, error);
            setLoading(false);
            window.location.assign("/");
        }
    };

    fetchMarvelMovies();
  }, []);

  useEffect(() => {
    const fetchMarvelMovies = async () => {
        try {
            const route = `https://marvel-api-mcu.vercel.app/api/movies?onlystudios=Sony Pictures`;
            const response = await fetch(route);
            if (!response.ok) {
                throw new Error(`Failed to fetch Spiderman Movies`);
            }
            const data = await response.json();
            setspidermanMovies(data);
            setLoading(false);
        } catch (error) {
            console.error(`Error fetching Spiderman Movies:`, error);
            setLoading(false);
            window.location.assign("/");
        }
    };

    fetchMarvelMovies();
  }, []);

  return (
    <div className="movies">
      <PageLayout /> 
      <div className="divider">MARVEL STUDIOS PRESENTS</div>
      <Saga />
      <div className="other_movies_tag_container">
        <div className="other_movies_tag">
          <div className="tag">OTHER MOVIES</div>
          <img src="/icons/movies/other_movies.svg" alt="" />
        </div>
      </div>
      <div className="other_movies_container">
        <div className="other_movies">
          <div className="other_x_men other">
            <div className="other_info">
              <div className="title_studios">
                <div className="studios">Fox Studios</div>
                <div className="title">X-MEN</div>
              </div>
              <div className="other_desc">The Fox Studios X-Men movies, spanning from 2000 to 2019, are superhero films based on Marvel Comics characters. Iconic titles like "X-Men," "X2," "The Last Stand," and "Days of Future Past" explore the struggles of mutants led by Professor Xavier against their nemesis, Magneto. Featuring stars like Hugh Jackman as Wolverine, the series delves into themes of identity and discrimination, blending action, drama, and sci-fi, significantly impacting the superhero genre.</div>
            </div>
            <div className="other_posters">
              <div className="other_posters_tag">Explore the Movies</div>
              <SlideShowPoster3 setType={setIdTpye} slideData={xmenMovies}/>
            </div>
          </div>
          <div className="lower_tile">
            <div className="other_fantastic_four other">
              <div className="other_info">
                <div className="title_studios">
                  <div className="studios">Fox Studios</div>
                  <div className="title">FANTASTIC FOUR</div>
                </div>
                <div className="other_desc">The Fox Studios Fantastic Four movies, spanning from 2005 to 2015, bring Marvel Comics' superhero team to life. Featuring Mr. Fantastic, the Invisible Woman, the Human Torch, and the Thing, the films showcase their superpowers and battles against foes like Doctor Doom. Despite mixed reception, these movies introduced iconic characters with action-packed adventures and special effects, influencing the Marvel movie universe.</div>
              </div>
              <div className="other_posters">
                <div className="other_posters_tag">Explore the Movies</div>
                <SlideShowPoster3 setType={setIdTpye} slideData={f4Movies}/>
              </div>
            </div>
            <div className="other_spider_man_and_more_bt other">
              <div className="other_spider_man">
                <div className="other_info">
                    <div className="title_studios">
                      <div className="studios">Sony Pictures</div>
                      <div className="title">SPIDER-MAN</div>
                    </div>
                    <div className="other_desc">Sony's Spider-Man movies include multiple series and spin-offs. Sam Raimi's trilogy with Tobey Maguire follows Peter Parker from high school to battles with the Green Goblin and Doctor Octopus. Marc Webb's reboot with Andrew Garfield explores Peter's origins and fights with the Lizard and Electro. Sony's Spider-Verse introduces various Spider-People from different dimensions, alongside spin-offs like Venom, focusing on Eddie Brock, and Morbius, featuring the living vampire. These films highlight Spider-Man's enduring appeal and diverse Marvel universe storytelling.</div>
                </div>
                <div className="other_posters">
                    <div className="other_posters_tag">Explore the Movies</div>
                    <SlideShowPoster3 setType={setIdTpye} slideData={spidermanMovies}/>
                </div>
              </div>
              <div className="explore_more_bt">EXPLORE MORE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ); 
};

export default Movies;
