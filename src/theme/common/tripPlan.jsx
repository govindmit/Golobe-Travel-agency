import React from "react";
import Wrapper from "../../assets/wrapper/tripPlan";
import img1 from "../../assets/images/plan-trip/trip-1.jpg";
import img2 from "../../assets/images/plan-trip/trip-2.jpg";
import img3 from "../../assets/images/plan-trip/trip-3.jpg";
import img4 from "../../assets/images/plan-trip/trip-4.jpg";
import img5 from "../../assets/images/plan-trip/trip-5.jpg";
import img6 from "../../assets/images/plan-trip/trip-6.jpg";
import img7 from "../../assets/images/plan-trip/trip-7.jpg";
import img8 from "../../assets/images/plan-trip/trip-8.jpg";
import img9 from "../../assets/images/plan-trip/trip-9.jpg";
import { Box, Grid, Paper, Typography } from "@mui/material";
import ContentTitle from "./contentTitle";

const tripData = [
  {
    id: 1,
    location: "Istanbul",
    country: "Turkey",
    img: img1,
  },
  {
    id: 2,
    location: "Sydney",
    country: "Australia",
    img: img2,
  },
  {
    id: 3,
    location: "Baku",
    country: "Azerbaijan",
    img: img3,
  },
  {
    id: 4,
    location: "Male",
    country: "Maldives",
    img: img4,
  },
  {
    id: 5,
    location: "Paris",
    country: "France",
    img: img5,
  },
  {
    id: 6,
    location: "New York",
    country: "US",
    img: img6,
  },
  {
    id: 7,
    location: "London",
    country: "UK",
    img: img7,
  },
  {
    id: 8,
    location: "Tokyo",
    country: "Japan",
    img: img8,
  },
  {
    id: 9,
    location: "Dubai",
    country: "UAE",
    img: img9,
  },
];

const TripPlan = () => {
  return (
    <Wrapper>
   
      <div className="container">
        <div className="trip-content">
          <div className="trip-text">
            <div className="heading-text">Plan your perfect trip</div>
            <div className="para-text">
              Search Flights & Places Hire to our most Popular destination
            </div>
          </div>
          <div className="btn-container">
            <div className="btn-div">
              <div className="btn">See more places</div>
            </div>
          </div>
        </div>

        <Grid container spacing={3}>
          {tripData.map((trip) => (
            <Grid item key={trip.id} xs={12} sm={6} md={4} lg={4}>
              <Paper className="card">
                <Box display="flex" alignItems="center" spacing={1}>
                  <img src={trip.img} alt={trip.country} className="img" />
                  <Box
                    display="flex"
                    flexDirection="column"
                    className="trip-text-div"
                  >
                    <Typography className="trip-data-text">
                      {trip.location}, {trip.country}
                    </Typography>
                    <Typography className="trip-text-content">
                      Flights . Hotels . Resort
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </Wrapper>
  );
};

export default TripPlan;
