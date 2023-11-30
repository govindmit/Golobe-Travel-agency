import { Button, Grid, Typography } from "@mui/material";
import HotelImageCard from "./HotelImageCard";
import HotelAddress from "./HotelAddress";
import { OfferSearch, getAccessToken } from "../../api/hotel/HotelInfo";
import React, { useEffect, useState } from "react";
import hotelImg1 from "../../assets/images/hotel-img/hotel-img1.jpeg";
import hotelImg2 from "../../assets/images/hotel-img/hotel-img2.jpeg";
import hotelImg3 from "../../assets/images/hotel-img/hotel-img3.jpeg";
import hotelImg4 from "../../assets/images/hotel-img/hotel-img4.jpeg";
import { useHotelContext } from "../../context/HotelContext";

const HotelList = ({setHotelDataLength}) => {
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

  const { hotelIds } = useHotelContext();
  const [hotelData, setHotelData] = useState([]);
  const itemsPerPage = 4;
  const [isShowMoreDisabled, setIsShowMoreDisabled] = useState(true);

  useEffect(() => {
    getAccessToken().then((res) => {
      const tokenId = res;
      OfferSearch(hotelIds, tokenId)
        .then((res) => {
          const data = res.data.data;
          console.log(data);
          setHotelDataLength(data.length)
          const extractedData = data.map((offer) => {
            return {
              hotelId: offer.hotel.hotelId,
              hotelName: offer.hotel.name,
              startingPrice: offer.offers[0].price.variations.average.base,
            };
          });
          setHotelData(extractedData);
          setIsShowMoreDisabled(extractedData.length <= 4);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, [hotelIds.length > 0]);

  return (
    <Grid container spacing={1} sx={{ display: "flex", marginTop: "10rem" }}>
      {hotelData.map((value, index) => {
        const adjustIndex = index % itemsPerPage;
        return (
          <>
            <Grid item xs={6}>
              <HotelImageCard src={data1[adjustIndex]?.imgUrl} />
            </Grid>
            <Grid item xs={6}>
              <HotelAddress
                hotelName={value.hotelName}
                startingPrice={value.startingPrice}
                hotelId={value.hotelId}
              />
            </Grid>
          </>
        );
      })}

      <Grid item xs={6}>
        <Typography
          style={{
            width: "125%",
            justifyContent: "center",
            background: "#112211",
            borderRadius: 4,
            position: "relative",
            left: "27rem",
            display: "flex",
            ...(isShowMoreDisabled && {
              pointerEvents: "none",
              opacity: 0.0,
            }),
          }}
        >
          <Button
            sx={{
              color: "white",
              fontSize: 14,
              fontFamily: "Montserrat",
              fontWeight: "600",
              ...(isShowMoreDisabled && {
                visibility: "hidden",
              }),
            }}
            disabled={isShowMoreDisabled}
          >
            Show More Results
          </Button>
        </Typography>
      </Grid>
    </Grid>
  );
};
export default HotelList;
