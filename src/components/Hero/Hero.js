import React from "react";
import "./Hero.css";

import Button from "@mui/material/Button";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__container--texts">
          <h2>Affordable grocery supply</h2>
          <h1>Lorem ipsum dolor sit amet</h1>
          <h3>
            Our mission is to support the backbone of the economy by providing
            them with world-class customer service, and affordable grocery
            supplies - delivered right at their doorstep!
          </h3>
          <div className="buttons">
            <Button
              href="#products"
              variant="contained"
              disableElevation
              className="contained"
            >
              Shop now
            </Button>
            <Button
              href="#products"
              variant="outlined"
              disableElevation
              className="outlined"
            >
              Partner with us
            </Button>
          </div>
        </div>
        <div className="hero__container--image">
          <img
            className="w-full object-cover h-full lg:rounded-lg md-rounded-lg"
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvY2VyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
