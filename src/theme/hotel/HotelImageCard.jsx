import { Box, Grid } from "@mui/material";
import Wrapper from "../../assets/wrapper/HotelListCss";

const HotelImageCard = ({ src }) => {

  return (
    <>
      <Wrapper>
        <Grid>
          <Box className="image-box">
            <img className="list-image" src={src} />
            <Box className="small-div">9 Images</Box>
          </Box>
        </Grid>
      </Wrapper>
    </>
  );
};
export default HotelImageCard;
