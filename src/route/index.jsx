import { Route, Routes } from "react-router-dom";
import Home from "../components/common/home";
import HotelPage from "../components/hotel/HotelPage";
import SearchPage from "../components/hotel/SearchPage";
import HotelDetailsPage from "../components/hotel/HotelDetailsPage";
import HotelBookingPage from "../components/hotel/HotelBookingPage";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* HOTELS ---- Routing */}
      <Route path="/hotel-page" element={<HotelPage />} />
      <Route path="/hotel-search" element={<SearchPage />} />
      <Route path="/hotel-detail" element={<HotelDetailsPage />} />
      <Route path="/hotel-Booking" element={<HotelBookingPage />} />
    </Routes>
  );
};

export default AppRoute;
