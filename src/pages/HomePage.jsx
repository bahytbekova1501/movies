import React from "react";
// import video from "../videos/4k.webm";

import logoMarvel from "../logo/marvelStudios.png";
import MovieList from "../componets/MovieList";
import logoAvangers from "../logo/end game.png";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import logo from "../logo/homePicture.jpg";
import CarouselCard from "../componets/CarouselCard";
import "../componets/css/carousel.css";
import "../componets/css/Pages.css";
import { Box } from "@mui/material";
// test
function HomePage() {
  return (
    <>
      <img
        style={{
          maxWidth: "100%",
          position: "relative",
          marginTop: " -65px",
          zIndex: -1,
        }}
        src={logo}
        alt=""
      />

      {/* <video
          style={{
            maxWidth: "100%",
            // position: "absolute",
            marginTop: " -65px",
            zIndex: -1,
          }}
          className="video"
          src="https://rr1---sn-xaj5u-4g0s.googlevideo.com/videoplayback?expire=1681021263&ei=7wQyZK_DILC4mLAPjtewwA0&ip=185.147.212.50&id=o-AGLyeervS5FtJ-0p3HbJH1Wu1fBt3HVgsnccJgZZau4M&itag=308&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C298%2C299%2C302%2C303%2C308%2C315&source=youtube&requiressl=yes&spc=99c5CYKi0ZoW7mmKCiDZMJyg0SiDYdUMnQ0zxcz4ew&vprv=1&mime=video%2Fwebm&ns=n6mR0VlR0vHCFAhWTv9cgX8M&gir=yes&clen=365933239&dur=279.532&lmt=1661592953594831&keepalive=yes&fexp=24007246&beids=24512779&c=WEB&txp=4432434&n=vATjOgMt358dVA&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgUY1npzd5i6gIkYxxLB7DvYq7fk5ZZINC4sPAjT5gc94CIQCuuOaiK-uN-zp5DyS7RdPA3yk-r-xZ6QwVHCKcknK_xQ%3D%3D&redirect_counter=1&rm=sn-25gr676&req_id=819931ac80e9a3ee&cms_redirect=yes&ipbypass=yes&mh=Er&mip=193.34.225.181&mm=31&mn=sn-xaj5u-4g0s&ms=au&mt=1681003038&mv=m&mvi=1&pcm2cms=yes&pl=24&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pcm2cms,pl&lsig=AG3C_xAwRgIhAKwhIVhpWNn_rpFx1Q5tI8jAwTyTw9sMt6juSIvUN7n5AiEAv4OOsrKp0fPC9Dq6UJaYRpgB7w6TACWPELdEQFLGnyg%3D"
          autoPlay
          loop
          muted
        ></video> */}
      {/* <div
          className="logo-div"
          style={{
            maxWidth: "100%",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            marginTop: "-600px",
            zIndex: 15,
          }}
        >
          <img
            className="img-logo marvel-logo"
            style={{
              maxWidth: "100%",
              width: "70px",
              height: "20px",
              marginLeft: "170px",
            }}
            src={logoMarvel}
            alt=""
          />
          <img
            className="img-logo avangers-logo"
            style={{ width: "400px", height: "100px" }}
            src={logoAvangers}
          />

          <Stack direction="row" spacing={2}>
            <Button
              className="button-background"
              style={{
                backgroundColor: "var(--red-color)",
                marginTop: "10px",
                fontFamily: "var(--secondary-family)",
                // position: "absolute",
                marginLeft: "150px",
              }}
              variant="contained"
            >
              СМОТРЕТЬ
            </Button>
          </Stack>
        </div>*/}

      <Box
        className="carousel-home"
        style={{ position: "relative", marginTop: "-250px" }}
      >
        <CarouselCard />
      </Box>
      <div style={{ height: "400px" }}></div>
      <MovieList />
      <div style={{ position: "absolute", marginTop: "100px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rem
        expedita tenetur voluptate, dolor deserunt quam nostrum fugit velit a
        iste aliquam ad nihil eum ipsum aliquid optio, vero eos. Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. Perspiciatis voluptatibus
        aut ab excepturi officia nisi saepe tempora maxime voluptatum alias eos,
        corporis itaque, nemo inventore quia facilis omnis. Iusto, voluptatum.
        Earum quaerat porro blanditiis fuga repellat corrupti, aliquid officia
        tempore cumque necessitatibus magnam aliquam delectus culpa
        reprehenderit dignissimos laudantium mollitia nobis a dolorem eius
        veniam commodi sunt id. Expedita, sit. Reiciendis nostrum dolore,
        asperiores deserunt quod magnam eius? Eum quam, perferendis eaque
        laboriosam dolore soluta iure alias blanditiis porro culpa iste!
        Provident asperiores dolores alias consequatur explicabo earum beatae
        est. Quidem architecto quisquam corrupti animi distinctio nemo tempora
        nesciunt rerum eligendi nam, dolor beatae voluptatibus illum quis autem
        dolorum similique tenetur dignissimos quae minus accusantium pariatur
        quod. Suscipit, dicta impedit? Quisquam, quas, quos repudiandae
        reprehenderit possimus itaque rerum commodi cupiditate ratione harum
        non! Laboriosam aut error reprehenderit totam illo repellat veniam,
        nulla eligendi dolorum mollitia blanditiis possimus enim soluta rem!
        Inventore quis ab nam odio, et necessitatibus consequatur. Totam
        consequuntur voluptatem officiis quia molestiae pariatur nulla nam. Ab
        provident voluptas nulla sapiente aliquam. Rem sunt harum,
        exercitationem quis asperiores eligendi! Aut aspernatur non iusto, eum
        ab voluptatum quisquam illo dicta obcaecati deserunt odio ipsum,
        repudiandae vero maiores delectus placeat dolorem veniam inventore
        accusantium sequi voluptate explicabo suscipit porro a. Ab. Vel id
        possimus sit cumque facilis odit beatae a, sint voluptatum. Quisquam
        omnis libero itaque assumenda a voluptatum nulla deleniti eligendi
        architecto minima perspiciatis ab unde iste illo, distinctio magnam.
        Temporibus minus doloremque explicabo exercitationem nulla nemo, non
        quia iure, aliquid magni est facilis, iusto harum alias inventore! Alias
        ipsa dolore laborum facilis deserunt illo incidunt dicta voluptatibus?
        Velit, a. Non nobis minus provident pariatur sunt odio vitae adipisci ab
        labore modi alias, quos libero inventore tempore cumque! Dolorum ex
        nulla numquam et suscipit ratione veniam vero perspiciatis blanditiis
        quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nulla
        aliquam officia, voluptate mollitia architecto saepe hic, nostrum
        deserunt placeat consequatur blanditiis corporis commodi magni voluptas
        iure ab modi tempore?
      </div>
    </>
  );
}

export default HomePage;
