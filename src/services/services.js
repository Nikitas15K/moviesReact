import axios from "axios";

export const getTopRatedMovies = async ({ setMovies }) => {
  try {
    let moviesInIteration = [];
    for (let i = 1; i < 41; i++) {
      const queryURL =
        process.env.REACT_APP_API_BASE_URL +
        "?api_key=" +
        process.env.REACT_APP_TMDB_API_KEY +
        "&page=" +
        i;
      const result = await axios.get(queryURL);
      moviesInIteration = [...moviesInIteration, ...result?.data?.results];
    }
    setMovies([...new Map(moviesInIteration.map((m) => [m.id, m])).values()]);
  } catch (e) {
    console.log(e);
  }
};

export const editIfMovieIsFavorite = (
  id,
  favoriteMovies,
  setFavoriteMovies
) => {
  try {
    if (favoriteMovies?.includes(id)) {
      console.log("i am here");
      let updatedFavorites = favoriteMovies?.filter(
        (movieId) => movieId !== id
      );
      setFavoriteMovies(updatedFavorites);
      if (updatedFavorites?.length > 0) {
        localStorage.setItem("favoriteMovies", updatedFavorites?.toString());
      } else {
        localStorage.removeItem("favoriteMovies");
      }
    } else {
      setFavoriteMovies([...favoriteMovies, id]);
      localStorage.setItem(
        "favoriteMovies",
        [...favoriteMovies, id]?.toString()
      );
    }
  } catch (e) {
    console.log(e);
  }
};

export const updateFavoritesOnLoad = async (setFavoriteMovies) => {
  try {
    let favoritesFromLocalStorage = await localStorage
      .getItem("favoriteMovies")
      ?.split(",")
      ?.map((str) => {
        return parseInt(str);
      });
    favoritesFromLocalStorage?.length > 0 &&
      setFavoriteMovies(favoritesFromLocalStorage);
  } catch (e) {
    console.log(e);
  }
};
