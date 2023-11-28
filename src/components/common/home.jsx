import React from "react";
import TripPlan from "../../theme/common/tripPlan";
import BackImg from "../../theme/common/backImage";
import Reviews from "../../theme/common/Reviews";
import Card from "../../theme/common/Card";
import Fotter from "../../theme/common/Fotter";
import Testing from "../../testing";

const Home = () => {
  return (
    <div style={{ marginTop: "2rem" }}>
      <BackImg />
      <TripPlan />
      <Card />
      <Reviews />
      <Fotter />
    </div>
    // <Testing />
  );
};

export default Home;
