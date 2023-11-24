import React from "react";
import { Container, Grid, Box } from "@mui/material";
import Rectangle1 from "../../assets/images/Rectangle1.png";
import Rectangle2 from "../../assets/images/Rectangle2.png";
import Rectangle3 from "../../assets/images/Rectangle3.png";
import Rectangle4 from "../../assets/images/Rectangle4.png";
import Wrapper from "../../assets/wrapper/backPackingsidecard";

const BackPackSideCard = () => {
  return (
    <Wrapper>
      <Container>
        <Grid >
          <div className="center-div">
            {/* <Box p={3} className="box-container"> */}
              <div className="first-div">
                <img src={Rectangle1} className="img" />
                <img src={Rectangle2} className="img" />
              </div>
              <div className="second-div">
                <img src={Rectangle4} className="img" />
                <img src={Rectangle3} className="img" />
              </div>
            {/* </Box> */}
          </div>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default BackPackSideCard;
