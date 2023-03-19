import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getTopRatedMovies, updateFavoritesOnLoad } from "./services/services";
import Home from "./screens/Home/Home";
import Favorites from "./screens/Favorites/Favorites";

function App() {
  const [movieData, setMovieData] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getTopMovies = async () => {
    await getTopRatedMovies({ setMovies: setMovieData });
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getTopMovies();
    updateFavoritesOnLoad(setFavoriteMovies);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              movieData={movieData}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              favoriteMovies={favoriteMovies}
              setFavoriteMovies={setFavoriteMovies}
              loading={loading}
            />
          }
        ></Route>
        <Route
          path="/favorites"
          element={
            <Favorites
              movieData={movieData.filter((movie) =>
                favoriteMovies?.includes(movie.id)
              )}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              favoriteMovies={favoriteMovies}
              setFavoriteMovies={setFavoriteMovies}
              loading={loading}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
