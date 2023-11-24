import { Route, Routes } from "react-router-dom";
import Home from "../components/common/home";
import FlightLanding from "../components/flight";
import FlightListing from "../components/flight/flightBooking";
const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />;
      <Route path="/flight" element={<FlightLanding />} />;
      <Route path="/flight-list" element={<FlightListing/>} />;
    </Routes>
  );
};

export default AppRoute;
