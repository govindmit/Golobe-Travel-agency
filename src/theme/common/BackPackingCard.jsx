import { Grid, Box, Button, Paper, Typography, Container } from "@mui/material";
import Wrapper from "../../assets/wrapper/BackpackingCss";
import BackPackSideCard from "./BackPackSideCard";
import ContentTitle from "./contentTitle";
const BackPackingCard = () => {
  return (
    <Wrapper>
       <ContentTitle
        title="Fall into travel"
        desc="Going somewhere to celebrate this season? Whether
                 you’re going home or somewhere to roam, 
                   we’ve got the travel tools to get you to your destination."
        btn="See all  "
      />
      <Container>
        <Grid container spacing={0} sx={{ gap: "0rem" }}>
          <div className="box-div">
            <Box p={3} className="box-container">
              <Typography variant="h4" className="box-title">
                BackPacking <br />
                Sri Lanka
              </Typography>
              <Box className="box-text">
                <Typography>FROM</Typography>
                <Typography>$700</Typography>
              </Box>
              <Typography variant="body1" className="box-desc">
                Traveling is unique experience as it's the best way to unplug
                from the pushes and pulls of daily life.it helps us forget about
                our problems,frustration, and fears at home.During our journey
                we experience life in a different ways.We explore new
                places,culture,cuisines,traditions,and ways of living.
              </Typography>
              <Button variant="outlined" className="box-btn">
                Book Flight
              </Button>
            </Box>
          </div>
          <BackPackSideCard/>
        </Grid>
      </Container>
      
    </Wrapper>
  );
};
export default BackPackingCard;
