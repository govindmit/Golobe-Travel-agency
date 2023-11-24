import { Grid, Box, Button, Paper, Typography } from "@mui/material";
import NearMeIcon from "@mui/icons-material/NearMe";
import Wrapper from "../../assets/wrapper/CardCss";

const CardContainer = ({ title, image, desc, text }) => {
  return (
    <Wrapper>
      <Grid>
        <Paper style={{ position: "relative", width: "90%", height: "97%" }}>
          <img src={image} alt="Flights" className="image" />
          <div className="box-div">
            <Box p={3} className="box-container">
              <Typography variant="h4" className="box-title">
                {title}
              </Typography>
              <Typography variant="body1" className="box-desc">
                {desc}
              </Typography>
              <Button variant="outlined" className="box-btn">
                <span className="icon">{<NearMeIcon />}</span>
                {text}
              </Button>
            </Box>
          </div>
        </Paper>
      </Grid>
    </Wrapper>
  );
};
export default CardContainer;