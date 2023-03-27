import React from "react";
import { Footer, Header, MovieList, Spinner } from "../../components";

const Home = ({
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
        navigateTarget="./favorites"
        searchCategory="all films"
      />
      {movieData && (
        <MovieList
          movieData={movieData}
          searchTerm={searchTerm}
          favoriteMovies={favoriteMovies}
          setFavoriteMovies={setFavoriteMovies}
        />
      )}
      <Footer />
    </main>
  );
};

export default Home;
