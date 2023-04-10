import React, { useEffect } from "react";

import MovieCard from "./MovieCard";
import { useMovieContext } from "../contexts/MoviesContext";

function MovieList() {
  //  получаем данные из контекста
  const { movies, getMovies } = useMovieContext();
  console.log(movies);
  // стягиваем фильмы  из db.json
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "30px",
      }}>
      {movies.map((item) => {
        // передаем через пропс item return
        return <MovieCard key={item.id} item={item} />;
      })}
    </div>
  );
}

export default MovieList;
