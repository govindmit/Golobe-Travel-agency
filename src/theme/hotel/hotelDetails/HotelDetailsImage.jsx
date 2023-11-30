import { Box, Typography, Button } from "@mui/material";
import { BsStarFill } from "react-icons/bs";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import HotelDetailImage1 from "../../../assets/images/hotel-detail-img/hotel1.png";
import HotelDetailImage2 from "../../../assets/images/hotel-detail-img/hotel2.png";
import HotelDetailImage3 from "../../../assets/images/hotel-detail-img/hotel3.png";
import HotelDetailImage4 from "../../../assets/images/hotel-detail-img/hotel4.png";
import HotelDetailImage5 from "../../../assets/images/hotel-detail-img/hotel5.png";

const HotelDetailsImage = ({ hotelName }) => {
  const handleClick = () => {
    navigate("/hotel-booking");
  };

  return (
    <>
      <Box className="hotel-info-div">
        <Box className="info-container">
          <div className="name-div">
            <Typography className="ht-text">{hotelName}</Typography>

            {Array.from({ length: 5 }, (v, i) => (
              <div className="ht-star" key={i}>
                {<BsStarFill />}
              </div>
            ))}
            <Typography className="star-hotel-title">5 star hotel</Typography>
          </div>

          <Box className="loc-box">
            <Typography>
              <LocationOnIcon sx={{ height: "16px", width: "16px" }} />
            </Typography>

            <Typography className="loc-text">
              Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
            </Typography>
          </Box>

          <Box className="price-box">
            <Typography className="loc-btn">
              <div className="rating-btn">4.2</div>
            </Typography>

            <div>
              <span className="span-div">Very Good</span>
              <span className="span-div">371 reviews</span>
            </div>
          </Box>
        </Box>

        <Box className="price-box-div">
          <div style={{ textAlign: "right" }}>
            <span className="pr-span" sx={{ fontSize: "30px" }}>
              {/* {`$${startingPrice}`} */}
              5000
            </span>
            <span className="pr-span" sx={{ fontSize: "14px" }}>
              /night
            </span>
          </div>

          <Box className="content-div">
            <Box className="content-box">
              <Typography
                style={{
                  top: 3.2,
                  position: "relative",
                }}
              >
                <FavoriteIcon sx={{ height: "15px", cursor: "pointer" }} />
              </Typography>
            </Box>

            <Box className="content-box">
              <Typography
                style={{
                  top: 3.2,
                  position: "relative",
                }}
              >
                <ShareIcon sx={{ height: "15px", cursor: "pointer" }} />
              </Typography>
            </Box>

            <Box className="book-box">
              <Button className="book-text" onClick={handleClick}>
                Book now
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="img-container">
        <img className="first-img" src={HotelDetailImage1} />

        <Box className="img-box">
          <div className="top-img-div">
            <img className="top-first-img" src={HotelDetailImage2} />
            <img
              className="top-second-img"
              style={{ borderTopRightRadius: 12 }}
              src={HotelDetailImage3}
            />
          </div>

          <Box className="bottom-img-box">
            <img className="top-first-img" src={HotelDetailImage4} />
            <img
              style={{ borderBottomRightRadius: 12 }}
              className="top-second-img"
              src={HotelDetailImage5}
            />
          </Box>

          <Box className="button-box">
            <div className="text-div">
              <Typography className="text">View all photos</Typography>
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default HotelDetailsImage;
