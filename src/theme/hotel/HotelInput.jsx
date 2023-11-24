// import React, { useEffect, useState } from "react";
// import { Grid, TextField, Container } from "@mui/material";
// import BedIcon from "@mui/icons-material/Bed";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import PersonIcon from "@mui/icons-material/Person";
// import { FindHotelByCity } from "../../api/hotel/HotelInfo";
// import { data } from "../../data";
// import { useNavigate } from "react-router-dom";
// import ButtonTitle from "../common/buttonTitle";

// const HotelInput = ({ searchInfo, HomePage }) => {
//   const navigate = useNavigate();
//   const [destination, setDestination] = useState("");
//   const [checkInDate, setCheckInDate] = useState("");
//   const [checkOutDate, setCheckOutDate] = useState("");
//   const [roomsGuests, setRoomsGuests] = useState("");
//   const [cityCode, setCityCode] = useState("");
//   const [cityMappings, setCityMappings] = useState(data);

//   useEffect(() => {
//     const lowerCaseDestination = destination.toLowerCase();

//     if (cityMappings.hasOwnProperty(lowerCaseDestination)) {
//       setCityCode(cityMappings[lowerCaseDestination]);
//     } else {
//       setCityCode("");
//     }
//   }, [destination]);

//   useEffect(() => {
//     fetchAccessToken();
//   }, []);

