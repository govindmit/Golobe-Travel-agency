import { Grid, Box, Button, Paper, Typography } from "@mui/material";
import NearMeIcon from "@mui/icons-material/NearMe";
import Wrapper from "../../assets/wrapper/CardCss";
import { useNavigate } from "react-router-dom";

const CardContainer = ({ title, image, desc, text }) => {
  const navigate = useNavigate();

  const handleSearch = (text) => {
    console.log(text);
    if (text === "Hotels") {
      navigate("/hotel");
    } else if (text === "Flights") {
      navigate("/flight");
    }
  };

  return (
    <Wrapper>
      <Grid>
        <Paper
          style={{
            position: "relative",
            width: "90%",
            height: "99%",
            borderRadius: 15,
          }}
        >
          <Box>
            <img src={image} alt="Flights" className="image" />
          </Box>

          <div className="box-div">
            <Box p={3} className="box-container">
              <Typography variant="h4" className="box-title">
                {title}
              </Typography>
              <Typography variant="body1" className="box-desc">
                {desc}
              </Typography>
              <Button
                variant="outlined"
                className="box-btn"
                onClick={() => handleSearch(text)}
              >
                <span className="icon">{<NearMeIcon />}</span>
                Show {text}
              </Button>
            </Box>
          </div>
        </Paper>
      </Grid>
    </Wrapper>
  );
};
export default CardContainer;
