import React, { useState } from "react";
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
  const actors = oneMovie.actors;
  console.log(actors);

  const [activeIndex, setActiveIndex] = useState(0);
  // const length = actors.length;
  // console.log(length);
  // console.log(genres);
  // const goToNextSlide = () => {
  //   const index = (activeIndex + 1) % actors.length;
  //   setActiveIndex(index);
  // };

  // const goToPrevSlide = () => {
  //   const index = activeIndex === 0 ? actors.length - 1 : activeIndex - 1;
  //   setActiveIndex(index);
  // };

  const { id } = useParams();
  useEffect(() => {
    getOneMovie(id);
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${oneMovie.background})`, width: "100%" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",

          //   flexWrap: "wrap",
        }}
      >
        <Box
          className="kartinkasknopkami"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // justifyContent: "space-between",
          }}
        >
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
            image={oneMovie.poster}
          ></CardMedia>
          <Box className="knopki" sx={{ display: "flex" }}>
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
          }}
        >
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

      <div class="carousel-container">
        <div
          class="carousel-slide"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          <div class="card-details">
            {/* {oneMovie.actors.map((item, index) => {
              return (
                <div key={index} className="carousel-card">
                  <CardMedia
                    style={{ position: "relative", zIndex: "-1" }}
                    component="img"
                    height="300"
                    image={item.actors_photo}
                    title={item.role}
                  />
                </div>
              );
            })} */}
          </div>
          {/* <button class="prev" onClick={goToPrevSlide}>
            Prev
          </button>
          <button class="next" onClick={goToNextSlide}>
            Next
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
