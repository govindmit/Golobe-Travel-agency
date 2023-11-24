import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import HotelInput from "./HotelInput";
import Wrapper from "../../assets/wrapper/bookingSearch";

const HotelCard = () => {
  return (
    <>
      <Wrapper>
        <Card className="card">
          <CardActionArea>
            <CardContent>
              <CardMedia className="typeDiv">
                <Typography
                  className="buttonStyles"
                  sx={{ fontSize: "20px", fontWeight: "600" }}
                >
                  Where are you flying?
                </Typography>
              </CardMedia>

              <HotelInput />
            </CardContent>
          </CardActionArea>
        </Card>
      </Wrapper>
    </>
  );
};
export default HotelCard;
