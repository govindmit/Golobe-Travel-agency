import { Button, Container, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import Wrapper from "../../../assets/wrapper/locationwrapper";
import Map from "./Map";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WifiIcon from "@mui/icons-material/Wifi";
import SpaIcon from "@mui/icons-material/Spa";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import PoolIcon from "@mui/icons-material/Pool";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import WineBarIcon from "@mui/icons-material/WineBar";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import ReviewsSection from "./ReviewsSection";

const MyLocation = () => {
  const [showMore, setShowMore] = useState(false);

  const fitnessCenterAmenities = Array(24).fill({
    icon: <WifiIcon className="icon2" />,
    text: "Free Wi-Fi",
  });

  const amenities = [...fitnessCenterAmenities];

  const handleToggle = () => {
    setShowMore(!showMore);
  };
  return (
    <Wrapper>
      <Container className="container">
        <Box className="box">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography className="text">Location/Map</Typography>
            <Button className="btn">View on google maps</Button>
          </div>
          <div>
            <Map />
          </div>
          <div style={{ display: "flex", marginTop: "5px" }}>
            <LocationOnIcon className="icon" />
            <Typography
              style={{
                fontWeight: 300,
                fontSize: "14px",
                fontFamily: "system-ui",
              }}
            >
              Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
            </Typography>
          </div>
        </Box>
        <Box style={{ marginTop: "4rem", borderTop: "2px solid lightgrey" }}>
          <div style={{ marginTop: "4rem" }}>
            <Typography className="text">Amenities</Typography>
          </div>
          <Box className="amenities">
            <div>
              <ul>
                <li>
                  <PoolIcon className="icon2" />
                  Outdoor Pool
                </li>
                <li>
                  {" "}
                  <PoolIcon className="icon2" />
                  Indoor Pool
                </li>
                <li>
                  <SpaIcon className="icon2" />
                  Spa and wellness center
                </li>
                <li>
                  <RestaurantIcon className="icon2" />
                  Restaurant
                </li>
                <li>
                  <RoomServiceIcon className="icon2" />
                  Room service
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <FitnessCenterIcon className="icon2" />
                  Fitness center
                </li>
                <li>
                  <WineBarIcon className="icon2" />
                  Bar/Lounge
                </li>
                <li>
                  <WifiIcon className="icon2" />
                  Free Wi-Fi
                </li>
                <li>
                  <FreeBreakfastIcon className="icon2" />
                  Tea/coffee machine
                </li>
                {!showMore && (
                  <li style={{ color: "#FF8682" }} onClick={handleToggle}>
                    +24 more
                  </li>
                )}
                {showMore &&
                  amenities.map((amenity, index) => (
                    <li key={index} onClick={handleToggle}>
                      {amenity.icon}
                      {amenity.text}
                    </li>
                  ))}
              </ul>
            </div>
          </Box>
        </Box>
      </Container>
      <ReviewsSection />
    </Wrapper>
  );
};
export default MyLocation;
