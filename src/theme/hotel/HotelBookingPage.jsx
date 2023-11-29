import { Button, Container, Grid, Paper } from "@mui/material";
import HotelInput from "./HotelInput";
import SearchIcon from "@mui/icons-material/Search";
import Wrapper from "../../assets/wrapper/HotelBookingCss";
import { useEffect, useState } from "react";

const HotelBookingPage = () => {
  return (
    <>
      <Wrapper>
        <Grid
          style={{
            position: "relative",
            top: "5rem",
            left: "4rem",
          }}
        >
          <Paper className="paper-container">
            <Grid sx={{ width: "96%" }}>
              <HotelInput btn="btn" />
            </Grid>
          </Paper>
        </Grid>
      </Wrapper>
    </>
  );
};
export default HotelBookingPage;
