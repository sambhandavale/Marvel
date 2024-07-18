import React, { useState, useEffect } from "react";

import TopComponent from "../../components/layout/top_component";
import EntryTitle from "../../components/layout/entry_title";
import Content from "../../components/layout/content";
import { useParams } from "react-router-dom";

const Phase = () => {
    let { phase_no } = useParams();
    let number_no = {
        "1": "ONE",
        "2": "TWO",
        "3": "THREE",
        "4": "FOUR",
        "5": "FIVE",
        "6": "SIX",
    };
    const details = {
        name: "phase1",
        classname: `top_phase${phase_no}`,
        top_header: `MARVEL PHASE ${number_no[phase_no]}`,
        bottom_header: "IN ORDER",
        link_path:
            "https://www.disneyplus.com/movies/marvel-studios-the-avengers/2h6PcHFDbsPy",
        link_name: "DISNEY+",
    };

    const [marvelMovies, setMarvelMovies] = useState([]); // to store the fetched data from API
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMarvelMovies = async () => {
            try {
                const route = `https://marvel-api-mcu.vercel.app/api/movies/phase/${phase_no}`;
                const response = await fetch(route);
                if (!response.ok) {
                    throw new Error(`Failed to fetch Phase ${phase_no} Movies`);
                }
                const data = await response.json();
                setMarvelMovies(data);
                setLoading(false);
            } catch (error) {
                console.error(`Error fetching Phase ${phase_no} Movies:`, error);
                setLoading(false);
                window.location.assign("/");
            }
        };

        fetchMarvelMovies();
    }, [phase_no]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="phase1">
            <TopComponent details={details} />
            <EntryTitle />
            <Content data={marvelMovies} />
        </div>
    );
};

export default Phase;
