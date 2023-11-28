import React, { useEffect, useState } from "react";
import {
  Grid,
  TextField,
  Container,
  Autocomplete,
  Modal,
  Typography,
  Button,
} from "@mui/material";
import BedIcon from "@mui/icons-material/Bed";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import {
  FindHotelByCity,
  fetchAccessToken,
  getAccessToken,
} from "../../api/hotel/HotelInfo";
import { data } from "../../data";
import { useNavigate } from "react-router-dom";
import ButtonTitle from "../common/buttonTitle";
import { useHotelContext } from "../../context/HotelContext";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const HotelInput = ({ searchInfo, HomePage }) => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [roomsGuests, setRoomsGuests] = useState("");
  const [cityCode, setCityCode] = useState("");
  const [cityMappings, setCityMappings] = useState(data);
  const { setIds } = useHotelContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  // useEffect(() => {
  //   const lowerCaseDestination = destination?.toLowerCase?.();
  //   const cityMapping = cityMappings.find(
  //     (city) => city.label.toLowerCase() === lowerCaseDestination
  //   );

  //   if (cityMapping) {
  //     setCityCode(cityMapping.code);
  //   } else {
  //     setCityCode("");
  //   }
  // }, [destination, cityMappings]);

  useEffect(() => {
    fetchAccessToken();
  }, []);

  const handleSearch = () => {
    getAccessToken().then((res) => {
      const tokenId = res;
      console.log(destination);
      if (destination) {
        FindHotelByCity(destination, tokenId)
          .then((res) => {
            const data = res.data.data;
            if (Array.isArray(data)) {
              const hotelIds = [];
              for (let i = 0; i < Math.min(10, data.length); i++) {
                const hotel = data[i];
                if (hotel && hotel.hotelId) {
                  hotelIds.push(hotel.hotelId);
                }
              }
              const searchInfo = {
                destination,
                checkInDate,
                checkOutDate,
                roomsGuests,
              };
              localStorage.setItem("searchInfo", JSON.stringify(searchInfo));

              setIds(hotelIds);

              navigate("/hotel-search");
            } else {
              console.error("Invalid data format returned by API");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        console.error(
          "City code not available for the destination:",
          destination
        );
      }
    });
  };

  return (
    <>
      <Grid
        container
        spacing={1}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <Grid item xs={4}>
          <Autocomplete
            // sx={{ width: "18rem" }}
            id="free-solo-2-demo"
            disableClearable
            options={cityMappings.map((option) => ({
              label: `${option.label} (${option.code})`,
              value: option.label,
              code: option.code,
            }))}
            getOptionLabel={(option) => option.label || ""}
            value={
              cityMappings.find((option) => option.code === destination) || null
            }
            onChange={(e, newValue) => setDestination(newValue.code)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Enter Destination"
                placeholder="Istanbul, Turkey"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                  startAdornment: (
                    <BedIcon style={{ cursor: "pointer", marginRight: 20 }} />
                  ),
                }}
              />
            )}
          />
        </Grid>

        <Grid item xs={2}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              // sx={{ width: "9rem" }}
              value={checkInDate}
              onChange={(newDate) => setCheckInDate(newDate)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
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
        </Grid>
        <Grid item xs={2}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              // sx={{ width: "9rem" }}
              value={checkOutDate}
              onChange={(newDate) => setCheckOutDate(newDate)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
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
        </Grid>

        <Grid item xs={3}>
          <TextField
            // sx={{ width: "13rem" }}
            label="Rooms & Guests"
            variant="outlined"
            value={searchInfo?.roomsGuests || roomsGuests}
            // onChange={(e) => setRoomsGuests(e.target.value)}
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
                setModalData({ ...modalData, rooms: e.target.value })
              }
              fullWidth
              margin="normal"
            />
            <TextField
              label="Adults"
              type="number"
              value={modalData.adults}
              onChange={(e) =>
                setModalData({ ...modalData, adults: e.target.value })
              }
              fullWidth
              margin="normal"
            />
            <TextField
              label="Children"
              type="number"
              value={modalData.children}
              onChange={(e) =>
                setModalData({ ...modalData, children: e.target.value })
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
      </Grid>

      {/* {HomePage ? null : (
        <ButtonTitle title={"Places"} onShowPlacesClick={handleSearch} />
      )} */}
    </>
  );
};

export default HotelInput;
