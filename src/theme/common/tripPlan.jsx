import React from "react";
import img1 from "../../assets/images/plan-trip/trip-1.jpg";
import img2 from "../../assets/images/plan-trip/trip-2.jpg";
import img3 from "../../assets/images/plan-trip/trip-3.jpg";
import img4 from "../../assets/images/plan-trip/trip-4.jpg";
import img5 from "../../assets/images/plan-trip/trip-5.jpg";
import img6 from "../../assets/images/plan-trip/trip-6.jpg";
import img7 from "../../assets/images/plan-trip/trip-7.jpg";
import img8 from "../../assets/images/plan-trip/trip-8.jpg";
import img9 from "../../assets/images/plan-trip/trip-9.jpg";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import ContentTitle from "./contentTitle";
import MiniCard from "./miniCard";
import Wrapper from "../../assets/wrapper/tripPlan";

const tripData = [
  {
    id: 1,
    location: "Istanbul",
    country: "Turkey",
    img: img1,
    text: " Flights . Hotels . Resort",
  },
  {
    id: 2,
    location: "Sydney",
    country: "Australia",
    img: img2,
    text: " Flights . Hotels . Resort",
  },
  {
    id: 3,
    location: "Baku",
    country: "Azerbaijan",
    img: img3,
    text: " Flights . Hotels . Resort",
  },
  {
    id: 4,
    location: "Male",
    country: "Maldives",
    img: img4,
    text: " Flights . Hotels . Resort",
  },
  {
    id: 5,
    location: "Paris",
    country: "France",
    img: img5,
    text: " Flights . Hotels . Resort",
  },
  {
    id: 6,
    location: "New York",
    country: "US",
    img: img6,
    text: " Flights . Hotels . Resort",
  },
  {
    id: 7,
    location: "London",
    country: "UK",
    img: img7,
    text: " Flights . Hotels . Resort",
  },
  {
    id: 8,
    location: "Tokyo",
    country: "Japan",
    img: img8,
    text: " Flights . Hotels . Resort",
  },
  {
    id: 9,
    location: "Dubai",
    country: "UAE",
    img: img9,
    text: " Flights . Hotels . Resort",
  },
];

const TripPlan = () => {
  return (
    <Wrapper>
      <ContentTitle
        title="Plan your perfect trip"
        desc=" Search Flights & Places Hire to our most Popular destination"
        btn="See more places "
      />
      <Container>
        <Grid container spacing={3}>
          {tripData.map((trip) => (
            <Grid item key={trip.id} xs={12} sm={6} md={4} lg={4}>
              <MiniCard {...trip} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default TripPlan;
