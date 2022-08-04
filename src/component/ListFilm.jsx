import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ListFilm() {
   const [movies, setMovies] = useState([]);

  useEffect(
    () => {
          const fetchDataMovies = async () => {
        try {
             const responseDariTMDB = await axios.get(
           "https://api.themoviedb.org/3/movie/popular?api_key=INSERT_API_KEY_HERE"
          );
         setMovies(responseDariTMDB.data.results);
        } catch (err) {
          console.log(err);
        }
      };
     fetchDataMovies();
    },
    
    []
  );

  return (
    <Box className="boxy">
      <Typography variant="h5">Container ListMovies (Data Real)</Typography>
  
      {movies.map((movie) => {
        return <CardMovie movie={movie} />;
      })}
    </Box>
  );
}
