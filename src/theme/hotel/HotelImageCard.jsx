import { Box, Container, Grid, Typography } from "@mui/material";
import Wrapper from "../../assets/wrapper/HotelListCss";

const HotelImageCard = ({ src }) => {
  return (
    <>
      <Wrapper>
        {/* <Grid className="image-box"> */}
        <Grid>
          <img className="list-image" src={src} />
          <Box className="small-div">9 Images</Box>
        </Grid>
      </Wrapper>
    </>
  );
};
export default HotelImageCard;
