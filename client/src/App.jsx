import React from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "./components/layout/nav/navbar";
import Footer from "./components/layout/footer/footer";
import routes from "./routes";
import "./main.css"


export default function App() {

  const path = useLocation();
  const homePath = path.pathname;
  const backgroundStyle = homePath === "/" ? { backgroundImage: 'url(/assets/home/home_bg.jpg)' } : {};

  return (
    <div className="Marvel" style={backgroundStyle}>
      <Navbar />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} exact={route.exact} />
        ))}
      </Routes>
      <div className="blank"></div>
      <Footer />
    </div>
  );
}
