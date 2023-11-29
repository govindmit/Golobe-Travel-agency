import { Grid } from "@mui/material";
import Navbar from "../../theme/common/navbar";
import HotelBookingPage from "../../theme/hotel/HotelBookingPage";
import HotelList from "../../theme/hotel/HotelList";
import Filter from "../../theme/common/Filter";
import BoxStyle from "../../theme/common/BoxStyle";
import Fotter from "../../theme/common/Fotter";
import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useHotelContext } from "../../context/HotelContext";
import { FindHotelByCity, getAccessToken } from "../../api/hotel/HotelInfo";

const SearchPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const cityCode = queryParams.get("cityCode");
  const { setIds } = useHotelContext();

  useEffect(() => {
    getAccessToken().then((res) => {
      const tokenId = res;
      if (cityCode) {
        FindHotelByCity(cityCode, tokenId)
          .then((res) => {
            const data = res.data.data;
            if (Array.isArray(data)) {
              const hotelIds = [];
              for (let i = 0; i < Math.min(15, data.length); i++) {
                const hotel = data[i];
                if (hotel && hotel.hotelId) {
                  hotelIds.push(hotel.hotelId);
                }
              }
              setIds(hotelIds);
            } else {
              console.error("Invalid data format returned by API");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        console.error(
          "City code not available for the destination:",
          destination
        );
      }
    });
  }, []);

  return (
    <>
      <div style={{ background: "#FAFBFC" }}>
        <Navbar />
        <HotelBookingPage />
        <div>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Filter />
            </Grid>
            <Grid item xs={6}>
              <BoxStyle />
            </Grid>
          </Grid>
        </div>
        <HotelList />
        <Fotter />
      </div>
    </>
  );
};
export default SearchPage;
