import { Box, Container, Grid, Typography } from "@mui/material";
import Wrapper from "../../assets/wrapper/HotelListCss";

const HotelImageCard = ({ src }) => {
  return (
    <>
      <Wrapper>
        <Container>
          <Box className="image-box">
            <img className="list-image" src={src} />
            <Box className="small-div">9 Images</Box>
          </Box>
        </Container>
      </Wrapper>
    </>
  );
};
export default HotelImageCard;
