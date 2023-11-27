import { Box, Button, Grid, Typography } from "@mui/material";

const HotelPrice = () => {
  return (
    <>
      <Grid
        style={{
          width: "34%",
          top: "8rem",
          position: "absolute",
          right: "2rem",
          // height: "100%",
          padding: 24,
          background: "white",
          boxShadow: "0px 4px 16px rgba(17, 34, 17, 0.05)",
          borderRadius: 12,
          overflow: "hidden",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          // gap: 16,
          // display: "flex",
        }}
      >
        <Box
          style={{
            alignSelf: "stretch",
            justifyContent: "flex-start",
            alignItems: "center",
            // gap: 24,
            display: "inline-flex",
          }}
        >
          <img
            style={{ width: 121, height: 120, padding: 16, borderRadius: 12 }}
            src="https://via.placeholder.com/121x120"
          />
          <Box
            style={{
              width: 257,
              alignSelf: "stretch",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              // gap: 16,
              display: "flex",
            }}
          >
            {/* <div
              style={{
                alignSelf: "stretch",
                height: 72,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 4,
                display: "flex",
              }}
            > */}
            <Typography
              style={{
                alignSelf: "stretch",
                opacity: 0.75,
                color: "#112211",
                fontSize: 16,
                fontFamily: "Montserrat",
                fontWeight: "500",
                wordWrap: "break-word",
              }}
            >
              CVK Park Bosphorus...
            </Typography>
            <Typography
              style={{
                alignSelf: "stretch",
                color: "#112211",
                fontSize: 20,
                fontFamily: "Montserrat",
                fontWeight: "600",
                wordWrap: "break-word",
              }}
            >
              Superior room - 1 double bed or 2 twin beds
            </Typography>
            {/* </div> */}

            <Box
              style={{
                alignSelf: "stretch",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 8,
                display: "flex",
              }}
            >
              <Box
                style={{
                  width: 0,
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 10,
                  display: "inline-flex",
                  alignSelf: "stretch",
                  height: 15,
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 8,
                  paddingBottom: 8,
                  borderRadius: 4,
                  border: "1px #8DD3BB solid",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 4,
                  display: "inline-flex",
                }}
              >
                <Button
                  style={{
                    color: "#112211",
                    fontSize: 12,
                    fontFamily: "Montserrat",
                    fontWeight: "500",
                    wordWrap: "break-word",
                  }}
                >
                  4.2
                </Button>
              </Box>

              <Typography>
                <span
                  style={{
                    color: "#112211",
                    fontSize: 12,
                    fontFamily: "Montserrat",
                    fontWeight: "700",
                    wordWrap: "break-word",
                  }}
                >
                  Very Good
                </span>
                <span
                  style={{
                    color: "#112211",
                    fontSize: 12,
                    fontFamily: "Montserrat",
                    fontWeight: "500",
                    wordWrap: "break-word",
                  }}
                >
                  54 reviews
                </span>
              </Typography>
            </Box>
          </Box>
        </Box>

        <div
          style={{
            alignSelf: "stretch",
            height: 0.5,
            opacity: 0.25,
            background: "#112211",
            marginTop: 12,
          }}
        />

        <Box>
          <span
            style={{
              color: "#112211",
              fontSize: 16,
              fontFamily: "Montserrat",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Your booking is protected by{" "}
          </span>
          <span
            style={{
              color: "#112211",
              fontSize: 16,
              fontFamily: "Montserrat",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            golobe
          </span>
        </Box>

        <div
          style={{
            alignSelf: "stretch",
            height: 0.5,
            opacity: 0.25,
            background: "#112211",
            marginTop: 12,
          }}
        />

        <Box
          style={{
            alignSelf: "stretch",
            height: "fit-content",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 16,
            display: "flex",
          }}
        >
          <Typography
            style={{
              marginTop: 12,
              color: "#112211",
              fontSize: 16,
              fontFamily: "TradeGothic LT Extended",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            Price Details
          </Typography>

          <Box
            style={{
              alignSelf: "stretch",
              justifyContent: "space-between",
              alignItems: "flex-start",
              display: "inline-flex",
            }}
          >
            <Typography
              style={{
                color: "#112211",
                fontSize: 16,
                fontFamily: "Montserrat",
                fontWeight: "500",
                wordWrap: "break-word",
              }}
            >
              Base Fare
            </Typography>
            <Typography
              style={{
                color: "#112211",
                fontSize: 16,
                fontFamily: "Montserrat",
                fontWeight: "600",
                wordWrap: "break-word",
              }}
            >
              $240
            </Typography>
          </Box>

          <Box
            style={{
              alignSelf: "stretch",
              justifyContent: "space-between",
              alignItems: "flex-start",
              display: "inline-flex",
            }}
          >
            <Typography
              style={{
                color: "#112211",
                fontSize: 16,
                fontFamily: "Montserrat",
                fontWeight: "500",
                wordWrap: "break-word",
              }}
            >
              Discount
            </Typography>
            <Typography
              style={{
                color: "#112211",
                fontSize: 16,
                fontFamily: "Montserrat",
                fontWeight: "600",
                wordWrap: "break-word",
              }}
            >
              $0
            </Typography>
          </Box>

          <Box
            style={{
              alignSelf: "stretch",
              justifyContent: "space-between",
              alignItems: "flex-start",
              display: "inline-flex",
            }}
          >
            <Typography
              style={{
                color: "#112211",
                fontSize: 16,
                fontFamily: "Montserrat",
                fontWeight: "500",
                wordWrap: "break-word",
              }}
            >
              Taxes
            </Typography>
            <Typography
              style={{
                color: "#112211",
                fontSize: 16,
                fontFamily: "Montserrat",
                fontWeight: "600",
                wordWrap: "break-word",
              }}
            >
              $20
            </Typography>
          </Box>

          <Box
            style={{
              alignSelf: "stretch",
              justifyContent: "space-between",
              alignItems: "flex-start",
              display: "inline-flex",
            }}
          >
            <Typography
              style={{
                color: "#112211",
                fontSize: 16,
                fontFamily: "Montserrat",
                fontWeight: "500",
                wordWrap: "break-word",
              }}
            >
              Service Fee
            </Typography>
            <Typography
              style={{
                color: "#112211",
                fontSize: 16,
                fontFamily: "Montserrat",
                fontWeight: "600",
                wordWrap: "break-word",
              }}
            >
              $5
            </Typography>
          </Box>
        </Box>

        <div
          style={{
            alignSelf: "stretch",
            height: 0.5,
            opacity: 0.25,
            background: "#112211",
            marginTop: 12,
            marginBottom: 12,
          }}
        />

        <Box
          style={{
            alignSelf: "stretch",
            justifyContent: "space-between",
            alignItems: "flex-start",
            display: "inline-flex",
          }}
        >
          <Typography
            style={{
              color: "#112211",
              fontSize: 16,
              fontFamily: "Montserrat",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Total
          </Typography>
          <Typography
            style={{
              color: "#112211",
              fontSize: 16,
              fontFamily: "Montserrat",
              fontWeight: "600",
              wordWrap: "break-word",
            }}
          >
            $265
          </Typography>
        </Box>
      </Grid>
    </>
  );
};
export default HotelPrice;
