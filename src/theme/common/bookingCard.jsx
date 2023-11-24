import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import { IoAirplaneSharp, IoBed } from "react-icons/io5";
import BookingInput from "./bookingInput";
import Wrapper from "../../assets/wrapper/bookingSearch";

export default function BookingCard({ text }) {
  return (
    <Wrapper>
      <Card className="card">
        <CardActionArea>
          <CardContent>
            {text ? (
              <CardMedia className="textDiv">
                <h3 className="buttonStyles">{text}</h3>
              </CardMedia>
            ) : (
              <CardMedia className="typeDiv">
                <Typography className="buttonStyles">
                  <IoAirplaneSharp /> Flights
                </Typography>
                <Typography className="buttonStyles">
                  <IoBed /> Stays
                </Typography>
              </CardMedia>
            )}

            <div>
              <BookingInput />
            </div>
          
          </CardContent>
        </CardActionArea>
      </Card>
    </Wrapper>
  );
}
