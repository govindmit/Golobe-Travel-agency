import React, { useEffect, useState } from "react";
import {
  Grid,
  TextField,
  Autocomplete,
  Modal,
  Typography,
  Button,
  Box,
} from "@mui/material";
import BedIcon from "@mui/icons-material/Bed";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import { fetchAccessToken } from "../../api/hotel/HotelInfo";
import { data } from "../../data";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import AddIcon from "@mui/icons-material/Add";
import NearMeIcon from "@mui/icons-material/NearMe";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const HotelInput = ({ btn }) => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [roomsGuests, setRoomsGuests] = useState("1 Room, 1 Guest");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [destinationError, setDestinationError] = useState("");
  const [checkInDateError, setCheckInDateError] = useState("");
  const [checkOutDateError, setCheckOutDateError] = useState("");

  const today = dayjs();
  const yesterday = dayjs().subtract(1, "day");
  const [modalData, setModalData] = useState({
    rooms: 1,
    adults: 1,
    children: 0,
  });
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = () => {
    setRoomsGuests(
      `${modalData.rooms} room${modalData.rooms > 1 ? "s" : ""}, ${
        parseInt(modalData.adults, 10) + parseInt(modalData.children, 10)
      } guests`
    );
    handleModalClose();
  };

  useEffect(() => {
    localStorage.setItem("destination", destination);
    localStorage.setItem("checkInDate", checkInDate);
    localStorage.setItem("checkOutDate", checkOutDate);
    localStorage.setItem("roomsGuests", roomsGuests);
  }, [destination, checkInDate, checkOutDate, roomsGuests]);

  const handleSearch = () => {
    let isValid = true;
    if (!destination) {
      setDestinationError("Please enter a destination.");
      isValid = false;
    } else {
      setDestinationError("");
    }

    if (!checkInDate) {
      setCheckInDateError("Please select a check-in date.");
      isValid = false;
    } else {
      setCheckInDateError("");
    }

    if (!checkOutDate) {
      setCheckOutDateError("Please select a check-out date.");
      isValid = false;
    } else {
      setCheckOutDateError("");
    }

    if (isValid) {
      navigate(`/hotel-search?cityCode=${destination}`);
    }
  };

  return (
    <>
      <Grid
        container
        spacing={1}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "15px",
        }}
      >
        <Grid item xs={4}>
          <Autocomplete
            defaultValue
            options={data}
            autoHighlight
            getOptionLabel={(option) => option.label || ""}
            renderOption={(props, option) => (
              <Box component="li" {...props}>
                {option.label}({option.code})
              </Box>
            )}
            value={data.find((option) => option.code === destination) || null}
            onChange={(e, newValue) => {
              setDestination(newValue ? newValue.code : null);
              setDestinationError("");
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Enter Destination"
                placeholder="Istanbul, Turkey"
                required
                InputProps={{
                  ...params.InputProps,
                  autoComplete: "new-password",

                  startAdornment: (
                    <BedIcon style={{ cursor: "pointer", marginRight: 20 }} />
                  ),
                }}
              />
            )}
          />

          {destinationError && (
            <Typography color="error" variant="caption" gutterBottom>
              {destinationError}
            </Typography>
          )}
        </Grid>

        <Grid item xs={2}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              defaultValue={yesterday}
              disablePast
              value={checkInDate}
              onChange={(newDate) => {
                setCheckInDate(newDate);
                setCheckInDateError("");
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Fri 12/2"
                  label="Check In"
                  InputProps={{
                    endAdornment: (
                      <CalendarMonthIcon style={{ cursor: "pointer" }} />
                    ),
                  }}
                />
              )}
            />
          </LocalizationProvider>
          {checkInDateError && (
            <Typography color="error" variant="caption" gutterBottom>
              {checkInDateError}
            </Typography>
          )}
        </Grid>

        <Grid item xs={2}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              defaultValue={today}
              disablePast
              value={checkOutDate}
              onChange={(newDate) => {
                if (newDate <= checkInDate) {
                  toast.error("Check-out date must be after check-in date");
                  setCheckOutDate(null);
                } else {
                  setCheckOutDate(newDate);
                  setCheckOutDateError("");
                }
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Check-Out"
                  placeholder="Sun 12/4"
                  InputProps={{
                    endAdornment: (
                      <CalendarMonthIcon style={{ cursor: "pointer" }} />
                    ),
                  }}
                />
              )}
            />
          </LocalizationProvider>
          {checkOutDateError && (
            <Typography color="error" variant="caption" gutterBottom>
              {checkOutDateError}
            </Typography>
          )}
        </Grid>

        <Grid item xs={3}>
          <TextField
            label="Rooms & Guests"
            variant="outlined"
            value={roomsGuests}
            onClick={handleModalOpen}
            placeholder="1 room, 2 guests"
            InputProps={{
              startAdornment: (
                <PersonIcon style={{ cursor: "pointer", marginRight: 20 }} />
              ),
            }}
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
              label="Rooms"
              type="number"
              value={modalData.rooms}
              onChange={(e) =>
                setModalData({
                  ...modalData,
                  rooms: Math.max(1, e.target.value),
                })
              }
              fullWidth
              margin="normal"
            />
            <TextField
              label="Adults"
              type="number"
              value={modalData.adults}
              onChange={(e) =>
                setModalData({
                  ...modalData,
                  adults: Math.max(1, e.target.value),
                })
              }
              fullWidth
              margin="normal"
            />
            <TextField
              label="Children"
              type="number"
              value={modalData.children}
              onChange={(e) =>
                setModalData({
                  ...modalData,
                  children: Math.max(0, e.target.value),
                })
              }
              fullWidth
              margin="normal"
            />
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
          <button className="search-btn" onClick={() => handleSearch()}>
            <SearchIcon />
          </button>
        )}
      </Grid>

      {!btn && (
        <div className="buttonDiv">
          <Typography className="buttonStyles">
            <AddIcon /> Add promo code
          </Typography>
          <Button className="showFlight" onClick={() => handleSearch()}>
            <NearMeIcon /> Show Places
          </Button>
        </div>
      )}
    </>
  );
};

export default HotelInput;
