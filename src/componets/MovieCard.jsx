import * as React from "react";
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

export default function MovieCard({ item }) {
  const { deleteMovies } = useMovieContext();
  const { addMoviesToCart, deleteMoviesFromCart, isAlreadyInCart } =
    useCartContext();
  const { isAdmin } = useAuthContext();
  // console.log(item);
  return (
    <div style={{ display: "flex" }}>
      <Card
        sx={{
          maxWidth: 200,
          height: 360,
          borderRadius: 0,
          background: "transparent",
          color: "white",
          padding: 0,
          margin: 0,
        }}>
        <CardActionArea>
          <Button
            style={{
              padding: 0,
              margin: 0,
            }}>
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
              }}>
              {isAlreadyInCart(item.id) ? (
                <Button
                  onClick={() => deleteMoviesFromCart(item.id)}
                  color="error"
                  title="удалить из корзины">
                  <ShopOutlinedIcon />
                </Button>
              ) : (
                <Button
                  title="добавить в корзину"
                  onClick={() => addMoviesToCart(item)}
                  color="primary">
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
              }}>
              <Box>
                <Button color="error" size="small" title="добавить в избранное">
                  <BookmarkAddIcon />
                </Button>
                {/* {isAdmin() ? (
                <> */}
                <Button
                  onClick={() => deleteMovies(item.id)}
                  color="error"
                  size="small"
                  title="удалить карточку">
                  <DeleteIcon />
                </Button>
                <Button
                  component={Link}
                  to={`/edit/${item.id}`}
                  color="warning"
                  size="small"
                  title="изменить карточку">
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
              }}>
              <Typography
                style={{
                  backgroundColor: "#C21A09",
                  fontSize: "10px",
                }}
                gutterBottom
                variant="h6">
                {item.price}$
              </Typography>
              <Typography
                style={{
                  backgroundColor: "#1560BD",
                  fontSize: "10px",
                }}
                gutterBottom
                variant="h6">
                Бесплатно
              </Typography>
            </Box>
          </Button>
          <CardContent style={{ margin: 0, padding: 0, fontSize: "10px" }}>
            <CardActions
              style={{
                display: "flex",
                flexDirection: "column",
                margin: 0,
                padding: 0,
              }}>
              <Button style={{ margin: 0, padding: 0 }}>
                <div style={{ height: "40spx" }}>
                  <Typography
                    style={{
                      fontSize: "var( --nav-size)",
                      width: "200px",
                      marginTop: "5px",
                      padding: 0,
                      fontSize: "14px",
                    }}
                    gutterBottom
                    variant="h6">
                    {item.name_russian}
                  </Typography>
                </div>
                <Typography variant="body2" color="text.secondary"></Typography>
              </Button>
            </CardActions>
            <CardActions
              style={{
                margin: 0,
                padding: 0,
                display: "flex",
                justifyContent: "center",
              }}></CardActions>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
