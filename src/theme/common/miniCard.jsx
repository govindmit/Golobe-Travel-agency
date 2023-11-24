import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import Wrapper from "../../assets/wrapper/tripPlan";

const MiniCard = ({ img, country, location, text }) => {
  return (
    <Wrapper>
      <Paper className="card">
        <Box display="flex" alignItems="center" spacing={1}>
          <img src={img} alt={country} className="img" />
          <Box display="flex" flexDirection="column" className="trip-text-div">
            <Typography className="trip-data-text">
              {location}, {country}
            </Typography>
            <Typography className="trip-text-content">{text}</Typography>
          </Box>
        </Box>
      </Paper>
    </Wrapper>
  );
};

export default MiniCard;
