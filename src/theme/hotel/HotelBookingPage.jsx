import { Button, Container, Grid, Paper } from "@mui/material";
import HotelInput from "./HotelInput";
import SearchIcon from "@mui/icons-material/Search";
import Wrapper from "../../assets/wrapper/HotelBookingCss";
import { useEffect, useState } from "react";

const HotelBookingPage = () => {
  const [searchInfo, setSearchInfo] = useState(null);
  useEffect(() => {
    const searchInfoString = localStorage.getItem("searchInfo");
    if (searchInfoString) {
      const parsedSearchInfo = JSON.parse(searchInfoString);
      // console.log("Data from localStorage:", parsedSearchInfo);
      setSearchInfo(parsedSearchInfo);
    }
  }, []);
  return (
    <>
      <Wrapper>
        <Container style={{ marginTop: 90 }}>
          <Grid
            style={{
              position: "relative",
              top: 25,
              left: 70,
            }}
          >
            <Paper className="paper-container">
              {searchInfo && (
                <HotelInput searchInfo={searchInfo} HomePage={true} />
              )}
              <Button variant="contained" className="search-btn">
                <SearchIcon />
              </Button>
            </Paper>
          </Grid>
        </Container>
      </Wrapper>
    </>
  );
};
export default HotelBookingPage;
