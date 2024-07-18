import React, { useState, useEffect } from "react";

import TopComponent from "../../components/layout/top_component";
import EntryTitle from "../../components/layout/entry_title";
import Content from "../../components/layout/content";

const NetflixShows = () => {
    const details = {
        name: "netflix",
        classname: "top_netflix",
        top_header: "NETFLIX MARVEL SHOW",
        bottom_header: "IN ORDER",
        link_path: "https://www.netflix.com/in/title/80002566",
        link_name: "NETFLIX"
    };

    const [marvelShows, setMarvelShows] = useState([]); // to store the fetched data from API
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNetflixShows = async () => {
            try {
                const response = await fetch('https://marvel-api-mcu.vercel.app/api/shows/netflix');
                if (!response.ok) {
                    throw new Error('Failed to fetch Netflix shows');
                }
                const data = await response.json();
                setMarvelShows(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching Netflix shows:', error);
                setLoading(false);
            }
        };

        fetchNetflixShows();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="netflix">
            <TopComponent details={details} />
            <EntryTitle />
            <Content data={marvelShows}/> 
        </div>
    );
};

export default NetflixShows;
