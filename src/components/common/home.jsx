import React from "react";
import TripPlan from "../../theme/common/tripPlan";
import BackImg from "../../theme/common/backImage";
import Reviews from "../../theme/common/Reviews";
import Card from "../../theme/common/Card";
import Fotter from "../../theme/common/Fotter";

const Home = () => {
  return (
    <div>
      <BackImg />
      <TripPlan />
      <Card />
      <Reviews />
      <Fotter />
    </div>
  );
};

export default Home;
