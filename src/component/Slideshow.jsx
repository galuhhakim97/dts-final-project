import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Slideshow() {
  return (
    <div>
      <Carousel fade style={{ }}>
        <Carousel.Item  >
          <img
            style={{
              objectFit: "cover",
              objectPosition: "center",
              maxHeight: "25em",
            }}
            className="d-block w-100"
            src="1.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item  >
          <img
            style={{
              objectFit: "cover",
              objectPosition: "center",
              maxHeight: "25em",
              
            }}
            className="d-block w-100"
            src="2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item  >
          <img
            style={{
              objectFit: "cover",
              objectPosition: "center",
              maxHeight: "25em",
            }}
            className="d-block w-100"
            src="3.jpg"
            alt="third slide"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
