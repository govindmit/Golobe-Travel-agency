import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { IoAirplaneSharp, IoBed } from "react-icons/io5";
import BookingInput from "./bookingInput";
import Wrapper from "../../assets/wrapper/bookingSearch";
import HotelInput from "../hotel/HotelInput";

export default function BookingCard(text) {
  const contain = text.text;
  console.log(contain);
  const [isStayPage, setIsStayPage] = React.useState(false);

  const handleStaysClick = () => {
    setIsStayPage(true);
  };

  const handleFlightClick = () => {
    setIsStayPage(false);
  };
  return (
    <Wrapper>
      <Card className="card">
        <CardActionArea>
          <CardContent>
            {contain ? (
              <Typography variant="h6">{contain}</Typography>
            ) : (
              <CardMedia className="typeDiv">
                <Typography
                  className={`buttonStyles ${isStayPage ? "" : "active"}`}
                  onClick={handleFlightClick}
                >
                  <IoAirplaneSharp /> Flights
                </Typography>
                <Typography
                  className={`buttonStyles ${isStayPage ? "active" : ""}`}
                  onClick={handleStaysClick}
                >
                  <IoBed /> Stays
                </Typography>
              </CardMedia>
            )}

            <div>{isStayPage ? <HotelInput /> : <BookingInput />}</div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Wrapper>
  );
}
