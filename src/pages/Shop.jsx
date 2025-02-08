import React from "react";
import Hero from "../components/Hero";
import Popular from "../components/Popular";
import Offer from "../components/Offer";
import NewCollections from "../components/NewCollections";
import NewsLetter from "../components/NewsLetter";

function Shop() {
  return (
    <div className="space-y-10">
      <Hero />
      <Popular />
      <Offer />
      <NewCollections />
      <NewsLetter />
    </div>
  );
}

export default Shop;
