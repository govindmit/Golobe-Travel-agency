import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import { Grid, MenuItem } from "@mui/material";

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

function BookingInput() {
  const [inputValue, setInputValue] = useState("");
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");

  const [passengerInputValue, setPassengerInputValue] = useState("");
  const [passengerName, setPassengerName] = useState("");
  const [classType, setClassType] = useState("");

  const [dateValue, setDateValue] = useState("");
  const [dateFromValue, setDateFromValue] = useState("");
  const [dateToValue, setDateToValue] = useState("");

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
      setPassengerName(parts[0].trim());
      setClassType(parts[1].trim());
    } else {
      setPassengerName("");
      setClassType("");
    }
  };

  const handleSwapClick = () => {
    // Swap the values of fromValue and toValue
    const temp = fromValue;
    setFromValue(toValue);
    setToValue(temp);

    // Update the input value to show the swapped values
    setInputValue(`${toValue} - ${fromValue}`);
  };

  const handleDateInputChange = (e) => {
    setDateValue(e.target.value);
    const parts = e.target.value.split("-");
    if (parts.length === 2) {
      setDateFromValue(parts[0].trim());
      setDateToValue(parts[1].trim());
    } else {
      setDateFromValue("");
      setDateToValue("");
    }
  };

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
            placeholder={`${passengerName} , ${classType}`}
            defaultValue={`${passengerName} , ${classType}`}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default BookingInput;
