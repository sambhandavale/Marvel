import React from "react";
import Movies from "./pages/Movies/Movies";
import Home from "./pages/Home/Home";
import Series from "./pages/Series/Series";
import NetflixShows from "./pages/NetflixShows/NetflixShows";
import Phase from "./pages/Phases/Phase";


const routes = [
  { path: "/", element: <Home />, exact: true },
  { path: "/movies", element: <Movies /> },
  { path: "/series", element: <Series /> },
  { path: "/series/netflix", element: <NetflixShows /> },
  { path: "/movies/phase/:phase_no", element: <Phase /> },
];

export default routes;
