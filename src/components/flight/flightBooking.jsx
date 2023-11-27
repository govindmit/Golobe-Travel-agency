import React from "react";
import Navbar from "../../theme/common/navbar";
import FlightSearch from "../../theme/flight/flightSearch";
import { useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import Filter from "../../theme/common/Filter";
import FlightCard from "../../theme/flight/flightCard";
import Fotter from "../../theme/common/Fotter";
import FlightListSorting from "../../theme/flight/flightListSorting";

const airlineData = [
  { name: "HELVETIC AIRWAYS" },
  { name: "INDIGO" },
  { name: "AIR FRANCE" },
  { name: "AIR INDIA" },
  { name: "ITA AIRWAYS" },
  { name: "LUFTHANSA CITYLINE" },
  { name: "EMIRATES" },
  { name: "ETHIOPIAN AIRLINES" },
];
const FlightListing = () => {
  const location = useLocation();
  const flightData = location.state?.flightData || {};
  console.log(flightData, "dta");
  return (
    <>
      <div style={{ background: "#FAFBFC" }}>
        <Navbar />
        <FlightSearch />
        <div>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Filter airlines={flightData?.airlines || airlineData} />
            </Grid>
            <Grid item xs={6}>
              <FlightListSorting />
            </Grid>
          </Grid>
        </div>
        {/* <div>
          <Fotter />
        </div> */}
      </div>
    </>
  );
};

export default FlightListing;
