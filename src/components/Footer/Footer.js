import React from "react";
import { Link } from "react-router-dom";
import tmdbLogo from "../../assets/images/tmdb.svg";

const Footer = () => {
  return (
    <div className="footer">
      <span>
        This product uses the TMDB API but is not endorsed or certified by TMDB.
        Link to:{" "}
      </span>
      <Link to="https://www.themoviedb.org/" target="_blank">
        <img src={tmdbLogo} alt="tmdb" className="tmdb" />
      </Link>
    </div>
  );
};

export default Footer;
