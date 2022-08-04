import tmdb from "../apis/tmdb";

import React, { useEffect, useState } from "react";
import { Box, Typography,Pagination , Stack  } from "@mui/material";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// "./ListMovies.css";
import CardMovie from "../component/CardMovie";

const ListMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        const responseDariTMDB = await tmdb.get(
          "/movie/upcoming"
        );
        setMovies(responseDariTMDB.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataMovies();
  }, []);

  return (
    <Box sx={{ padding: "1em", backgroundColor: "#0f0f0f" }}>
      <Typography
        sx={{
          padding: "1em",
          color: "white",
          backgroundColor: "grey",
          fontWeight: "bold",
          margin: "auto",
          width: "80em",
         }}
      >
        UP COMING MOVIE
      </Typography>
      
      <Box
        component="div"
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          marginBottom: "1em",
          marginTop: '1em',
          width: '100%'
        }}
      >
        {movies.slice(0,5).map((movie) => {
          return <CardMovie movie={movie} />;
        })}

       </Box>
    </Box>
  );
};

export default ListMovies;
