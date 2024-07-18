import React from "react";
import PageLayout from "../../components/layout/page_layout";
import SlideShow from "../../components/slide_show";

const Series = () => {
  const details = [
    { class_name: "netflix_shows", title: "NETFLIX SHOWS", to: "/series/netflix" },
    { class_name: "disney_plus", title: "", to: "#" },
    { class_name: "animated_shows", title: "ANIMATED SHOWS", to: "#" }
  ];

  return (
    <div className="series">
      <PageLayout />
      <div className="divider">MARVEL STUDIOS PRESENTS</div>
      <div className="series_slides slide_show">
        <SlideShow details={details} />
      </div>
    </div>
  );

};

export default Series;
