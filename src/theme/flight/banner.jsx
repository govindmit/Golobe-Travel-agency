import React from "react";
import Banner from "../common/banner";
import img from "../../assets/images/flightImg.jpg";
import BookingCard from "../common/bookingCard";

const FlightBanner = () => {
  return (
    <>
      <Banner img={img} />
      <BookingCard text="where are you  flying?" />
    </>
  );
};

export default FlightBanner;
