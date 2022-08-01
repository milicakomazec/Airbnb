import React from "react";
import Hero from "../Hero";
import NavBar from "../NavBar";
import Card from "../Card";
import data from "../../data";
import "./Page.css";

// console.log(data);

const Page = () => {
  return (
    <div className="page">
      <NavBar />
      <Hero />
      <div className="card--container">
        {data.map((card) => {
          return (
            <Card
              key={card.id}
              // img={card.img}
              // rating={card.stats.rating}
              // reviewCount={card.stats.reviewCount}
              // location={card.location}
              // title={card.title}
              // price={card.price}
              // openSpots={card.openSpots}
              {...card}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Page;
