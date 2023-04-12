import React, { useEffect, useState } from "react";

import Carousel from "better-react-carousel";
import { useMovieContext } from "../contexts/MovieContext";
import { CardMedia } from "@mui/material";

function CarouselCard() {
  const [randomMovies, setRandomMovies] = useState([]);
  const { movies } = useMovieContext();
  //   React.useEffect(() => {
  //     getRandomItem(movies);
  //   }, [randomMovies]);
  useEffect(() => {
    setRandomMovies([...movies].sort(() => Math.random() - 0.5));
  }, [movies]);

  return (
    <div>
      {/* {web1200 && ( */}
      <Carousel className="carousel" cols={8} rows={1} gap={1} loop>
        {randomMovies.map((movies) => {
          return (
            <Carousel.Item
              className="carousel-item"
              style={{ maxWidth: "100%" }}
            >
              <div key={movies.id}>
                <CardMedia
                  className="carousel-media"
                  sx={{
                    marginTop: "80px",
                    marginLeft: "20px",
                    marginBottom: " 20px",
                    borderRadius: " 5px",
                    width: "150px",
                    height: "250px",
                    //   maxWidth: "100%",
                    //   maxHeight: "100%",
                  }}
                  component="img"
                  image={movies.poster}
                ></CardMedia>
                {movies.name_russian}
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default CarouselCard;
