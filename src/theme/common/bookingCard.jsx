import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import { IoAirplaneSharp, IoBed } from "react-icons/io5";
import BookingInput from "./bookingInput";
import AddIcon from "@mui/icons-material/Add";
import NearMeIcon from "@mui/icons-material/NearMe";
import Wrapper from "../../assets/wrapper/bookingSearch";

export default function BookingCard() {
  return (
    <Wrapper>
      <Card className="card">
        <CardActionArea>
          <CardContent>
            <CardMedia className="typeDiv">
              <Typography className="buttonStyles">
                <IoAirplaneSharp /> Flights
              </Typography>
              <Typography className="buttonStyles">
                <IoBed /> Stays
              </Typography>
            </CardMedia>
            <div>
              <BookingInput />
            </div>
            <CardMedia className="buttonDiv">
              <Typography className="buttonStyles">
                <AddIcon /> Add promo code
              </Typography>
              <Typography className="showFlight">
                <NearMeIcon /> Show Flights
              </Typography>
            </CardMedia>
          </CardContent>
        </CardActionArea>
      </Card>
    </Wrapper>
  );
}
