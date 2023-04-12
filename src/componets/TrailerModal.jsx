import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useMovieContext } from "../contexts/MovieContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const { oneMovie, getOneMovie } = useMovieContext();
  const { id } = useParams();
  useEffect(() => {
    getOneMovie(id);
  }, []);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{
          display: "flex",
          // alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          backgroundColor: "#fca311",
          width: "120px",
        }}
        className="movie-btn"
        variant="contained"
      >
        <PlayArrowIcon />
        трейлер
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <iframe
            width="560"
            height="315"
            src={oneMovie.trailer}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Box>
      </Modal>
    </div>
  );
}
