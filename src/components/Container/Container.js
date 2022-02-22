import React from "react";
import "./Container.css";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Container({ children }) {
  return (
    <main className="container">
      <Navbar />
      <div className="container__children">{children}</div>
      <Footer />
    </main>
  );
}

export default Container;
