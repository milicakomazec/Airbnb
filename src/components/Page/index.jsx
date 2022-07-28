import React from "react";
import Hero from "../Hero";
import NavBar from "../NavBar";
import Card from "../Card";
import "./Page.css";

const Page = () => {
  return (
    <div className="page">
      <NavBar />
      <Hero />
      <Card
        img="imgZaferes.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
};

export default Page;
