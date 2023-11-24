import React from "react";
import TravelFall from "../../theme/common/travelFall";
import BackPackingCard from "../../theme/common/BackPackingCard";
import Fotter from "../../theme/common/Fotter";
import FlightBanner from "../../theme/flight/banner";
import TripPlan from "../../theme/common/tripPlan";
import Map from "../../theme/flight/map";

const FlightLanding = () => {
  return (
    <>
      <FlightBanner />
      <Map/>
      <TravelFall />
      <BackPackingCard />
      <Fotter />
    </>
  );
};

export default FlightLanding;
