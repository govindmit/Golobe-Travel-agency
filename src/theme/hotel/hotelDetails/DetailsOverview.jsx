import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { Box, Grid, Typography } from "@mui/material";
const DetailsOverview = () => {
  return (
    <>
      <Box className="overview-box">
        <Box className="over-div">
          <Typography className="over-text" variant="h6">
            Overview
          </Typography>
          <Typography className="over-body" variant="body1">
            Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park
            Bosphorus Hotel Istanbul has risen from the ashes of the historic
            Park Hotel, which also served as Foreign Affairs Palace 120 years
            ago and is hosting its guests by assuming this hospitality mission.
            With its 452 luxurious rooms and suites, 8500 m2 SPA and fitness
            area, 18 meeting rooms including 4 dividable ones and 3 terraces
            with Bosphorus view, Istanbuls largest terrace with Bosphorus view
            (4500 m2) and latest technology infrastructure, CVK Park Bosphorus
            Hotel Istanbul is destined to be the popular attraction point of the
            city. Room and suite categories at various sizes with city and
            Bosphorus view, as well as 68 separate luxury suites, are offered to
            its special guests as a wide variety of selection.
          </Typography>
        </Box>

        <Box className="over-container">
          <Grid className="over-grid" sx={{ background: "#8DD3BB" }}>
            <Grid className="show-grid">
              <Typography className="rev-point">4.2</Typography>
              <div className="rev-div">
                <Typography className="rev-text">Very good</Typography>

                <Typography className="rev-text-count">371 reviews</Typography>
              </div>
            </Grid>
          </Grid>

          <Grid className="over-grid">
            <Grid className="show-grid">
              <div className="stars-icon-div">
                <AutoAwesomeIcon sx={{ width: "35px", height: "35px" }} />
              </div>
              <Typography className="overview-text">Near park</Typography>
            </Grid>
          </Grid>

          <Grid className="over-grid">
            <Grid className="show-grid">
              <div className="stars-icon-div">
                <AutoAwesomeIcon sx={{ width: "35px", height: "35px" }} />
              </div>
              <Typography className="overview-text">Near nightlife</Typography>
            </Grid>
          </Grid>

          <Grid className="over-grid">
            <Grid className="show-grid">
              <div className="stars-icon-div">
                <AutoAwesomeIcon sx={{ width: "35px", height: "35px" }} />
              </div>
              <Typography className="overview-text">Near theater</Typography>
            </Grid>
          </Grid>

          <Grid className="over-grid">
            <Grid className="show-grid">
              <div className="stars-icon-div">
                <AutoAwesomeIcon sx={{ width: "35px", height: "35px" }} />
              </div>
              <Typography className="overview-text">Clean Hotel</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
export default DetailsOverview;