//   const handleSearch = () => {
//     getAccessToken().then((res) => {
//       const tokenId = res;
//       if (cityCode) {
//         FindHotelByCity(cityCode, tokenId)
//           .then((res) => {
//             const data = res.data.data;
//             if (Array.isArray(data)) {
//               const hotelIds = [];
//               for (let i = 0; i < Math.min(30, data.length); i++) {
//                 const hotel = data[i];
//                 if (hotel && hotel.hotelId) {
//                   hotelIds.push(hotel.hotelId);
//                 }
//               }
//               const searchInfo = {
//                 destination,
//                 checkInDate,
//                 checkOutDate,
//                 roomsGuests,
//               };
//               localStorage.setItem("searchInfo", JSON.stringify(searchInfo));
//               navigate("/hotel-search", { state: { hotelIds } });
//             } else {
//               console.error("Invalid data format returned by API");
//             }
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       } else {
//         console.error(
//           "City code not available for the destination:",
//           destination
//         );
//       }
//     });
//   };

//   // const handleSearch = () => {
//   //   if (cityCode) {
//   //     const tokenId = "qGiXGUhGtUPhGvP6IqBv88fiNCfZGFjl";
//   //     FindHotelByCity(cityCode, tokenId)
//   //       .then((res) => {
//   //         console.log("token",tokenId)
//   //         const data = res.data.data;
//   //         if (Array.isArray(data)) {
//   //           const hotelIds = [];
//   //           for (let i = 0; i < Math.min(10, data.length); i++) {
//   //             const hotel = data[i];
//   //             if (hotel && hotel.hotelId) {
//   //               hotelIds.push(hotel.hotelId);
//   //             }
//   //           }
//   //           const searchInfo = {
//   //             destination,
//   //             checkInDate,
//   //             checkOutDate,
//   //             roomsGuests,
//   //           };
//   //           localStorage.setItem("searchInfo", JSON.stringify(searchInfo));
//   //           navigate("/hotel-search", { state: { hotelIds } });
//   //         } else {
//   //           console.error("Invalid data format returned by API");
//   //         }
//   //       })
//   //       .catch((err) => {
//   //         console.log(err);
//   //       });
//   //   } else {
//   //     console.error(
//   //       "City code not available for the destination:",
//   //       destination
//   //     );
//   //   }
//   // };

//   return (
//     <Container style={{ marginTop: "20px" }}>
//       <Grid
//         style={{
//           display: "flex",
//           alignItems: "center",
//           gap: 20,
//           marginTop: 20,
//         }}
//       >
//         <Grid>
//           <TextField
//             sx={{ width: "18rem" }}
//             label="Enter Destination"
//             variant="outlined"
//             placeholder="Istanbul,Turkey"
//             value={searchInfo?.destination || destination}
//             onChange={(e) => setDestination(e.target.value)}
//             InputProps={{
//               startAdornment: (
//                 <BedIcon style={{ cursor: "pointer", marginRight: 20 }} />
//               ),
//             }}
//           />
//         </Grid>
//         <Grid>
//           <TextField
//             sx={{ width: "9rem" }}
//             variant="outlined"
//             placeholder="Fri 12/2"
//             defaultValue={searchInfo?.checkInDate || checkInDate}
//             onChange={(e) => setCheckInDate(e.target.value)}
//             label="Check In"
//             InputProps={{
//               endAdornment: <CalendarMonthIcon style={{ cursor: "pointer" }} />,
//             }}
//           />
//         </Grid>
//         <Grid>
//           <TextField
//             sx={{ width: "9rem" }}
//             variant="outlined"
//             label="Check-Out"
//             defaultValue={searchInfo?.checkOutDate || checkOutDate}
//             onChange={(e) => setCheckOutDate(e.target.value)}
//             placeholder="Sun 12/4"
//             InputProps={{
//               endAdornment: <CalendarMonthIcon style={{ cursor: "pointer" }} />,
//             }}
//           />
//         </Grid>
//         <Grid>
//           <TextField
//             sx={{ width: "13rem" }}
//             label="Rooms & Guests"
//             variant="outlined"
//             value={searchInfo?.roomsGuests || roomsGuests}
//             onChange={(e) => setRoomsGuests(e.target.value)}
//             placeholder="1 room, 2 guests"
//             InputProps={{
//               startAdornment: (
//                 <PersonIcon style={{ cursor: "pointer", marginRight: 20 }} />
//               ),
//             }}
//           />
//         </Grid>
//       </Grid>
//       {HomePage ? null : (
//         <ButtonTitle title={"Places"} onShowPlacesClick={handleSearch} />
//       )}
//     </Container>
//   );
// };

// export default HotelInput;
import React, { useEffect, useState } from "react";
import { Grid, TextField, Container } from "@mui/material";
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

const HotelInput = ({ searchInfo, HomePage }) => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [roomsGuests, setRoomsGuests] = useState("");
  const [cityCode, setCityCode] = useState("");
  const [cityMappings, setCityMappings] = useState(data);

  useEffect(() => {
    const lowerCaseDestination = destination.toLowerCase();

    if (cityMappings.hasOwnProperty(lowerCaseDestination)) {
      setCityCode(cityMappings[lowerCaseDestination]);
    } else {
      setCityCode("");
    }
  }, [destination]);

  useEffect(() => {
    fetchAccessToken();
  }, []);

  const handleSearch = () => {
    getAccessToken().then((res) => {
      const tokenId = res;
      if (cityCode) {
        FindHotelByCity(cityCode, tokenId)
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
              navigate("/hotel-search", { state: { hotelIds } });
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
    <Container style={{ marginTop: "20px" }}>
      <Grid
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          marginTop: 20,
        }}
      >
        <Grid>
          <TextField
            sx={{ width: "18rem" }}
            label="Enter Destination"
            variant="outlined"
            placeholder="Istanbul,Turkey"
            value={searchInfo?.destination || destination}
            onChange={(e) => setDestination(e.target.value)}
            InputProps={{
              startAdornment: (
                <BedIcon style={{ cursor: "pointer", marginRight: 20 }} />
              ),
            }}
          />
        </Grid>
        <Grid>
          <TextField
            sx={{ width: "9rem" }}
            variant="outlined"
            placeholder="Fri 12/2"
            defaultValue={searchInfo?.checkInDate || checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            label="Check In"
            InputProps={{
              endAdornment: <CalendarMonthIcon style={{ cursor: "pointer" }} />,
            }}
          />
        </Grid>
        <Grid>
          <TextField
            sx={{ width: "9rem" }}
            variant="outlined"
            label="Check-Out"
            defaultValue={searchInfo?.checkOutDate || checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            placeholder="Sun 12/4"
            InputProps={{
              endAdornment: <CalendarMonthIcon style={{ cursor: "pointer" }} />,
            }}
          />
        </Grid>
        <Grid>
          <TextField
            sx={{ width: "13rem" }}
            label="Rooms & Guests"
            variant="outlined"
            value={searchInfo?.roomsGuests || roomsGuests}
            onChange={(e) => setRoomsGuests(e.target.value)}
            placeholder="1 room, 2 guests"
            InputProps={{
              startAdornment: (
                <PersonIcon style={{ cursor: "pointer", marginRight: 20 }} />
              ),
            }}
          />
        </Grid>
      </Grid>
      {HomePage ? null : (
        <ButtonTitle title={"Places"} onShowPlacesClick={handleSearch} />
      )}
    </Container>
  );
};

export default HotelInput;
