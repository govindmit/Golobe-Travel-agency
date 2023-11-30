import React from "react";
import Wrapper from "../../../assets/wrapper/AddCardWrapper";
import { Card, Typography, Button, Container, Box, Radio } from "@mui/material";
import visaicon from "../../../assets/images/visaicon.svg";
import addicon from "../../../assets/images/addicon.png";
import Navbar from "../../common/navbar";
import HotelBooking from "./hotelBooking";

const AddCard = () => {
  
  const data = "**** 4321 02/27";
  return (
    <Wrapper>
      <Navbar/>
     
      <Container>
        <Card className="card">
          <Box>
            <Button className="box-btn">
              <div>
                <img style={{ width: "33px" }} src={visaicon} />
              </div>

              <Typography style={{ marginRight: "30rem" }}>{data}</Typography>

              <div>
                <Radio
                  //   checked={true}
                  //   onChange={handleChange}
                  value="a"
                  name="radio-buttons"
                />
              </div>
            </Button>
            <Box className="box">
              <img className="icon" src={addicon} />
              <Typography className="text3">Add a new card</Typography>
            </Box>
          </Box>
        </Card>
      </Container>
    </Wrapper>
  );
};
export default AddCard;
