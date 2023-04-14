// import React, { useEffect, useState } from "react";

// import Carousel from "better-react-carousel";
// import { useMovieContext } from "../contexts/MovieContext";
// import { CardMedia } from "@mui/material";

// function CarouselCard() {
//   const [randomMovies, setRandomMovies] = useState([]);
//   const { movies } = useMovieContext();
//   //   React.useEffect(() => {
//   //     getRandomItem(movies);
//   //   }, [randomMovies]);
//   useEffect(() => {
//     setRandomMovies([...movies].sort(() => Math.random() - 0.5));
//   }, [movies]);

//   return (
//     <div>
//       {/* {web1200 && ( */}
//       <Carousel className="carousel" cols={8} rows={1} gap={1} loop>
//         {randomMovies.map((movies) => {
//           return (
//             <Carousel.Item
//               className="carousel-item"
//               style={{ maxWidth: "100%" }}
//             >
//               <div key={movies.id}>
//                 <CardMedia
//                   className="carousel-media"
//                   sx={{
//                     marginTop: "80px",
//                     marginLeft: "20px",
//                     marginBottom: " 20px",
//                     borderRadius: " 5px",
//                     width: "150px",
//                     height: "250px",
//                     //   maxWidth: "100%",
//                     //   maxHeight: "100%",
//                   }}
//                   component="img"
//                   image={movies.poster}
//                 ></CardMedia>
//                 {movies.name_russian}
//               </div>
//             </Carousel.Item>
//           );
//         })}
//       </Carousel>
//     </div>
//   );
// }

// export default CarouselCard;

import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import { useMovieContext } from "../contexts/MovieContext";
import { Link } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { useCartContext } from "../contexts/CartContext";
import ShopRoundedIcon from "@mui/icons-material/ShopRounded";
import ShopOutlinedIcon from "@mui/icons-material/ShopOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import "./css/carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SampleNextArrow from "react-slick";
import SamplePrevArrow from "react-slick";
function CarouselCard() {
  const [randomMovies, setRandomMovies] = useState([]);
  const { movies } = useMovieContext();
  const { deleteMovies } = useMovieContext();
  const { addMoviesToCart, deleteMoviesFromCart, isAlreadyInCart } =
    useCartContext();
  const { isAdmin } = useAuthContext();
  useEffect(() => {
    setRandomMovies([...movies].sort(() => Math.random() - 0.5));
  }, [movies]);
  // console.log(movies);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="carousel">
      <Slider x {...settings}>
        {randomMovies.map((item) => {
          return (
            <Box className="card-box">
              <Card
                className="card"
                sx={{
                  maxWidth: 200,
                  height: 300,
                  borderRadius: 0,
                  background: "transparent",
                  color: "white",
                  // padding: 0,
                  margin: "20px",
                }}
              >
                <CardActionArea>
                  <Button
                    style={{
                      padding: 0,
                      // margin: 0,
                    }}
                  >
                    <Box component={Link} to={`/details/${item.id}`}>
                      <CardMedia
                        style={{ position: "relative", zIndex: "-1" }}
                        component="img"
                        height="300"
                        image={item.poster}
                        alt="green iguana"
                      />
                    </Box>
                    {/*  иконки добавления и удаления с корзины */}
                    <Box
                      style={{
                        position: "absolute",
                        marginLeft: "175px",
                        marginTop: "-260px",
                      }}
                    >
                      {isAlreadyInCart(item.id) ? (
                        <Button
                          onClick={() => deleteMoviesFromCart(item.id)}
                          color="error"
                          title="удалить из корзины"
                        >
                          <ShopOutlinedIcon />
                        </Button>
                      ) : (
                        <Button
                          title="добавить в корзину"
                          onClick={() => addMoviesToCart(item)}
                          color="primary"
                        >
                          <ShopRoundedIcon />
                        </Button>
                      )}
                    </Box>
                    {/* иконки добавления и удаления карточки и избранное */}
                    <CardActions
                      style={{
                        margin: 0,
                        padding: 0,
                        display: "flex",
                        flexDirection: "column",
                        position: "absolute",
                        marginTop: "-140px",
                        marginLeft: "175px",
                      }}
                    >
                      <Box>
                        <Button
                          color="error"
                          size="small"
                          title="добавить в избранное"
                        >
                          <BookmarkAddIcon />
                        </Button>
                        {/* {isAdmin() ? (
                <> */}
                        <Button
                          onClick={() => deleteMovies(item.id)}
                          color="error"
                          size="small"
                          title="удалить карточку"
                        >
                          <DeleteIcon />
                        </Button>
                        <Button
                          component={Link}
                          to={`/edit/${item.id}`}
                          color="warning"
                          size="small"
                          title="изменить карточку"
                        >
                          <EditIcon />
                        </Button>
                        {/* </>
              ) : null} */}
                      </Box>
                    </CardActions>

                    {/* платно бесплатно */}
                    <Box
                      style={{
                        width: "70px",
                        height: "20px",
                        position: "absolute",
                        marginTop: "-250px",
                        marginLeft: "-125px",
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        style={{
                          backgroundColor: "#C21A09",
                          fontSize: "10px",
                        }}
                        gutterBottom
                        variant="h6"
                      >
                        {item.price}$
                      </Typography>
                      <Typography
                        style={{
                          backgroundColor: "#1560BD",
                          fontSize: "10px",
                        }}
                        gutterBottom
                        variant="h6"
                      >
                        Бесплатно
                      </Typography>
                    </Box>
                  </Button>
                  <CardContent
                    style={{ margin: 0, padding: 0, fontSize: "10px" }}
                  >
                    <CardActions
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: 0,
                        padding: 0,
                      }}
                    >
                      <Button style={{ margin: 0, padding: 0 }}>
                        <div style={{ height: "40spx" }}>
                          <Typography
                            style={{
                              fontSize: "var( --nav-size)",
                              width: "200px",
                              marginTop: "2px",
                              padding: 0,
                              fontSize: "14px",
                            }}
                            gutterBottom
                            variant="h6"
                          >
                            {item.name_russian}
                          </Typography>
                        </div>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                        ></Typography>
                      </Button>
                    </CardActions>
                    <CardActions
                      style={{
                        margin: 0,
                        padding: 0,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    ></CardActions>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          );
        })}
      </Slider>
    </div>
  );
}

export default CarouselCard;
