import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

import AddIcon from "@mui/icons-material/Add";
import NearMeIcon from "@mui/icons-material/NearMe";
import { Button, Grid, MenuItem, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { FlightOfferSearch } from "../../api/flight/flightinfo";
import { getAccessToken } from "../../api/hotel/HotelInfo";
const trip = [
  {
    id: 1,
    label: "return",
    value: "return",
  },
  {
    id: 2,
    label: "one-way",
    value: "one-way",
  },
  {
    id: 1,
    label: "round",
    value: "round",
  },
];

function BookingInput({ btn }) {
  const [inputValue, setInputValue] = useState("");
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");

  const [passengerInputValue, setPassengerInputValue] = useState("");
  const [passenger, setPassenger] = useState("");
  const [classType, setClassType] = useState("");

  const [dateValue, setDateValue] = useState("");
  const [dateFromValue, setDateFromValue] = useState("");
  const [dateToValue, setDateToValue] = useState("");
  const [flightData, setFlightData] = useState([]);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    const parts = e.target.value.split("-");
    if (parts.length === 2) {
      setFromValue(parts[0].trim());
      setToValue(parts[1].trim());
    } else {
      setFromValue("");
      setToValue("");
    }
  };

  const handlePassengerInputChange = (e) => {
    setPassengerInputValue(e.target.value);
    const parts = e.target.value.split("," || "-");
    if (parts.length === 2) {
      setPassenger(parts[0].trim());
      setClassType(parts[1].trim());
    } else {
      setPassenger("");
      setClassType("");
    }
  };

  const showFlights = () => {
    console.log(fromValue, "<=fromValue");
    console.log(toValue, "<=toValue");
    console.log(passenger, "<=passenger");
    console.log(classType, "<=classType");
    console.log(dateFromValue, "<=dateFromValue");
    console.log(dateToValue, "<=dateToValue");
    getAccessToken()
      .then((res) => {
        FlightOfferSearch(
          fromValue,
          toValue,
          dateFromValue,
          dateToValue,
          passenger,
          res
        )
          .then((res) => {
            const response = res.data;
            console.log(response, "response");
            setFlightData([
              {
                airlines: response?.dictionaries?.carriers,
                airlineDetail: response?.data,
              },
            ]);
          })
          .catch((e) => {
            console.log("error", e);
          });
      })
      .catch((e) => {
        console.log("error", e);
      });
  };

  const handleSwapClick = () => {
    // Swap showFlightsthe values of fromValue and toValue
    const temp = fromValue;
    setFromValue(toValue);
    setToValue(temp);

    // Update the input value to show the swapped values
    setInputValue(`${toValue} - ${fromValue}`);
  };

  const handleDateInputChange = (e) => {
    setDateValue(e.target.value);
    const parts = e.target.value.split(",");
    if (parts.length === 2) {
      setDateFromValue(parts[0].trim());
      setDateToValue(parts[1].trim());
    } else {
      setDateFromValue("");
      setDateToValue("");
    }
  };

  console.log(flightData);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <TextField
            className="from-to-input"
            label=" From - To"
            value={inputValue}
            onChange={handleInputChange}
            variant="outlined"
            fullWidth
            InputProps={{
              endAdornment: (
                <SwapHorizIcon
                  style={{ cursor: "pointer" }}
                  onClick={handleSwapClick}
                />
              ),
            }}
            placeholder={`${fromValue} - ${toValue}`}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            className="select-input"
            id="outlined-select-currency"
            select
            label="Select"
            defaultValue="return"
            style={{ minWidth: "100%" }}
          >
            {trip.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={3}>
          <TextField
            className="from-to-input"
            label="Depart- Return"
            value={dateValue}
            onChange={handleDateInputChange}
            variant="outlined"
            fullWidth
            placeholder={`${dateFromValue} - ${dateToValue}`}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className="from-to-input"
            label=" Passenger - Class"
            value={passengerInputValue}
            onChange={handlePassengerInputChange}
            variant="outlined"
            fullWidth
            placeholder={`${passenger} , ${classType}`}
            defaultValue={`${passenger} , ${classType}`}
          />
        </Grid>
        {btn && (
          <button className="search-btn">
            <SearchIcon />
          </button>
        )}
      </Grid>
      {!btn && (
        <div className="buttonDiv">
          <Typography className="buttonStyles">
            <AddIcon /> Add promo code
          </Typography>
          <Button className="showFlight" onClick={() => showFlights()}>
            <NearMeIcon /> Show Flights
          </Button>
        </div>
      )}
    </>
  );
}

export default BookingInput;
