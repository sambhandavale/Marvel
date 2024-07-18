import React from "react";
import { Link } from "react-router-dom";

const Saga = () =>{
    const saga_details = [
        {
          "class":"infinity_saga",
          "title":"INFINITY SAGA",
          "tag":"PATH T0 THE ENDGAME",
          "info":"The Infinity Saga revolves around the story of the Avengers and their allies as they come together to face various threats to the universe, particularly the cosmic warlord Thanos. Thanos seeks to collect the six Infinity Stones, which are powerful artifacts that, when combined in the Infinity Gauntlet, give him the ability to wipe out half of all life in the universe. The saga explores themes of heroism, sacrifice, and the balance between power and responsibility, culminating in the epic showdown in 'Avengers: Endgame.'",
          "phases":[1,2,3],
        },
        {
          "class":"multiverse_saga",
          "title":"MULTIVERSE SAGA",
          "tag":"PATH TO THE SECRET WARS",
          "info":"The Multiverse Saga, starting with Phase 4 of the Marvel Cinematic Universe (MCU), explores the fracturing of reality across different dimensions. Doctor Strange emerges as a pivotal figure, navigating the complexities of the multiverse. The Loki series provides a broader perspective, unraveling the machinations of Kang the Conqueror, the main antagonist orchestrating chaos across timelines. The saga culminates in 'Secret Wars,' where multiple universes collide, leading to epic confrontations and alliances reshaping the MCU's future.",
          "phases":[4,5,6],
        }
      ];

    return(
    <div className="saga">
        {saga_details.map(saga => (
          <div className={ `main_saga ${saga.class}`} key={saga.class}>
            <div className="info">
              <div className="about">
                <div className="saga_title">
                  <div className="title">{saga.title}</div>
                  <div className="tag">{saga.tag}</div>
                </div>
                <div className="saga_info">
                  {saga.info}
                </div>
              </div>
            </div>
            <div className="phases">
              {saga.phases.map(phase => (
                <Link to={`/movies/phase/${phase}`} key={phase}>
                  <div className={`phase${phase} p`} key={phase}>PHASE {phase}</div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
};

export default Saga;