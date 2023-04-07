import React from "react";
import VideoUpload from "../componets/VideoUpload";
import videoWakanda from "../videos/IMG_1185 (2).MP4";
import "../componets/css/Pages.css";
import logoMarvel from "../logo/marvelStudios.png";
import Container from "@mui/material/Container";
function HomePage() {
  return (
    <>
      <video
        className="videoWakanda"
        src={videoWakanda}
        autoPlay
        loop
        muted
      ></video>
      <div
        style={{
          width: "400px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
          marginTop: "100px",
        }}
      >
        <img
          style={{ width: "60px", height: "20px" }}
          src={logoMarvel}
          alt=""
        />
        <h3>ЧЕРНАЯ ПАНТЕРА </h3>
        <h1>ВАКАНДА НАВЕКИ </h1>
      </div>
    </>
  );
}

export default HomePage;
