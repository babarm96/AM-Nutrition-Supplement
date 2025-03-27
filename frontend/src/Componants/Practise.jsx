import React from "react";
import "./Practise.css";

const CardFlip = ({ front, back }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-face card-front">{front}</div>
        <div className="card-face card-back">{back}</div>
      </div>
    </div>
  );
};

const Practise = () => {
  return (
    <div className="card-container">
      <CardFlip front="Beginner" back="Basic training for beginners." />
      <CardFlip front="Intermediate" back="Some experience needed." />
      <CardFlip front="Advanced" back="Expert-level knowledge." />
    </div>
  );
};

export default Practise;
