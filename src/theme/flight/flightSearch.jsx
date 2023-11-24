import React, { useEffect } from "react";
import BookingInput from "../common/bookingInput";
import Wrapper from "../../assets/wrapper/flightSearch";
import { Card, Container } from "@mui/material";

const FlightSearch = () => {
  return (
    <Wrapper>
      <Container>
        <BookingInput btn="search" />
      </Container>
    </Wrapper>
  );
};

export default FlightSearch;
