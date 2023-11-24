import { Box, Grid } from "@mui/material";

const HotelPrice = () => {
  return (
    <>
      <Grid
        style={{
          width: "34%",
          top: "8rem",
          position: "absolute",
          right: "2rem",
          //   height: "100%",
          //   padding: 24,
          //   background: "white",
          boxShadow: "0px 4px 16px rgba(17, 34, 17, 0.05)",
          //   borderRadius: 12,
          //   overflow: "hidden",
          //   flexDirection: "column",
          //   justifyContent: "flex-start",
          //   alignItems: "flex-start",
          //   gap: 16,
          //   display: "inline-flex",
        }}
      >
        <Box
          style={{
            alignSelf: "stretch",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 24,
            display: "inline-flex",
          }}
        >
          <img
            style={{ width: 121, height: 120, padding: 16, borderRadius: 12 }}
            src="https://via.placeholder.com/121x120"
          />
        </Box>
      </Grid>
    </>
  );
};
export default HotelPrice;
