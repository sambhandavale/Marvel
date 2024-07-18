import React from "react";
import { useLocation } from "react-router-dom";

const EntryTitle = () => {
  const location = useLocation();

  const titles = [
    {
      title: "Welcome to the Neighborhood Where Marvel Heroes Rule the Streets!",
      classname:"netflix_tag",
      path: "/series/netflix"
    },
    {
      title: "Phase where The Avengers Assembled for the First Time",
      classname:"netflix_tag",
      path: "/movies/phase/1"
    },
    {
      title: "Avengers realize thier main threat is not from earth",
      classname:"netflix_tag",
      path: "/movies/phase/2"
    },
    {
      title: "Avengers came to together for the last time to end the infinity saga",
      classname:"netflix_tag",
      path: "/movies/phase/3"
    },
    {
      title: "World has changed since the Blip and new Heroes have emerged",
      classname:"netflix_tag",
      path: "/movies/phase/4"
    },
    {
      title: "The new Saga begins with a new threat who wants to conquer all time",
      classname:"netflix_tag",
      path: "/movies/phase/5"
    },
    {
      title: "The Multiverse Saga coming to the end as the secret war beings",
      classname:"netflix_tag",
      path: "/movies/phase/6"
    }
  ];
  
    const currentTitle = titles.find(item => item.path === location.pathname);

  return (
    <div className="entry-title">
      <p className={`${currentTitle.classname}`}>
        {currentTitle ? currentTitle.title : ""}
      </p>
    </div>
  );
};

export default EntryTitle;
