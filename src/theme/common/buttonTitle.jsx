import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import NearMeIcon from "@mui/icons-material/NearMe";
import Wrapper from "../../assets/wrapper/bookingSearch";

const ButtonTitle = ({ title, onShowPlacesClick }) => {
  const handleClick = () => {
    if (onShowPlacesClick) {
      onShowPlacesClick();
    }
  };
  return (
    <Wrapper>
      <CardActionArea>
        <CardContent>
          <CardMedia className="buttonDiv">
            <Typography className="buttonStyles">
              <AddIcon /> Add promo code
            </Typography>
            <Typography className="showFlight">
              <NearMeIcon onClick={handleClick} /> Show {title}
            </Typography>
          </CardMedia>
        </CardContent>
      </CardActionArea>
    </Wrapper>
  );
};
export default ButtonTitle;
