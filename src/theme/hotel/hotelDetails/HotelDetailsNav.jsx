import { Box, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Wrapper from "../../../assets/wrapper/HotelDetailsCss";
const HotelDetailsNav = () => {
  return (
    <>
      <Wrapper>
        <Box className="top-nav-box">
          <Typography className="city-title">Turkey</Typography>

          <Typography className="icon-arrow-div">
            <ArrowForwardIosIcon className="icon-arrow" />
          </Typography>

          <Typography className="country-title">Istanbul</Typography>

          <Typography className="icon-arrow-div">
            <ArrowForwardIosIcon className="icon-arrow" />
          </Typography>

          <Typography className="hotel-name">
            CVK Park Bosphorus Hotel Istanbul
          </Typography>
        </Box>
      </Wrapper>
    </>
  );
};
export default HotelDetailsNav;
