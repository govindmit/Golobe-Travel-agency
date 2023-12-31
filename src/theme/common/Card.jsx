import { Container, Grid } from "@mui/material";
import CardContainer from "./CardContainer";
import Wrapper from "../../assets/wrapper/CardCss";
import HotelImg from "../../assets/images/home-page-hotel-img.png";
import FlightImg from "../../assets/images/home-page-flight-img.png";

const data = [
  {
    id: 1,
    title: "Flights",
    desc: "Search Flights & Places Hire to our most popular destinations",
    image: FlightImg,
    text: "Flights",
  },
  {
    id: 2,
    title: "Hotels",
    desc: "Search hotels & Places Hire to our most popular destinations",
    image: HotelImg,
    text: "Hotels",
  },
];

const Card = () => {
  return (
    <Wrapper>
      <Container>
        <Grid container spacing={0} sx={{ gap: "20px" }}>
          {data.map((value) => (
            <CardContainer key={value.id} {...value} />
          ))}
        </Grid>
      </Container>
    </Wrapper>
  );
};
export default Card;
