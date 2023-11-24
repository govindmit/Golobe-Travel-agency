import Wrapper from "../../../assets/wrapper/HotelDetailsCss";
import { Container } from "@mui/material";
import HotelDetailList from "./HotelDetailList";
import DetailsOverview from "./DetailsOverview";
import HotelDetailsImage from "./HotelDetailsImage";
import MyLocation from "./Mylocation";
import HotelDetailsNav from "./HotelDetailsNav";

const HotelDetail = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <HotelDetailsNav />
          <HotelDetailsImage />
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
