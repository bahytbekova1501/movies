import React, { useEffect, useState } from "react";

import MovieCard from "./MovieCard";
import { useMovieContext } from "../contexts/MovieContext";
import { SearchParams, useSearchParams } from "react-router-dom";
import { LIMIT } from "../utils/consts";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  TextField,
} from "@mui/material";
import Carousel from "better-react-carousel";
import CarouselCard from "../componets/CarouselCard";
function MovieList() {
  //  получаем данные из контекста
  const { movies, getMovies } = useMovieContext();

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "30px",
      }}
    >
      {movies.map((item) => {
        return <MovieCard key={item.id} item={item} />;
      })}

      <Box sx={{ maxWidth: "max-content", margin: "20px auto" }}></Box>
    </Box>
  );
}

export default MovieList;
