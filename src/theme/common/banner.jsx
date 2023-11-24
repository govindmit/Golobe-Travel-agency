import Wrapper from "../../assets/wrapper/banner";
import Navbar from "./navbar";
import { Box, Grid, Paper, Typography } from "@mui/material";

const Banner = ({ img }) => {
  return (
    <>
      <Wrapper>
        <Grid>
          <Paper className="root">
            <img style={{ width: "1270px", height: "537px" }} src={img} />
            <div className="content">
              <Box className="Box-content">
                <Typography variant="h2" className="title">
                  Make your travel wishlist, we’ll do the rest
                </Typography>
                <Typography variant="body1" className="subtitle">
                  Special offers to suit your plan
                </Typography>
              </Box>
            </div>
          </Paper>
        </Grid>
      </Wrapper>
      <Navbar />
    </>
  );
};
export default Banner;
