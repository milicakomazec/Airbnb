import React from "react";
import "./Card.css";

const Card = ({ img, rating, reviewCount, location, title, price }) => {
  return (
    <div className="card">
      <img src={img} alt="Zaferes in swimsuit" className="coverImg"></img>
      <div className="star--container">
        <img
          src="../../media/star.png"
          alt="star icon"
          className="card--star"
        ></img>
        <div>{rating}</div>
        <div style={{ color: "#918E9B" }}>({reviewCount})</div>
        <div style={{ color: "#918E9B" }}>{location}</div>
      </div>

      <div style={{ paddingTop: "4px", paddingBottom: "4px" }}>{title}</div>
      <div>
        <b>From {price}$ </b>/ person
      </div>
    </div>
  );
};

export default Card;
