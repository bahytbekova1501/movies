import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMovieContext } from "../contexts/MovieContext";
import "../componets/css/movie.css";
import GradeIcon from "@mui/icons-material/Grade";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import BasicModal from "../componets/TrailerModal";

function DetailsPage() {
  const { oneMovie, getOneMovie } = useMovieContext();
  const genres = oneMovie.genres;
  console.log(genres);

  const { id } = useParams();
  useEffect(() => {
    getOneMovie(id);
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${oneMovie.background})`, width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",

          //   flexWrap: "wrap",
        }}>
        <Box
          className="kartinkasknopkami"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // justifyContent: "space-between",
          }}>
          <CardMedia
            sx={{
              marginTop: "80px",
              marginLeft: "20px",
              marginBottom: " 20px",
              borderRadius: " 5px",
              width: "400px",
              height: "550px",
              //   maxWidth: "100%",
              //   maxHeight: "100%",
            }}
            component="img"
            image={oneMovie.poster}></CardMedia>
          <Box className="knopki" sx={{ display: "flex" }}>
            <BasicModal />
            <Button
              sx={{
                backgroundColor: "var(--red-color)",
                marginLeft: "4px",
              }}>
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
          }}>
          <Typography
            sx={{
              fontFamily: "var(--secondary-family)",
              fontSize: "var(--main-size)",
              color: "var(--third-color)",
              marginBottom: "30px",
            }}>{`${oneMovie.name_original} / ${oneMovie.name_russian} [${oneMovie.year}]`}</Typography>
          <Typography
            sx={{
              fontFamily: "var(--main-family)",
              fontSize: "var(--nav-size)",
              // color: "var(--primary-color)",
              marginBottom: "10px",
            }}>
            {`  Рейтинг фильма:
        ${oneMovie.rating}.`}
          </Typography>
          <Typography
            sx={{
              fontFamily: "var(--main-family)",
              fontSize: "var(--nav-size)",
              color: "var(--third-color)",
              marginBottom: "10px",
            }}>
            {`Страна: ${oneMovie.country}.`}
          </Typography>
          <Typography
            sx={{
              fontFamily: "var(--main-family)",
              fontSize: "var(--nav-size)",
              color: "var(--third-color)",
              marginBottom: "10px",
            }}>
            {`Категория: ${oneMovie.type}.`}
          </Typography>
          <Typography
            sx={{
              fontFamily: "var(--main-family)",
              fontSize: "var(--nav-size)",
              color: "var(--third-color)",
            }}>
            {/* {`Жанры: ${genres.map((item) => item.name_ru)}.`} */}
          </Typography>

          <Typography
            sx={{
              fontFamily: "var(--main-family)",
              fontSize: "var(--nav-size)",
              color: "var(--third-color)",
            }}>
            {`Описание: ${oneMovie.description}.`}
          </Typography>
        </Box>
      </Box>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
          marginTop: "70px",
          justifyContent: "center",
        }}>
        <iframe
          src={oneMovie.video}
          width="840"
          height="560"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
          frameborder="0"
          allowfullscreen></iframe>
      </Box>
    </div>
  );
}

export default DetailsPage;
