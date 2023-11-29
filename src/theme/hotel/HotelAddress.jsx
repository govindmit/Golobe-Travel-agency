import { Box, Button, Container, Grid, Icon, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { BsStarFill } from "react-icons/bs";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Wrapper from "../../assets/wrapper/HotelListCss";
import { useNavigate } from "react-router-dom";
import { useHotelContext } from "../../context/HotelContext";

const HotelAddress = ({ hotelName, startingPrice }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    // navigate("/hotel-detail", { state: { hotelName, startingPrice } });
  };

  return (
    <Wrapper>
      <Container>
        <Box className="Container-Box">
          <Box className="content-div">
            <div className="title-div">
              <Typography className="title-typo">{hotelName}</Typography>

              <Box className="info-box">
                <div className="location-div">
                  <LocationOnIcon sx={{ height: "16px", width: "16px" }} />

                  <Typography className="location-typo">
                    Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
                  </Typography>
                </div>

                <Box className="rating-box">
                  <div className="star-icon">
                    {Array.from({ length: 5 }, (v, i) => (
                      <div
                        style={{
                          height: "20 px",
                          color: "#FF8682",
                        }}
                        key={i}
                      >
                        {<BsStarFill />}
                      </div>
                    ))}
                    <Typography className="star-hotel-title">
                      5 star hotel
                    </Typography>
                  </div>

                  <Box className="aminities-div">
                    <LocalCafeIcon
                      style={{
                        width: "15px",
                        height: "20px",
                      }}
                    />
                    <div>
                      <span className="aminities-span">20+</span>
                      <span className="aminities-span2">Aminities</span>
                    </div>
                  </Box>
                </Box>

                <Box className="rev-Box">
                  <Button className="rating-btn">4.2</Button>

                  <Box>
                    <span className="rating-span">Very Good</span>
                    <span className="rating-span2">371 reviews</span>
                  </Box>
                </Box>
              </Box>
            </div>

            <Box className="price-box">
              <Typography className="price-start-text">
                starting from
              </Typography>

              <Box style={{ textAlign: "right" }}>
                <span className="price-span">{`$${startingPrice}`}</span>
                <span className="price-span2">/night</span>
              </Box>
              <Typography className="price-text">excl. tax</Typography>
            </Box>
          </Box>

          <div className="line" />

          <Box className="favorite-box">
            <div className="button-div">
              <Button sx={{ color: "black" }}>
                <FavoriteIcon />
              </Button>
            </div>

            <Box className="place-box">
              <Button className="place-btn" onClick={handleClick}>
                View Place
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
};
export default HotelAddress;
