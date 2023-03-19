import React from "react";
import { Footer, Header, MovieList, Spinner } from "../../components";

const Favorites = ({
  movieData,
  searchTerm,
  setSearchTerm,
  favoriteMovies,
  setFavoriteMovies,
  loading,
}) => {
  if (loading) return <Spinner />;
  return (
    <main>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        buttonTitle="../"
        searchCategory="favorite films"
      />
      <MovieList
        movieData={movieData}
        searchTerm={searchTerm}
        favoriteMovies={favoriteMovies}
        setFavoriteMovies={setFavoriteMovies}
      />
      <Footer />
    </main>
  );
};

export default Favorites;
