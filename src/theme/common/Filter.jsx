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
  Divider,
  Button,
} from "@mui/material";
import Wrapper from "../../assets/wrapper/Filtercss";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Slider from "./Slider";

const Filter = (airlines) => {
  const [slider,setSlider] = useState(false)

  const resetFilters = () => {
     setSlider(true)
  };

 

  const airlineData = airlines.airlines;

  const [showMoreAmenities, setShowMoreAmenities] = useState(false);
  const [showPriceSection, setShowPriceSection] = useState(true);
  const [showRatingSection, setShowRatingSection] = useState(true);
  const [showFreebiesSection, setShowFreebiesSection] = useState(true);
  const [showAmenitiesSection, setShowAmenitiesSection] = useState(true);
  const [showAirlineSection, setShowAirlineSection] = useState(true);
  const [showTripSection, setShowTripSection] = useState(true);
  const [showFlightDepartureSection, setShowFlightDepartureSection] =
    useState(true);
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
      case "airlines":
        setToggleIcon(!toggleIcon);
        setShowAirlineSection(!showAirlineSection);
        break;
      case "trips":
        setToggleIcon(!toggleIcon);
        setShowTripSection(!showTripSection);
        break;
      case "flightDeparture":
        setToggleIcon(!toggleIcon);
        setShowFlightDepartureSection(!showFlightDepartureSection);
        break;
      default:
        break;
    }
  };

  return (
    <Wrapper>
      <Container>
        <Grid>
        <Button className="reset"
            style={{
              color: "white",
              background: "#112211",
              textTransform: "none",
              width: "4rem",
              height: "2rem",
              borderRadius: "8px",
              border: "none",
            }}
            variant="contained"
            onClick={resetFilters}
          >
            Reset
          </Button>
          <Button className="reset"
            style={{
              color: "white",
              background: "#112211",
              textTransform: "none",
              width: "4rem",
              height: "2rem",
              borderRadius: "8px",
              border: "none",
            }}
            variant="contained"
            onClick={resetFilters}
          >
            filter
          </Button>
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
                height: "auto",
                // borderBottom: "2px solid whitesmoke",
              }}
            >
              <Slider isHotel={true} slider={slider} />
            </div>
          )}
          {airlineData && (
            <div className="price-div">
              <Typography>Departure Time</Typography>
              <button
                className="icon"
                onClick={() => handleToggleSection("flightDeparture")}
              >
                {toggleIcon ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </button>
            </div>
          )}
          {airlineData && showFlightDepartureSection && (
            <div
              style={{
                marginTop: "10px",
                height: "auto",
                // borderBottom: "2px solid whitesmoke",
              }}
            >
              {<Slider />}
            </div>
          )}
          {/* <Divider></Divider> */}
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
                <button>0+</button>
                <button>1+</button>
                <button>2+</button>
                <button>3+</button>
                <button>4+</button>
              </div>
            )}
          </Box>
          {airlineData ? (
            <>
              <Box className="third-box">
                <div className="first-box">
                  <Typography style={{ marginTop: "20px" }}>
                    Airlines
                  </Typography>
                  <button
                    className="btn"
                    onClick={() => handleToggleSection("airlines")}
                  >
                    {toggleIcon ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </button>
                </div>
                {showAirlineSection && (
                  <div className="checkbox">
                    {airlineData?.map((airline) => {
                      const airlineName = airline.name.toLowerCase();
                      const capitalizedAirlineName =
                        airlineName.charAt(0).toUpperCase() +
                        airlineName.slice(1);
                      return (
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox />}
                            label={capitalizedAirlineName}
                          />
                        </FormGroup>
                      );
                    })}
                  </div>
                )}
              </Box>
              {/* trip */}
              <Box className="third-box">
                <div className="first-box">
                  <Typography style={{ marginTop: "20px" }}>Trips</Typography>
                  <button
                    className="btn"
                    onClick={() => handleToggleSection("trips")}
                  >
                    {toggleIcon ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </button>
                </div>
                {showTripSection && (
                  <div className="checkbox">
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Round trip"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox />} label="On way" />
                    </FormGroup>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Multi city "
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="My dates are flexible"
                      />
                    </FormGroup>
                  </div>
                )}
              </Box>
            </>
          ) : (
            <>
              {/* <Divider></Divider> */}
              {/* freebies */}
              <Box className="box-div">
                <div className="first-box">
                  <div>
                    <Typography style={{ marginTop: "20px" }}>
                      Freebies
                    </Typography>
                  </div>
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
              {/* <Divider></Divider> */}
              {/* Amenities */}
              <Box className="third-box">
                <div className="first-box">
                  <Typography style={{ marginTop: "20px" }}>
                    Amenities
                  </Typography>
                  <div>
                    <button
                      className="btn"
                      onClick={() => handleToggleSection("amenities")}
                    >
                      {toggleIcon ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </button>
                  </div>
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
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Fitness"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox />} label="pool" />
                    </FormGroup>

                    {showMoreAmenities && (
                      <>
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
                          <FormControlLabel
                            control={<Checkbox />}
                            label="CASINO"
                          />
                        </FormGroup>
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox />}
                            label="GYM"
                          />
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
                    {showMoreAmenities && (
                      <Typography
                        style={{ color: "#FF8682" }}
                        onClick={handleToggleMoreAmenities}
                      >
                        show less
                      </Typography>
                    )}
                  </div>
                )}
              </Box>
            </>
          )}
          {/* <Button
            style={{
              color: "white",
              background: "#112211",
              textTransform: "none",
              width: "4rem",
              height: "2rem",
              borderRadius: "8px",
              border: "none",
            }}
            variant="contained"
            onClick={resetFilters}
          >
            Reset
          </Button> */}
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Filter;
