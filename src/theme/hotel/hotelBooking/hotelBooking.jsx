import { Container, Grid } from "@mui/material";
import HotelDetailsNav from "../hotelDetails/HotelDetailsNav";
import HotelBookingCard from "./HotelBookingCard";
import HotelPrice from "./HotelPrice";
import BookingPay from "./BookingPay";

const HotelBooking = () => {
  return (
    <>
      <Container>
        <HotelDetailsNav />
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <HotelBookingCard />
          </Grid>
          <Grid item xs={6}>
            <HotelPrice />
          </Grid>
        </Grid>
        <BookingPay />
        {/* <HotelBookingCard /> */}
        {/* <HotelPrice /> */}
      </Container>
    </>
  );
};
export default HotelBooking;
