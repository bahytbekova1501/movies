import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useMovieContext } from "../contexts/MoviesContext";
import { Link } from "react-router-dom";

export default function MovieCard({ item }) {
  const { deleteMovies } = useMovieContext();
  console.log(item);
  return (
    <div style={{ display: "flex" }}>
      <Card
        component={Link}
        to={`/details/${item.id}`}
        sx={{
          maxWidth: 200,
          height: 400,
          borderRadius: 0,
          background: "transparent",
          color: "white",
          padding: 0,
          margin: 0,
        }}>
        <CardActionArea>
          <Button style={{ padding: 0, margin: 0 }}>
            <CardMedia
              style={{}}
              component="img"
              height="300"
              image={item.poster}
              alt="green iguana"
            />
          </Button>
          <CardContent style={{ margin: 0, padding: 0 }}>
            <CardActions
              style={{
                display: "flex",
                flexDirection: "column",
                margin: 0,
                padding: 0,
              }}>
              <Button style={{ margin: 0, padding: 0 }}>
                <Typography
                  style={{
                    fontSize: "var( --nav-size)",
                    width: "200px",
                    margin: 0,
                    padding: 0,
                  }}
                  gutterBottom
                  variant="h6">
                  {item.name_russian}
                </Typography>
                <Typography variant="body2" color="text.secondary"></Typography>
              </Button>
            </CardActions>
            <CardActions
              style={{
                margin: 0,
                padding: 0,
                display: "flex",
                justifyContent: "center",
              }}>
              <Button
                onClick={() => deleteMovies(item.id)}
                color="error"
                size="small">
                Удалить
              </Button>
              <Button
                component={Link}
                to={`/edit/${item.id}`}
                color="warning"
                size="small">
                Изменить
              </Button>
            </CardActions>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
