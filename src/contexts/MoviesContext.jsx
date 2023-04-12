import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, API, LIMIT } from "../utils/consts";
import axios from "axios";
import DetailsPage from "../pages/DetailsPage";

const moviesContext = createContext();

export function useMovieContext() {
  return useContext(moviesContext);
}

const initState = {
  movies: [],
  oneMovie: {},
  pageTotalCount: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.movies:
      return { ...state, movies: action.payload };
    case ACTIONS.oneMovie:
      return { ...state, oneMovie: action.payload };
    case ACTIONS.pageTotalCount: {
      return { ...state, pageTotalCount: action.payload };
    }
    default:
      return state;
  }
}

function MoviesContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  //функция для получения
  async function getMovies() {
    try {
      const res = await axios.get(
        `${API}${window.location.search || "?_limit=" + LIMIT}`
      );
      const totalPages = Math.ceil(res.headers["x-total-count"] / LIMIT);
      //   console.log(data);
      dispatch({
        type: ACTIONS.pageTotalCount,
        payload: totalPages,
      });
      dispatch({
        type: ACTIONS.movies,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getOneMovie(id) {
    try {
      const { data } = await axios.get(`${API}/${id}`);
      dispatch({
        type: ACTIONS.oneMovie,
        payload: data,
      });
    } catch (e) {
      console.log(e);
    }
  }
  //функция для удаления
  async function deleteMovies(id) {
    try {
      await axios.delete(`${API}/${id}`);
      getMovies();
    } catch (e) {
      console.log(e);
    }
  }

  //функция для добавления
  async function addMovies(newMovie) {
    try {
      await axios.post(API, newMovie);
      getMovies();
    } catch (e) {
      console.log(e);
    }
  }

  async function editMovie(id, movieEdit) {
    try {
      await axios.patch(`${API}/${id}`, movieEdit);
      getMovies();
    } catch (e) {
      console.log(e);
    }
  }

  const value = {
    movies: state.movies,
    oneMovie: state.oneMovie,
    pageTotalCount: state.pageTotalCount,
    getMovies,
    getOneMovie,
    addMovies,
    deleteMovies,
    editMovie,
  };
  return (
    <moviesContext.Provider value={value}>{children}</moviesContext.Provider>
  );
}

export default MoviesContext;
