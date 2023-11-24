import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import img1 from "../../assets/images/plan-trip/fall-travel-1.jpg";
import img2 from "../../assets/images/plan-trip/fall-travel-2.jpg";
import img3 from "../../assets/images/plan-trip/fall-travel-3.jpg";
import img4 from "../../assets/images/plan-trip/fall-travel-4.jpg";
import Wrapper from "../../assets/wrapper/fallTravel";
import ContentTitle from "./contentTitle";

const travelFallData = [
  {
    id: 1,
    location: "Melbourne",
    text: "An amazing journey",
    charges: 700,
    img: img1,
  },
  {
    id: 2,
    location: "Paris",
    text: "A Paris Adventure",
    charges: 600,
    img: img2,
  },
  {
    id: 3,
    location: "London",
    text: " London eye Adventure",
    charges: 350,
    img: img3,
  },
  {
    id: 4,
    location: "Columbia",
    text: " Amazing street",
    charges: 700,
    img: img4,
  },
];

const TravelFall = () => {
  return (
    <>
      <ContentTitle
        title="Fall into travel"
        desc="Going somewhere to celebrate this season? Whether
                 you’re going home or somewhere to roam, 
                   we’ve got the travel tools to get you to your destination."
        btn="See all  "
      />
      <Wrapper>
        <Container>
          <Grid container>
            {travelFallData.map((data) => {
              return (
                <Grid xs={12} sm={6} md={4} lg={3} key={data.id}>
                  <Paper className="paper">
                    <img src={data.img} alt="Flights" className="image" />
                    <div className="box-div">
                      <Box p={3} className="box-container">
                        <Box className="content-container">
                          <Box>
                            <Typography variant="h5" className="box-title">
                              {data.location}
                            </Typography>
                            <Typography variant="body1" className="box-desc">
                              {data.text}
                            </Typography>
                          </Box>
                          <Box className="charges-box ">
                            <Typography variant="h5" className="box-desc">
                              ${data.charges}
                            </Typography>
                          </Box>
                        </Box>
                        <Button variant="outlined" className="box-btn">
                          Book flight
                        </Button>
                      </Box>
                    </div>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Wrapper>
    </>
  );
};

export default TravelFall;
