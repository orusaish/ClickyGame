//sets up the reusable Jumbotron component
import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
  <header className="header">
    <h1> Clicky Game!</h1>
    <h2>
      Click on any image to win a point, but you will loose if you click on same
      pic twice. Click all 10 pics correctly and you will win!.
    </h2>
  </header>
);
export default Jumbotron;
