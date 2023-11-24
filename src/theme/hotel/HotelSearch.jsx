import { Grid } from "@mui/material";
import MiniCard from "../common/miniCard";
import img1 from "../../assets/images/plan-trip/trip-1.jpg";
import img2 from "../../assets/images/plan-trip/trip-2.jpg";
import img3 from "../../assets/images/plan-trip/trip-3.jpg";
import img4 from "../../assets/images/plan-trip/trip-4.jpg";
import Wrapper from "../../assets/wrapper/tripPlan";

const data = [
  {
    id: 1,
    location: "Istanbul",
    country: "Turkey",
    img: img1,
    text: "325 places",
  },
  {
    id: 2,
    location: "Sydney",
    country: "Australia",
    img: img2,
    text: "325 places",
  },
  {
    id: 3,
    location: "Baku",
    country: "Azerbaijan",
    img: img3,
    text: "325 places",
  },
  {
    id: 4,
    location: "Male",
    country: "Maldives",
    img: img4,
    text: "325 places",
  },
];

const HotelSearch = () => {
  return (
    <>
      <Wrapper>
        <h1>Your recent searches</h1>
        <Grid container spacing={3}>
          {data.map((trip) => (
            <Grid item key={trip.id} xs={2} sm={3} md={3} lg={3}>
              <MiniCard {...trip} />
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    </>
  );
};
export default HotelSearch;
