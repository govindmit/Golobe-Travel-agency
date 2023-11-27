import { Box, Paper, Radio, Typography } from "@mui/material";

const BookingPay = () => {
  return (
    <>
      <Paper
        style={{
          width: "60%",
          //   height: "100%",
          padding: 16,
          background: "white",
          boxShadow: "0px 4px 16px rgba(17, 34, 17, 0.05)",
          borderRadius: 12,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          //   gap: 16,
          display: "flex",
        }}
      >
        <Box
          style={{
            alignSelf: "stretch",
            padding: 16,
            background: "#8DD3BB",
            borderRadius: 12,
            justifyContent: "space-between",
            alignItems: "flex-start",
            display: "flex",
          }}
        >
          <Box
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 8,
              display: "flex",
            }}
          >
            <Typography
              style={{
                color: "#112211",
                fontSize: 16,
                fontFamily: "TradeGothic LT Extended",
                fontWeight: "700",
              }}
            >
              Pay in full
            </Typography>

            <Typography
              style={{
                color: "#112211",
                fontSize: 14,
                fontFamily: "Montserrat",
                fontWeight: "400",
              }}
            >
              Pay the total and you are all set
            </Typography>
          </Box>

          <Box>
            <Radio
              sx={{ color: "white" }}
              checked
              value="a"
              name="radio-buttons"
            />
          </Box>
        </Box>

        <Box
          style={{
            marginTop: 15,
            alignSelf: "stretch",
            paddingLeft: 16,
            paddingRight: 16,
            justifyContent: "flex-end",
            alignItems: "flex-start",
            gap: 46,
            display: "flex",
          }}
        >
          <Box
            style={{
              flex: "1 1 0",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 12,
              display: "flex",
            }}
          >
            <Typography
              style={{
                alignSelf: "stretch",
                color: "#112211",
                fontSize: 16,
                fontFamily: "TradeGothic LT Extended",
                fontWeight: "700",
              }}
            >
              Pay part now, part later
            </Typography>
            <Typography
              style={{
                alignSelf: "stretch",
                height: 55,
                color: "#112211",
                fontSize: 14,
                fontFamily: "Montserrat",
                fontWeight: "400",
              }}
            >
              Pay $207.43 now, and the rest ($207.43) will be automatically
              charged to the same payment method on Nov 14, 2022. No extra fees.
              <br />{" "}
            </Typography>
            <Typography
              style={{
                color: "#112211",
                fontSize: 12,
                fontFamily: "Montserrat",
                fontWeight: "500",
                textDecoration: "underline",
              }}
            >
              More info
            </Typography>
          </Box>

          <Box>
            <Radio value="a" name="radio-buttons" />
          </Box>
        </Box>
      </Paper>
    </>
  );
};
export default BookingPay;
