import React from "react";
import "./Card.css";

const Card = ({ img, rating, reviewCount, country, title, price }) => {
  return (
    <div className="card">
      <img src={`../../../media/${img}`} alt="Zaferes in swimsuit"></img>
      <div className="star--container">
        <img
          src="../../media/star.png"
          alt="star icon"
          className="card--star"
        ></img>
        <div>{rating}</div>
        <div>({reviewCount})</div>
        <div>{country}</div>
      </div>

      <div>{title}</div>
      <div>
        <b>From {price}$ </b>/ person
      </div>
    </div>
  );
};

export default Card;
