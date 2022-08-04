import React from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Rating,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const CardMovie = (props) => {
  
  return (
        
    <Card className="boxy" sx={{ margin: '5px' }} >
      
        <Box className="boxy" >
          <CardMedia
            component="img"
            image={props.movie.thumbnail}
            alt={props.movie.title}
          ></CardMedia>
          <CardContent>
            <Typography component="div" variant="body1">
              {props.movie.title}
            </Typography> <br />
                       
            <Typography variant="body2">
              Source : {props.movie.link} 
            </Typography>

            <Typography
              Release date={props.movie.pubDate}
              readOnly
            />
          </CardContent>
        </Box>
        
    </Card>
   
  );
};

export default CardMovie;
