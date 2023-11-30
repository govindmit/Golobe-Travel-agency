import Wrapper from "../../../assets/wrapper/HotelDetailsCss";
import { Container } from "@mui/material";
import HotelDetailList from "./HotelDetailList";
import DetailsOverview from "./DetailsOverview";
import HotelDetailsImage from "./HotelDetailsImage";
import MyLocation from "./Mylocation";
import HotelDetailsNav from "./HotelDetailsNav";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { HotelListById, getAccessToken } from "../../../api/hotel/HotelInfo";

const HotelDetail = () => {
  const [hotelName, setHotelName] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const hotelId = queryParams.get("hotelId");
  console.log(hotelId);

  useEffect(() => {
    getAccessToken().then((res) => {
      const tokenId = res;
      HotelListById(hotelId, tokenId)
        .then((res) => {
          const data = res.data.data[0].name;
          setHotelName(data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, [hotelId]);

  return (
    <>
      <Wrapper>
        <Container>
          <HotelDetailsNav hotelName={hotelName} />
          <HotelDetailsImage hotelName={hotelName} />
          <div
            style={{
              height: "14rem",
              borderBottom: "1px solid lightgray",
            }}
          />
          <DetailsOverview />
          <div
            style={{
              height: "11rem",
              borderBottom: "1px solid lightgray",
            }}
          />
          <HotelDetailList />
        </Container>
      </Wrapper>

      <MyLocation />
    </>
  );
};
export default HotelDetail;
