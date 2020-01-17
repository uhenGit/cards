import React, { useState } from "react";

import "./Stock.css";
const Card = ({ cardInfo }) => {
  //console.log(cardInfo);
  const [hover, setHover] = useState(true);
  const active = () => setHover(!hover);
  return (
    <div className="container">
      <div className="outer" onMouseEnter={active} onMouseLeave={active}>
        <div className="backgroundImg"></div>
        <div className="shadow"></div>
        <div className="gradient">
          <div className={!hover ? "roundBlock active" : "roundBlock"}></div>
        </div>
        <div className="hoverBlock">
          <p className={!hover ? "description show" : "description"}>
            {cardInfo.hoverText}
          </p>
        </div>
        <div className="info">
          <h2>{cardInfo.mainText}</h2>
          <div className="btn">
            <button>{cardInfo.buttonText}</button>
            <span>{cardInfo.spanText}</span>
          </div>
          <div className={!hover ? "link show" : "link"}>
            <a href="/">{cardInfo.linkText}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
