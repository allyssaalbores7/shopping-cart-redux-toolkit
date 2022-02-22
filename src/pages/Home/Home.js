import React from "react";
import "./Home.css";

import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products";

function Home() {
  return (
    <div className="home">
      <Hero />
      <Products />
    </div>
  );
}

export default Home;
