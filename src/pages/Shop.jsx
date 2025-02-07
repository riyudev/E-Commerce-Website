import React from "react";
import Hero from "../components/Hero";
import Popular from "../components/Popular";
import Offer from "../components/Offer";

function Shop() {
  return (
    <div className="space-y-10">
      <Hero />
      <Popular />
      <Offer />
    </div>
  );
}

export default Shop;
