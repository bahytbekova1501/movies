import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import React, { useState } from "react";
import { useMovieContext } from "../contexts/MovieContext";

export default function AddMoviesPage() {
  const { addMovies } = useMovieContext();
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
    time: "",
    time_minutes: "",
    poster: "",
    actors: [],
    genres: [],
    episodes: [],
  });

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
      !formValue.time.trim() ||
      !formValue.time_minutes.trim() ||
      !formValue.poster.trim() ||
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

    addMovies(formValue, actor, genres, episodes);
    // console.log(formValue);

    setActor(newActor);
    setGenres(newGenres);
    setEpisodes(newEpisodes);
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
    <div
      style={{
        maxWidth: "100%",
        height: "1200px",
        minWidth: "600px",

        //   position: "relative",
        marginTop: "-60px",
        background: "-webkit-radial-gradient(#000000, #551c06)",
        background: "radial-gradient(#621f04,#000000)",
        //   overflow: " hidden",
      }}
    >
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          color: "while",
          position: "relative",
          marginTop: "100px",
          // background: "white",
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
              label="Время "
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
                    marginTop: "3px",
                  }}
                >
                  Добавить актеров :
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
                  Добавить актеров :
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
                  Добавить серии:
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
          </div>
        </div>
        <Button
          style={{
            background: "var(--red-color)",
            borderRadius: 0,
          }}
          type="submit"
          variant="contained"
          title="добавить  карточку "
          onClick={(e) =>
            setFormValue({
              ...formValue,
              actors: [...formValue.actors, actor],
              genres: [...formValue.genres, genres],
              episodes: [...formValue.episodes, episodes],
            })
          }
        >
          Добавить
        </Button>
      </form>
    </div>
  );
}
