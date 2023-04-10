// import React from "react";
// import { useContext } from "react";
// import { createContext } from "react";

// const detailsContext = createContext();
// export function useDetailsContext() {
//   return useContext(detailsContext);
// }
// function getDataFromLS() {
//   let data = JSON.parse(localStorage.getItem("details"));
//   if (!data) {
//     data = {
//       movies: [],
//     };
//   }
//   return data;
// }
// function DetailsContext() {
//   return <div>DetailsContext</div>;
// }

// export default DetailsContext;

{
  genres.map((item) => {
    // передаем через пропс item return
    return (
      <Typography
        sx={{
          fontFamily: "var(--main-family)",
          fontSize: "var(--nav-size)",
          color: "var(--third-color)",
          marginBottom: "10px",
        }}>
        {`Жанры: ${item.name_ru}.`}
      </Typography>
    );
  });
}
<Typography
  sx={{
    fontFamily: "var(--main-family)",
    fontSize: "var(--nav-size)",
    color: "var(--third-color)",
    marginBottom: "10px",
  }}>
  {`Жанры: ${genres}.`}
</Typography>;

// // {
// //   genres.map((genres) => {
// //     // передаем через пропс item return
// //     return (
// //       <Typography
// //         sx={{
// //           fontFamily: "var(--main-family)",
// //           fontSize: "var(--nav-size)",
// //           color: "var(--third-color)",
// //         }}>
// //         {`Жанры: ${genres.name_ru}.`}
// //       </Typography>
// //     );
// //   });
// // }

<div>
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      // backgroundColor: " #678983",
      width: "100%",
      // height: "100%",
      // marginTop: "-60px",
    }}>
    <Box
      sx={{
        display: "flex",
        //   width: "800px",
        //   marginLeft: "20px",
        // flexDirection: "row",
        // justifyContent: "center",
        // alignItems: "center",
        //   backgroundColor: "var(--secondary-color)",
        //   backgroundColor: " #678983",
        marginBottom: "300px",
        //   marginTop: "200px",
      }}>
      <Box
        className="contain"
        sx={{
          display: "flex",
          //   width: "800px",
          //   marginLeft: "300px",
          //   flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor: "var(--secondary-color)",
          marginBottom: "300px",
          //   marginTop: "200px",
        }}>
        <Box
          sx={{
            display: "flex",
            //   flexDirection: "row",
            // justifyContent: "space-between",
            alignItems: "center",
            //   backgroundColor: "#000000",
          }}>
          <CardMedia
            sx={{
              marginTop: "80px",
              marginLeft: "20px",
              marginBottom: " 20px",
              borderRadius: " 5px",
              width: "400px",
              height: "550px",
            }}
            component="img"
            image={oneMovie.poster}></CardMedia>
          <Box className="btn-trailer" sx={{ display: "flex" }}>
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
        <Box>
          <CardContent>
            <Box className="titles" sx={{}}>
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
            </Box>{" "}
          </CardContent>
        </Box>{" "}
      </Box>

      {/* <iframe src="https://vk.com/video_ext.php?oid=121917368&id=456239943&hash=eb16601e07f64efb&hd=1" width="640" height="360" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe> */}
    </Box>{" "}
  </div>
  <iframe
    style={{ marginLeft: "60px", marginTop: "40px" }}
    src={oneMovie.video}
    width="640"
    height="360"
    allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
    frameborder="0"
    allowfullscreen></iframe>
</div>;
