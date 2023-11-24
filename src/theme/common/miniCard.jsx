import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const MiniCard = ({ img, country, location, text }) => {
  return (
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
  );
};

export default MiniCard;
