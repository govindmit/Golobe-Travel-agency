import React from "react";
import { IoAirplaneSharp, IoBed } from "react-icons/io5";
import Group from "../../assets/images/Group.svg";
import { AppBar, Typography, Toolbar, Button, Box } from "@mui/material";

const Navbar = ({ isHomePage }) => {
  const navbarStyles = {
    background: isHomePage ? "transparent" : "white",
    boxShadow: 0,
    marginTop: isHomePage && "2rem",
    color: isHomePage ? "white" : "black",
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
      "& .navbar-text": {
        marginLeft: 0,
        marginTop: "10px",
        fontSize: "10px",
      },
    },
  };

  return (
    <AppBar sx={{ ...navbarStyles, ...mediaQueryStyles }} position="absolute">
      <Toolbar>
        <Box display="flex" alignItems="center">
          <IoAirplaneSharp style={{ ...iconStyles }} />
          <Typography sx={{ ...navbarStyles }} className="navbar-text">
            Find Flights
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <IoBed style={{ ...iconStyles, marginLeft: "30px" }} />
          <Typography sx={{ ...navbarStyles }} className="navbar-text">
            Find Stays
          </Typography>
        </Box>

        <img style={{ marginLeft: "400px" }} src={Group} alt="group" />
        <Button
          sx={{
            marginLeft: "auto",
            color: isHomePage ? "whitesmoke" : "black",
          }}
          variant="text"
        >
          Login
        </Button>
        <Button
          sx={{
            background: isHomePage ? "white" : "black",
            color: isHomePage ? "black" : "whitesmoke",
            marginLeft: "10px",
          }}
          variant="contained"
        >
          SignUp
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
