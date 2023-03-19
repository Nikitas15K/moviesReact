import React from "react";

const MovieCard = ({ movie, favorite, onClick }) => {
  let heart = favorite ? <>💝</> : <>🤍</>;
  return (
    <article className="card">
      <img
        src={"https://image.tmdb.org/t/p/w500/" + movie?.poster_path}
        alt="movie poster"
      />
      <div className="text">
        <h3>
          <b>{movie?.title}</b>
        </h3>
        <p className="text">{movie?.overview}</p>
      </div>
      <button className="heart" onClick={onClick}>
        {heart}
      </button>
    </article>
  );
};

export default MovieCard;
