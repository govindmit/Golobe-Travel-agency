import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

import AddIcon from "@mui/icons-material/Add";
import NearMeIcon from "@mui/icons-material/NearMe";
import { Button, Grid, MenuItem, Modal, Select, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { FlightOfferSearch } from "../../api/flight/flightinfo";
import { getAccessToken } from "../../api/hotel/HotelInfo";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import BookingForm from "../flight/inputTest";
import Wrapper from "../../assets/wrapper/flightSearchInput";
const trip = [
  {
    id: 1,
    label: "return",
    value: "return",
  },

  {
    id: 2,
    label: "round",
    value: "round",
  },
];

function BookingInput({ btn }) {
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");

  const [passengerInputValue, setPassengerInputValue] = useState("");
  const [passenger, setPassenger] = useState("");
  const [classType, setClassType] = useState("");

  const [dates, setDates] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    adults: 1,
    class: "Economy",
  });

  const formatDate = (date) => moment(date).format("YYYY-MM-DD");
  const formatPlaceholderDate = (date) => moment(date).format("DD MMM YY");

  const handleDateChange = (start, end) => {
    const newDate = {
      key: dates.length + 1,
      start: formatDate(start),
      end: formatDate(end),
    };

    setDates([newDate]);
    setShowCalendar(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = () => {
    setPassengerInputValue(
      `${
        parseInt(modalData.adults, 10) +','+ (modalData.class)
      } `
    );
    setPassenger(modalData.adults)
    setClassType(modalData.class)
    handleModalClose();
  };
  const navigate = useNavigate();
  const today = new Date();
  const showFlights = () => {
    getAccessToken()
      .then((res) => {
        FlightOfferSearch(
          fromValue,
          toValue,
          dates[0]?.start,
          dates[0]?.end,
          passenger,
          res
        )
          .then((res) => {
            const response = res.data;
            console.log(response, "response");

            navigate("/flight-list", {
              state: {
                flightData: [
                  {
                    airlines: response?.dictionaries?.carriers,
                    airlineDetail: response?.data,
                  },
                ],
              },
            });
          })
          .catch((e) => {
            console.log("error", e);
          });
      })
      .catch((e) => {
        console.log("error", e);
      });
  };

  
  return (
    <Wrapper>
      <Grid container spacing={2} className="flight-search-input">
        <Grid item xs={4}>
          <BookingForm
            fromValue={fromValue}
            toValue={toValue}
            setFromValue={setFromValue}
            setToValue={setToValue}
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
        onFocus={() => setShowCalendar(true)}
        value={
          startDate && endDate
            ? `${formatPlaceholderDate(startDate)} - ${formatPlaceholderDate(
                endDate
              )}`
            : ''
        }
        readOnly
      />
      {showCalendar && (
        <div className="calender-view">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            startDate={startDate}
            endDate={endDate}
            selectsStart
            inline
            minDate={today}
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => {
              setEndDate(date);
              handleDateChange(startDate, date);
            }}
            startDate={startDate}
            endDate={endDate}
            minDate={startDate || today}
            selectsEnd
            inline
          />
        </div>
      )}
    </Grid>
        <Grid item xs={2}>
          <TextField
            className="from-to-input"
            label=" Passenger - Class"
            value={passengerInputValue}
            // onChange={handlePassengerInputChange}
            onClick={handleModalOpen}
            variant="outlined"
            fullWidth
            placeholder={`${passenger} , ${classType}`}
            defaultValue={`${passenger} , ${classType}`}
          />
        </Grid>

        <Modal open={isModalOpen} onClose={handleModalClose}>
      <div
        style={{
          padding: 16,
          maxWidth: "25%",
          margin: "auto",
          position: "absolute",
          top: "14rem",
          right: "4rem",
          background: "Whitesmoke",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Select Rooms & Guests
        </Typography>
        <TextField
          label="Adults"
          type="number"
          value={modalData.adults}
          onChange={(e) =>
            setModalData({
              ...modalData,
              adults:Math.min(9, Math.max(1, e.target.value)),
            })
          }
          fullWidth
          margin="normal"
        />
        {/* Replace TextField with Select */}
        <Select
          label="Class"
          value={modalData.class}
          onChange={(e) =>
            setModalData({
              ...modalData,
              class: e.target.value,
            })
          }
          fullWidth
          margin="normal"
        >
          {/* Add MenuItem options for each class */}
          <MenuItem value="Economy">Economy</MenuItem>
          <MenuItem value="PremiumEconomy">Premium Economy</MenuItem>
          <MenuItem value="Business">Business</MenuItem>
          <MenuItem value="FirstClass">First Class</MenuItem>
        </Select>
        {/* End of Select */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleModalSubmit}
        >
          Apply
        </Button>
      </div>
    </Modal>


        {btn && (
          <button className="search-btn" onClick={() => showFlights()}>
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
    </Wrapper>
  );
}

export default BookingInput;
