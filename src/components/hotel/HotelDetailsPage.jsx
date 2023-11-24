import { Card } from "@mui/material";
import Navbar from "../../theme/common/navbar";
import HotelDetail from "../../theme/hotel/hotelDetails/HotelDetail";
import Fotter from "../../theme/common/Fotter";
import BackPackingCard from "../../theme/common/BackPackingCard";

const HotelDetailsPage = () => {
  return (
    <>
      <Navbar />
      <HotelDetail />
      <Fotter />
    </>
  );
};
export default HotelDetailsPage;
