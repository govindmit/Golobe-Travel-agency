import React, { useState } from "react";
import { Container, Box, Card, Grid, Typography } from "@mui/material";
import Wrapper from "../../assets/wrapper/Boxwrapper";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const BoxStyle = ({ hotelDataLength }) => {
  const [selectedBox, setSelectedBox] = useState(null);
  const [toggleIcon, setToggleIcon] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);


  const toggle = () => {
    setToggleIcon(!toggleIcon);
    setShowDropdown(!showDropdown);
  };

  const handleBoxClick = (box) => {
    setSelectedBox(box);
  };

  return (
    <Wrapper>
      <Container>
        <Grid>
          <Card className="card">
            <Box
              className={`box ${selectedBox === "hotels" ? "selected" : ""}`}
              onClick={() => handleBoxClick("hotels")}
              sx={{ borderRight: "1px solid #ccc" }}
            >
              <Typography className="text" >Hotels</Typography>
              <Typography className="text2">257 places</Typography>
            </Box>

            <Box
              className={`box ${selectedBox === "motels" ? "selected" : ""}`}
              onClick={() => handleBoxClick("motels")}
              sx={{ borderRight: "1px solid #ccc" }}
            >
              <Typography className="text">Motels</Typography>
              <Typography className="text2">51 places</Typography>
            </Box>

            <Box
              className={`box ${selectedBox === "resorts" ? "selected" : ""}`}
              onClick={() => handleBoxClick("resorts")}
              sx={{ borderRight: "1px solid #ccc" }}
            >
              <Typography className="text">Resorts</Typography>
              <Typography className="text2">72 places</Typography>
            </Box>
          </Card>

          <div className="card2">
            <div style={{ display: "flex" }}>
              <Typography
                style={{ marginLeft: "0.5rem", fontFamily: "system-ui" }}
              >
                showing {hotelDataLength > 0 ? 4 : hotelDataLength} of
              </Typography>
              <Typography
                style={{
                  color: "#FF8682",
                  marginLeft: "0.5rem",
                  fontSize: "1rem",
                }}
              >
                {hotelDataLength ? hotelDataLength : 0} places
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
                onClick={toggle}
                style={{ background: "none", border: "none" }}
              >
                {toggleIcon ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </button>
              {showDropdown && (
        <div
          style={{
            position: 'absolute',
            top: '2rem',
            right: 0,
            width: '150px',
            padding: '10px',
            background: '#fff',
            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
            zIndex: 1,
          }}
        >
         
          <div>Bosphorus Hotel Istanbul</div>
          <div>Aqua Belek Turkey</div>
          <div>Shangrila sydney</div>
        </div>
      )}
    </div>
    </div>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default BoxStyle;
