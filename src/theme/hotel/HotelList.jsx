import { Button, Grid, Typography } from "@mui/material";
import HotelImageCard from "./HotelImageCard";
import HotelAddress from "./HotelAddress";
import { useLocation } from "react-router-dom";
import { HotelListById, OfferSearch } from "../../api/hotel/HotelInfo";
import React, { useEffect, useState } from "react";
import hotelImg1 from "../../assets/images/hotel-img/hotel-img1.jpeg";
import hotelImg2 from "../../assets/images/hotel-img/hotel-img2.jpeg";
import hotelImg3 from "../../assets/images/hotel-img/hotel-img3.jpeg";
import hotelImg4 from "../../assets/images/hotel-img/hotel-img4.jpeg";

const HotelList = ({ searchInfo }) => {
  const data1 = [
    {
      id: 1,
      imgUrl: hotelImg1,
    },
    {
      id: 2,
      imgUrl: hotelImg2,
    },
    {
      id: 3,
      imgUrl: hotelImg3,
    },
    {
      id: 4,
      imgUrl: hotelImg4,
    },
  ];
  const location = useLocation();
  const { hotelIds } = location.state;
  const [startIndex, setStartIndex] = useState(0);
  const [hotelData, setHotelData] = useState([]);
  const itemsPerPage = 4;

  const data = localStorage.getItem("searchInfo", JSON.stringify(searchInfo));

  useEffect(() => {
    OfferSearch(hotelIds)
      .then((res) => {
        const data = res.data.data;
        setHotelData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [hotelIds]);

  const handleShowMore = () => {
    setStartIndex((prevIndex) => prevIndex + itemsPerPage);
  };

  return (
    <Grid container spacing={1} sx={{ display: "flex", marginTop: "4.5rem" }}>
      {hotelData.map((value, index) => {
        const adjustIndex = index % itemsPerPage;
        return (
          <>
            <Grid item xs={6}>
              <HotelImageCard src={data1[adjustIndex]?.imgUrl} />
            </Grid>
            <Grid item xs={6}>
              <HotelAddress hotelName={value} />
            </Grid>
          </>
        );
      })}

      <Grid item xs={6}>
        {startIndex + itemsPerPage < hotelIds.length && (
          <Typography
            style={{
              width: "125%",
              justifyContent: "center",
              background: "#112211",
              borderRadius: 4,
              position: "relative",
              left: "26rem",
              display: "flex",
            }}
          >
            <Button
              onClick={handleShowMore}
              sx={{
                color: "white",
                fontSize: 14,
                fontFamily: "Montserrat",
                fontWeight: "600",
              }}
            >
              Show More Results
            </Button>
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};
export default HotelList;
