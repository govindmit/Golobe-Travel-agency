import { Box, Card, Container, Grid, Typography } from "@mui/material";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";
import Wrapper from "../../assets/wrapper/flightListSorting";
import MenuIcon from "@mui/icons-material/Menu";

const FlightListSorting = () => {
  const [toggleIcon, setToggleIcon] = useState(true);
  const toggle = () => {
    setToggleIcon(!toggleIcon);
  };
  return (
    <Wrapper>
      <Container>
        <Grid>
          <Card className="card">
            <Box className="card-box" >
              <Typography className="text">Cheapest</Typography>
              <Typography className="text2">$99 .2h18m</Typography>
            </Box>

            <Box className="card-box" >
              <Typography className="text">Best</Typography>
              <Typography className="text2">$99 .2h18m</Typography>
            </Box>

            <Box className="card-box" >
              <Typography className="text">Quickest</Typography>
              <Typography className="text2">$99 .2h18m</Typography>
            </Box>
            <Box className="card-box" >
              <Typography className="text">
                <MenuIcon />
                Other Sort
              </Typography>
            </Box>
          </Card>

          <div className="card2">
            <div style={{ display: "flex" }}>
              <Typography
                style={{ marginLeft: "0.5rem", fontFamily: "system-ui" }}
              >
                showing 4 of
              </Typography>
              <Typography
                style={{
                  color: "#FF8682",
                  marginLeft: "0.5rem",
                  fontSize: "1rem",
                }}
              >
                257 places
              </Typography>
            </div>
            <div style={{ display: "flex" }}>
              <Typography style={{ fontSize: "15px", fontFamily: "system-ui" }}>
                <span style={{ fontWeight: "200" }}>sort by</span>
              </Typography>
              <Typography
                style={{
                  marginLeft: "0.5rem",
                  fontSize: "1rem",
                  color: "#112211",
                }}
              >
                Recommended
              </Typography>
              <button
                onClick={() => toggle()}
                style={{ background: "none", border: "none" }}
              >
                {toggleIcon ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </button>
            </div>
          </div>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default FlightListSorting;
