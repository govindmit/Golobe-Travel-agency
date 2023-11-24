import React, { useState } from "react";
import {
  AppBar,
  Box,
  Checkbox,
  Container,
  FormGroup,
  Grid,
  Typography,
  FormControlLabel,
} from "@mui/material";
import Wrapper from "../../assets/wrapper/Filtercss";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Slider from "./Slider";

const Filter = () => {
  const [showMoreAmenities, setShowMoreAmenities] = useState(false);
  const [showPriceSection, setShowPriceSection] = useState(true);
  const [showRatingSection, setShowRatingSection] = useState(true);
  const [showFreebiesSection, setShowFreebiesSection] = useState(true);
  const [showAmenitiesSection, setShowAmenitiesSection] = useState(true);
  const [toggleIcon, setToggleIcon] = useState(true);

  const handleToggleMoreAmenities = () => {
    setShowMoreAmenities(!showMoreAmenities);
  };
  const handleToggleSection = (section) => {
    switch (section) {
      case "price":
        setToggleIcon(!toggleIcon);
        setShowPriceSection(!showPriceSection);
        break;
      case "rating":
        setToggleIcon(!toggleIcon);
        setShowRatingSection(!showRatingSection);
        break;
      case "freebies":
        setToggleIcon(!toggleIcon);
        setShowFreebiesSection(!showFreebiesSection);
        break;
      case "amenities":
        setToggleIcon(!toggleIcon);
        setShowAmenitiesSection(!showAmenitiesSection);
        break;
      default:
        break;
    }
  };

  return (
    <Wrapper>
      <Container>
        <Grid>
          <div>
            <Typography className="filter">Filters</Typography>
          </div>
          <div className="price-div">
            <Typography>Price</Typography>
            <button
              className="icon"
              onClick={() => handleToggleSection("price")}
            >
              {toggleIcon ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </button>
          </div>
          {showPriceSection && (
            <div
              style={{
                marginTop: "10px",
                height: "65px",
                borderBottom: "2px solid whitesmoke",
              }}
            >
              <Slider />
            </div>
          )}

          <Box className="box-div">
            <div className="first-box">
              <Typography style={{ color: "#112211", marginTop: "10px" }}>
                Rating
              </Typography>
              <button
                className="btn"
                onClick={() => handleToggleSection("rating")}
              >
                {toggleIcon ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </button>
            </div>
            {showRatingSection && (
              <div className="second-box">
                <button className="rating-btn">0+</button>
                <button className="rating-btn">1+</button>
                <button className="rating-btn">2+</button>
                <button className="rating-btn">3+</button>
                <button className="rating-btn">4+</button>
              </div>
            )}
          </Box>
          {/* Freebies */}
          <Box className="third-box">
            <div className="first-box">
              <Typography>Freebies</Typography>
              <button
                className="btn"
                onClick={() => handleToggleSection("freebies")}
              >
                {toggleIcon ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </button>
            </div>
            {showFreebiesSection && (
              <div className="checkbox">
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Free breakFast"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Free parking"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Free internet"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Free airport shuttle"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Free cancellation"
                  />
                </FormGroup>
              </div>
            )}
          </Box>
          {/* Amenities */}
          <Box className="third-box">
            <div className="first-box">
              <Typography>Amenities</Typography>
              <button
                className="btn"
                onClick={() => handleToggleSection("amenities")}
              >
                {toggleIcon ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </button>
            </div>
            {showAmenitiesSection && (
              <div className="checkbox">
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="24hr front desk"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Air-conditioned"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="Fitness" />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="pool" />
                </FormGroup>

                {showMoreAmenities && (
                  <>
                    {/* Additional checkboxes when showMoreAmenities is true */}
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="MULTILINGUAL_STAFF"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="WEDDING_SERVICES"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox />} label="CASINO" />
                    </FormGroup>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox />} label="GYM" />
                    </FormGroup>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="TRANSPORTATION"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="LIVE_ENTERTAINMENT"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="THEATRE_DESK"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="INTERNET-HI_SPEED"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="TENNIS_PROFESSIONAL"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="SNOW_SKIING"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="SIGHTSEEING"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="GAMES_SYSTEM_IN_ROOM"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="NATURAL_DAYLIGHT"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="HORSE_RIDING"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="WATER_SPORTS"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="FIRE_SAFETY"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="SCUBA_DIVING"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="FREE_LOCAL_CALLS"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="MINIBAR"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="KENNELS"
                      />
                    </FormGroup>
                  </>
                )}
                {!showMoreAmenities && (
                  <Typography
                    className="show-more"
                    onClick={handleToggleMoreAmenities}
                  >
                    24+ more
                  </Typography>
                )}
              </div>
            )}
          </Box>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Filter;
