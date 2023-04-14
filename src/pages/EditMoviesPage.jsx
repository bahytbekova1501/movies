import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import GradeIcon from "@mui/icons-material/Grade";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import React, { useEffect, useState } from "react";
import { useMovieContext } from "../contexts/MovieContext";
import { useNavigate, useParams } from "react-router";
import BasicModal from "../componets/TrailerModal";
import { func } from "prop-types";
export default function AddMoviesPage() {
  const { addMovies } = useMovieContext();
  const { movies, getMovies } = useMovieContext();
  const { oneMovie, getOneMovie, editMovie } = useMovieContext();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    getOneMovie(id);
  }, []);
  //общий стэйт
  const [formValue, setFormValue] = useState({
    name_original: "",
    name_russian: "",
    year: "",
    price: "",
    age_restriction: "",
    description: "",
    trailer: "",
    video: "",
    country: "",
    category: "",
    time_minutes: "",
    poster: "",
    actors: [],
    genres: [],
    episodes: [],
  });
  useEffect(() => {
    getOneMovie(id);
  }, []);

  useEffect(() => {
    if (oneMovie) {
      setFormValue(oneMovie);
    }
  }, [oneMovie]);

  console.log(formValue);
  // стэйт для актеров
  const [actor, setActor] = useState([]);
  const forActor = (newActor) => {
    setActor((prev) => [...prev, newActor]);
  };

  const newActor = {
    role: "",
    actors_nik: "",
    actors_photo: "",
  };

  const [genres, setGenres] = useState([]);
  const forGenres = (newGenres) => {
    setActor((prev) => [...prev, newGenres]);
  };

  const newGenres = {
    name_ru: "",
  };
  const [episodes, setEpisodes] = useState([]);
  const forEpisodes = (newEpisodes) => {
    setActor((prev) => [...prev, newEpisodes]);
  };

  const newEpisodes = {
    quantity: "",
    episodes_number: "",
    episodes_url: "",
    episodes_title: "",
  };

  function handleChange(e) {
    const obj = {
      ...formValue,
      [e.target.name]: e.target.value,
    };
    setFormValue(obj);
  }

  function handleSubmitToAdd(e) {
    e.preventDefault();
    if (
      !actor.role.trim() ||
      !actor.actors_nik.trim() ||
      !actor.actors_photo.trim() ||
      !genres.name_ru.trim() ||
      !episodes.episodes_number.trim() ||
      !episodes.episodes_title.trim()
    ) {
      alert("Заполните все поля");
      return;
    }

    addMovies(id, formValue, genres, actor, episodes);
    // console.log(formValue);

    setActor(newActor);
    setGenres(newGenres);
    setEpisodes(newEpisodes);
    // navigate(-1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !formValue.name_original.trim() ||
      !formValue.name_russian.trim() ||
      !formValue.year.trim() ||
      !formValue.price.trim() ||
      !formValue.age_restriction.trim() ||
      !formValue.description.trim() ||
      !formValue.trailer.trim() ||
      !formValue.video.trim() ||
      !formValue.country.trim() ||
      !formValue.category.trim() ||
      !formValue.time_minutes.trim() ||
      !formValue.poster.trim()
    ) {
      alert("Заполните все поля");
      return;
    }
    editMovie(id, formValue);

    // console.log(formValue);

    setActor(newActor);
    setGenres(newGenres);
    setEpisodes(newEpisodes);
    // navigate(-1);
  }

  function clearInput(e) {
    setFormValue({
      name_original: "",
      name_russian: "",
      year: "",
      price: "",
      age_restriction: "",
      description: "",
      trailer: "",
      video: "",
      country: "",
      category: "",
      time: "",
      time_minutes: "",
      poster: "",
      actors: "",
      genres: "",
      episodes: "",
    });
  }
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${oneMovie.background})`,
          width: "100%",
        }}
      >
        <Box
          // style={{ maxWidth: "100%" }}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            //   flexWrap: "wrap",
          }}
        >
          {/* <Box
          style={{ maxWidth: "100%" }}
          className="kartinkasknopkami"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // justifyContent: "space-between",
          }}
        > */}
          <Box
            style={{
              marginTop: "20px",
              marginLeft: "20px",
              marginBottom: " 20px",
              borderRadius: " 5px",
              width: "400px",
            }}
          >
            <CardMedia component="img" image={oneMovie.poster}></CardMedia>
            <Box
              style={{ maxWidth: "100%", marginTop: "10px" }}
              className="knopki"
              sx={{ display: "flex" }}
            >
              <BasicModal />
              <Button
                sx={{
                  backgroundColor: "var(--red-color)",
                  marginLeft: "4px",
                }}
              >
                <GradeIcon sx={{ color: "var(--red-color)" }} />
              </Button>
            </Box>
          </Box>

          <Box
            className="opisanieivsetakoe"
            sx={{
              display: "flex",
              flexDirection: "column",
              // alignItems: "center",
              marginLeft: "20px",
              width: "900px",
              maxHeight: "700px",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: "var(--secondary-family)",
                  fontSize: "var(--main-size)",
                  color: "var(--third-color)",
                  marginBottom: "30px",
                }}
              >{`${oneMovie.name_original} / ${oneMovie.name_russian} [${oneMovie.year}]`}</Typography>
              <Typography
                sx={{
                  fontFamily: "var(--main-family)",
                  fontSize: "var(--nav-size)",
                  // color: "var(--primary-color)",
                  marginBottom: "10px",
                }}
              >
                {`  Рейтинг фильма:
        ${oneMovie.rating}.`}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "var(--main-family)",
                  fontSize: "var(--nav-size)",
                  color: "var(--third-color)",
                  marginBottom: "10px",
                }}
              >
                {`Страна: ${oneMovie.country}.`}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "var(--main-family)",
                  fontSize: "var(--nav-size)",
                  color: "var(--third-color)",
                  marginBottom: "10px",
                }}
              >
                {`Категория: ${oneMovie.type}.`}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "var(--main-family)",
                  fontSize: "var(--nav-size)",
                  color: "var(--third-color)",
                }}
              >
                {/* {`Жанры: ${genres.map((item) => item.name_ru)}.`} */}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "var(--main-family)",
                  fontSize: "var(--nav-size)",
                  color: "var(--third-color)",
                }}
              >
                {`Описание: ${oneMovie.description}.`}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box style={{ height: "300px" }}></Box>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
            marginTop: "70px",
            justifyContent: "center",
          }}
        >
          <iframe
            src={oneMovie.video}
            width="840"
            height="560"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </Box>
        {/* <CarouselCard /> */}
        {/* <Box>
        <Slider {...settings}>
          <>
            
              {actors.map((item) => {
                // console.log(item);
                return (
                  <div>
                    <CardMedia
                      className="card-media"
                      style={{ position: "relative", zIndex: "-1" }}
                      component="img"
                      height="300"
                      image={item.actors_photo}
                    />
                    <Typography
                      className="card-title-name"
                      style={{
                        fontSize: "var( --nav-size)",
                        width: "200px",
                        marginTop: "5px",
                        padding: 0,
                        fontSize: "14px",
                        textAlign: "center" 
                      }}
                      gutterBottom
                      variant="h6"
                    >
                      {item.actors_nik}
                    </Typography>
                  </div>
                );
              })}
               <div>{oneMovie.actors.actors_photo}</div> 
              
            
          </div>
        </Slider>
      </Box> */}
      </div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          color: "while",
          position: "relative",
          marginTop: "3px",
          background: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            color: "while",
            position: "relative",
            // marginTop: "-3px",
            background: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "250px",
            }}
          >
            <FormControl
              style={{ color: "black" }}
              variant="standard"
              fullWidth
            >
              <InputLabel
                style={{ color: "black" }}
                id="demo-simple-select-label"
              >
                Категория
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formValue.category}
                label="Category"
                name="category"
                onChange={(e) => handleChange(e)}
              >
                <MenuItem style={{ color: "black" }} value={"movie"}>
                  Фильм
                </MenuItem>
                <MenuItem style={{ color: "black" }} value={"cartoons"}>
                  Мультфильм
                </MenuItem>
                <MenuItem style={{ color: "black" }} value={"anime"}>
                  Аниме
                </MenuItem>
                <MenuItem style={{ color: "black" }} value={"series"}>
                  Сериал
                </MenuItem>
              </Select>
            </FormControl>
            <TextField
              value={formValue.name_russian}
              onChange={(e) => handleChange(e)}
              name="name_russian"
              label="Наименование на русском"
              variant="standard"
            />
            <TextField
              value={formValue.name_original}
              onChange={(e) => handleChange(e)}
              name="name_original"
              label="Оригинальное наименование"
              variant="standard"
            />
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={4}
              variant="standard"
              value={formValue.description}
              onChange={(e) => handleChange(e)}
              name="description"
              label="Описание"
            />
            <TextField
              value={formValue.year}
              onChange={(e) => handleChange(e)}
              name="year"
              label="Год выпуска"
              variant="standard"
            />
            <TextField
              value={formValue.price}
              onChange={(e) => handleChange(e)}
              name="price"
              label="Прайс"
              variant="standard"
            />
            <TextField
              value={formValue.country}
              onChange={(e) => handleChange(e)}
              name="country"
              label="Страна"
              variant="standard"
            />
            <TextField
              value={formValue.trailer}
              onChange={(e) => handleChange(e)}
              name="trailer"
              label="Трейлер"
              variant="standard"
            />
            <TextField
              value={formValue.video}
              onChange={(e) => handleChange(e)}
              name="video"
              label="Видео"
              variant="standard"
            />
            <TextField
              value={formValue.time}
              onChange={(e) => handleChange(e)}
              name="time"
              label="Время"
              variant="standard"
            />
            <TextField
              value={formValue.time_minutes}
              onChange={(e) => handleChange(e)}
              name="time_minutes"
              label="Время в минутах"
              variant="standard"
            />
            <TextField
              value={formValue.age_restriction}
              onChange={(e) => handleChange(e)}
              name="age_restriction"
              label="Ограничения по вазрасту"
              variant="standard"
            />
            <TextField
              value={formValue.poster}
              onChange={(e) => handleChange(e)}
              name="poster"
              label="Постер"
              variant="standard"
            />
            <TextField
              value={formValue.quantity}
              onChange={(e) => handleChange(e)}
              name="quantity"
              label="Количество серий"
              variant="standard"
            />
            <Button onClick={(e) => clearInput(e)} style={{ color: "red" }}>
              <HighlightOffIcon />
            </Button>
            <Button
              style={{
                background: "var(--red-color)",
              }}
              type="submit"
              variant="contained"
              title="Изменить карточку "
              onSubmit={(e) => handleSubmit(e)}
            >
              Изменить
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "250px",
            }}
          >
            <div>
              <Box
                style={{
                  // background: "var(--red-color)",
                  marginTop: "2px",
                }}
              >
                <h3
                  style={{
                    color: "var(--red-color)",
                    height: "30px",
                    textAlign: "center",
                  }}
                >
                  Добавить жанр :
                </h3>
              </Box>
              <TextField
                value={genres.name_ru}
                onChange={(e) =>
                  setGenres({ ...genres, name_ru: e.target.value })
                }
                name="ganres"
                label="жанр"
                variant="standard"
              />
            </div>
            <div>
              <Box
                style={
                  {
                    // background: "var(--red-color)",
                  }
                }
              >
                <h3
                  style={{
                    color: "var(--red-color)",
                    height: "30px",
                    textAlign: "center",
                    marginTop: "50px",
                  }}
                >
                  Добавить актера:
                </h3>
              </Box>
              {/* актеры  */}

              <TextField
                value={actor.role}
                onChange={(e) => setActor({ ...actor, role: e.target.value })}
                name="role"
                label="Роль"
                variant="standard"
              />
              <TextField
                value={actor.actors_nik}
                onChange={(e) =>
                  setActor({ ...actor, actors_nik: e.target.value })
                }
                name="actors_nik"
                label="Оригинальное имя"
                variant="standard"
              />
              <TextField
                value={actor.actors_photo}
                onChange={(e) =>
                  setActor({ ...actor, actors_photo: e.target.value })
                }
                name="actors_photo"
                label="Ссылка на фото актера"
                variant="standard"
              />
              {/* <Button
                onSubmit={(e) => handleSubmitFromActors(e)}
                type="submit"
                title="добавить"
                style={{ backgroundColor: "red" }}
              >
                <AddIcon />
              </Button>
               */}
            </div>
            {/* серии */}
            <div>
              <Box
                style={
                  {
                    // background: "var(--red-color)",
                  }
                }
              >
                <h3
                  style={{
                    color: "var(--red-color)",
                    height: "30px",
                    textAlign: "center",
                    marginTop: "50px",
                  }}
                >
                  Добавить серию:
                </h3>
              </Box>

              <TextField
                value={episodes.episodes_number}
                onChange={(e) =>
                  setEpisodes({ ...episodes, episodes_number: e.target.value })
                }
                name="episodes_number"
                label="Номер серии"
                variant="standard"
              />
              <TextField
                value={episodes.episodes_title}
                onChange={(e) =>
                  setEpisodes({ ...episodes, episodes_title: e.target.value })
                }
                name="episodes_title"
                label="Наименование серии"
                variant="standard"
              />
              <TextField
                value={episodes.episodes_url}
                onChange={(e) =>
                  setEpisodes({ ...episodes, episodes_url: e.target.value })
                }
                name="episodes_url"
                label="Ссылка на серию"
                variant="standard"
              />
              {/* <Button title="добавить еще" style={{ backgroundColor: "red" }}>
                  <AddIcon />
                </Button> */}
            </div>
            <Button
              title="добавить "
              variant="contained"
              style={{ backgroundColor: "var(--red-color)", marginTop: "10px" }}
              onClick={(e) =>
                setFormValue({
                  ...formValue,
                  actors: [...formValue.actors, actor],
                  genres: [...formValue.genres, genres],
                  episodes: [...formValue.episodes, episodes],
                })
              }
            >
              добавить
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
