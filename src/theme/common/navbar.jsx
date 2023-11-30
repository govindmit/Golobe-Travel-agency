import React, { useState } from "react";
import { IoAirplaneSharp, IoBed } from "react-icons/io5";
import Group from "../../assets/images/Group.svg";
import { AppBar, Typography, Toolbar, Button, Box } from "@mui/material";
import Wrapper from "../../assets/wrapper/Reviews";

import { useNavigate } from "react-router-dom";

const Navbar = ({ isHomePage}) => {
  const navigate = useNavigate()

  const [flight, setFlight] = useState(false);
  const [hotel, setHotel] = useState(false);

  const navbarStyles = {
    background: isHomePage ? "transparent" : "white",
    boxShadow: 0,

    color: isHomePage ? "white" : "black",
    marginTop: isHomePage && "2rem",
    marginLeft: isHomePage ? "2rem" : "3rem",
  };

  const iconStyles = {
    color: isHomePage ? "white" : "black",
  };

 

  const mediaQueryStyles = {
    "@media (minWidth:500px)": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: "2rem",

      "& .navbar-text": {
        fontSize: "10px",
      },
    },
  };

  const handleFlight = () => {
    navigate("/flight")
    setFlight(true);
    setHotel(false);
   
  };

  const handleHotel = () => {
    setHotel(true);
    setFlight(false);
     navigate("/hotel")
  };
  return (
    <Wrapper>
      <AppBar
        sx={{ ...navbarStyles, ...mediaQueryStyles, position: "absolute", }}
      >
        <Toolbar sx={{ marginLeft: isHomePage ? "2rem" : "4rem" }}>
          <div style={{ display: "flex" }}>
            
            <Box style={{ display: "flex" }}>
              <IoAirplaneSharp style={{ ...iconStyles }} />
              <Typography style={{cursor:"pointer"}}
                className={`navbar-text ${flight ? "active" : ""}`}
                onClick={() => handleFlight()}
              >
                Find Flights
              </Typography>
            </Box>
         
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "25px",
             
              }}
            >
              <IoBed style={{ ...iconStyles }} />

              <Typography style={{cursor:"pointer"}}
                className={`navbar-text ${hotel ? "active" : ""}`}
                onClick={() => handleHotel()}
              >
                Find Stays
              </Typography>
            </Box>
          </div>
          <div>
            <img
              style={{ marginLeft: "315px", marginTop: "10px" }}
              src={Group}
              alt="group"
            />
          </div>

          <Button
            sx={{
              marginLeft: "17rem",
              color: isHomePage ? "whitesmoke" : "black",
            }}
            variant="text"
          >
            Login
          </Button>
          <Button
            style={{
              background: isHomePage ? "white" : "black",
              color: isHomePage ? "black" : "whitesmoke",
              marginLeft: "28px",
              width: "6rem",
              height: "2.7rem",
              borderRadius: "12px",
              border: "none",
            }}
            variant="contained"
          >
            Sign up
          </Button>
        </Toolbar>
      </AppBar>
    </Wrapper>
  );
};

export default Navbar;
