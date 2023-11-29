import { Grid } from "@mui/material";
import Navbar from "../../theme/common/navbar";
import HotelBookingPage from "../../theme/hotel/HotelBookingPage";
import HotelList from "../../theme/hotel/HotelList";
import Filter from "../../theme/common/Filter";
import BoxStyle from "../../theme/common/BoxStyle";
import Fotter from "../../theme/common/Fotter";

const SearchPage = () => {
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
        {/* <Fotter /> */}
      </div>
    </>
  );
};
export default SearchPage;
