import React, { useState } from "react";

import "./Review.css";
const Review = ({ cardInfo }) => {
  //console.log(cardInfo);
  const [hover, setHover] = useState(true);
  const active = () => setHover(!hover);
  return (
    <div className="container">
      <div className="outer" onMouseEnter={active} onMouseLeave={active}>
        <div className="backgroundImgR"></div>
        <div className="shadowR"></div>
        <div className="gradientR">
          <div className={!hover ? "roundBlockR activeR" : "roundBlockR"}></div>
        </div>
        <div className="hoverBlockR">
          <div className={!hover ? "upR moveR" : "upR"}>
            <div className="likeR">
              <span>{cardInfo.spanText}</span>
            </div>
            <div className="descriptionR">
              <span>{cardInfo.hoverText}</span>
            </div>
          </div>
        </div>
        <div className="infoR">
          <h2>{cardInfo.mainText}</h2>
          <div className="btnR">
            <button>{cardInfo.buttonText}</button>
          </div>
          <div className={!hover ? "linkR showR" : "linkR"}>
            <a href="/">{cardInfo.linkText}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
