import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import PoolIcon from "@mui/icons-material/Pool";
import SpaIcon from "@mui/icons-material/Spa";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import WifiIcon from "@mui/icons-material/Wifi";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import Wrapper from "../../../assets/wrapper/AmenitiesWrapper";

const Amenities = () => {
  const [showMore, setShowMore] = useState(false);

  const amenities = [
    { icon: <PoolIcon className="icon2" />, text: "Outdoor Pool" },
    { icon: <PoolIcon className="icon2" />, text: "Indoor Pool" },
    { icon: <SpaIcon className="icon2" />, text: "Spa" },
    { icon: <RestaurantIcon className="icon2" />, text: "Restaurant" },
    { icon: <RoomServiceIcon className="icon2" />, text: "Room service" },
    { icon: <FitnessCenterIcon className="icon2" />, text: "Fitness center" },
    { icon: <WifiIcon className="icon2" />, text: "Free Wi-Fi" },
    { icon: <FreeBreakfastIcon className="icon2" />, text: "Tea/coffee machine" },
    { icon: <PoolIcon className="icon2" />, text: "Outdoor Pool" },
    { icon: <PoolIcon className="icon2" />, text: "Indoor Pool" },
    { icon: <SpaIcon className="icon2" />, text: "Spa" },
    { icon: <RestaurantIcon className="icon2" />, text: "Restaurant" },
    { icon: <RoomServiceIcon className="icon2" />, text: "Room service" },
    { icon: <FitnessCenterIcon className="icon2" />, text: "Fitness center" },
    { icon: <WifiIcon className="icon2" />, text: "Free Wi-Fi" },
    { icon: <FreeBreakfastIcon className="icon2" />, text: "Tea/coffee machine" },
    { icon: <PoolIcon className="icon2" />, text: "Outdoor Pool" },
    { icon: <PoolIcon className="icon2" />, text: "Indoor Pool" },
    { icon: <SpaIcon className="icon2" />, text: "Spa" },
    { icon: <RestaurantIcon className="icon2" />, text: "Restaurant" },
    { icon: <RoomServiceIcon className="icon2" />, text: "Room service" },
  { icon: <FreeBreakfastIcon className="icon2" />, text: "Tea/coffee machine" },
    
    // Add more amenities as needed
  ];
  const initialDisplayCount = 9;

  const initialDisplay = amenities.slice(0, initialDisplayCount);


  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <Wrapper>
    <Box className="amenities-container">
        <div className="amenities-grid">
          {showMore
            ? amenities.map((amenity, index) => (
                <div key={index} className="amenity-item">
                  {amenity.icon}
                  <Typography className="amenity-text">{amenity.text}</Typography>
                </div>
              ))
            : initialDisplay.map((amenity, index) => (
                <div key={index} className="amenity-item">
                  {amenity.icon}
                  <Typography className="amenity-text">{amenity.text}</Typography>
                </div>
              ))}
        </div>
        {!showMore && (
          <Typography className="show-more" onClick={handleToggle}>
            +{amenities.length - initialDisplayCount} more
          </Typography>
        )}
      </Box>

    </Wrapper>
  );
};

export default Amenities;
