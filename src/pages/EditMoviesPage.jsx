import React, { useEffect, useState } from "react";
import { useMovieContext } from "../contexts/MovieContext";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import logo from "../logo/pngegg (2).png";
import { useNavigate, useParams } from "react-router-dom";

function EditMoviesPage() {
  const { oneMovie, getOneMovie, editMovie } = useMovieContext();
  const { id } = useParams();
  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    name_original: "",
    name_russian: "",
    year: "",
    age_restriction: "",
    description: "",
    trailer: "",
    video: "",
    country: "",
    category: "",
    type: "",
    time_minutes: "",
    poster: "",
    actors: "",
    actors_nik: "",
    actors_photo: "",
    genres: "",
    name_ru: "",
    episodes: "",
    quantity: "",
    episodes_number: "",
    episodes_title: "",
    episodes_url: "",
  });

  useEffect(() => {
    getOneMovie(id);
  }, []);

  useEffect(() => {
    if (oneMovie) {
      setFormValue(oneMovie);
    }
  }, [oneMovie]);

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
      !formValue.age_restriction.trim() ||
      !formValue.description.trim() ||
      !formValue.trailer.trim() ||
      !formValue.country.trim() ||
      !formValue.category.trim() ||
      !formValue.type.trim() ||
      !formValue.time_minutes.trim() ||
      !formValue.poster.trim() ||
      !formValue.actors.trim() ||
      !formValue.actors_nik.trim() ||
      !formValue.actors_photo.trim() ||
      !formValue.genres.trim() ||
      !formValue.name_ru.trim() ||
      !formValue.episodes.trim() ||
      !formValue.episodes_number.trim() ||
      !formValue.episodes_title.trim() ||
      !formValue.episodes_url.trim()
    ) {
      alert("Заполните все поля");
      return;
    }

    editMovie(id, formValue);

    setFormValue({
      name_original: "",
      name_russian: "",
      year: "",
      age_restriction: "",
      description: "",
      trailer: "",
      video: "",
      country: "",
      category: "",
      type: "",
      time_minutes: "",
      poster: "",
      actors: "",
      actors_nik: "",
      actors_photo: "",
      genres: "",
      name_ru: "",
      episodes: "",
      quantity: "",
      episodes_number: "",
      episodes_title: "",
      episodes_url: "",
    });
    navigate(-1);
  }
  return (
    <div>
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
        }}>
        <img
          style={{
            width: "400px",
            height: "200px",
            marginTop: "100px",
            marginLeft: "560px",
          }}
          src={logo}
          alt=""
        />

        <form
          onSubmit={(e) => handleSubmit(e)}
          style={{
            maxWidth: "500px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            color: "while",
            position: "relative",
            marginTop: "-3px",
            background: "white",
          }}>
          <FormControl style={{ color: "black" }} variant="standard" fullWidth>
            <InputLabel
              style={{ color: "black" }}
              id="demo-simple-select-label">
              Категория
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formValue.category}
              label="Category"
              name="category"
              onChange={(e) => handleChange(e)}>
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
          {/* <TextField
            value={formValue.actors}
            onChange={(e) => handleChange(e)}
            name="actors"
            label="Актеры"
            variant="standard"
          />
          <TextField
            value={formValue.actors_nik}
            onChange={(e) => handleChange(e)}
            name="actors_nik"
            label="Оригинальное имя"
            variant="standard"
          />
          <TextField
            value={formValue.actors_photo}
            onChange={(e) => handleChange(e)}
            name="actors_photo"
            label="Фото актера"
            variant="standard"
          />

          <TextField
            value={formValue.episodes}
            onChange={(e) => handleChange(e)}
            name="episodes"
            label="Серии"
            variant="standard"
          />
          <TextField
            value={formValue.quantity}
            onChange={(e) => handleChange(e)}
            name="quantity"
            label="Количество серий"
            variant="standard"
          />
          <TextField
            value={formValue.episodes_number}
            onChange={(e) => handleChange(e)}
            name="episodes_number"
            label="Номер серии"
            variant="standard"
          />
          <TextField
            value={formValue.episodes_title}
            onChange={(e) => handleChange(e)}
            name="episodes_title"
            label="Наименование серии"
            variant="standard"
          />
          <TextField
            value={formValue.episodes_url}
            onChange={(e) => handleChange(e)}
            name="episodes_url"
            label="Ссылка на серию"
            variant="standard"
          /> */}
          <Button
            style={{
              background: "var(--red-color)",
              borderRadius: 0,
            }}
            type="submit"
            variant="contained">
            Add
          </Button>
        </form>
      </div>
    </div>
  );
}

export default EditMoviesPage;
