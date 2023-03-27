import React from "react";
import { editIfMovieIsFavorite } from "../../helpers/helpers";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({
  movieData,
  searchTerm,
  favoriteMovies,
  setFavoriteMovies,
}) => {
  return (
    <div className="cardset">
      {movieData
        ?.filter((movie) =>
          movie?.title?.toLowerCase()?.includes(searchTerm.toLowerCase())
        )
        ?.map((movie) => (
          <MovieCard
            key={`${movie?.id},${movie?.title}`}
            movie={movie}
            isFavorite={favoriteMovies?.includes(movie?.id)}
            onClick={() => {
              editIfMovieIsFavorite(
                movie?.id,
                favoriteMovies,
                setFavoriteMovies
              );
            }}
          />
        ))}
    </div>
  );
};

export default MovieList;
