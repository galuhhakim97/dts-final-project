import tmdb from "../apis/tmdb";

import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Rating,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CardMovie from "../component/CardMovie";

const DetailMovie = () => {
  

  const [movies, setMovies] = useState([]);
  let params = useParams();

  useEffect(() => {
    const MovieID = params.MovieID;

    const fetchDataMovies = async () => {
      try {
        const responseDariTMDB = await tmdb.get(
          `/terbaru`
        );
        setMovies(responseDariTMDB.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataMovies();
  }, []);

  return (
    <Box sx={{ padding: "1em", backgroundColor: "black" }}>
      <Typography
        sx={{
          padding: "1em",
          color: "white",
          backgroundColor: "black",
          fontWeight: "bold",
          margin: "auto",
          width: "114em",
          }}
      >
        Berita DETAIL
      </Typography>
      <Card className="boxy" sx={{ margin: "5px" , padding: '2em'}}>
        <Box className="boxy" sx={{ width: "100px", margin:'auto' }}>
          <CardMedia
            component="img"
            alt={movies.title}
          ></CardMedia>
        </Box>

    <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" , margin: 'auto', width: '55em'}}>
          <Box className="boxy" sx={{ width: "20em" }}>
            <CardMedia
              component="img"
              image={movies.thumbnail}
              alt={movies.title}
            ></CardMedia>
          </Box>

          <Box className="boxy" sx={{ width: "100%", textAlign: "left", marginLeft: '-5em' }}>
            <Typography variant="h3" sx={{ textAlign: "center" }}>
              {movies.title}
            </Typography>
            <br />
            <Typography>Description : <br /> {movies.description}</Typography>
            
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default DetailMovie;
