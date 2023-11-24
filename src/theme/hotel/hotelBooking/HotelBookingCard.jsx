import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  Grid,
  Typography,
} from "@mui/material";
import BookingImg from "../../../assets/images/booking-img/book-img.png";
import FilledImg from "../../../../public/building.svg";
import Line5 from "../../../../public/Line 5.svg";
import Line6 from "../../../../public/Line 6.svg";

const HotelBookingCard = () => {
  return (
    <>
      <Grid
        style={{
          position: "relative",
          top: "6rem",
          left: 0,
          // width: "64%",
          height: "100%",
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 32,
          paddingBottom: 32,
          background: "white",
          boxShadow: "0px 0px 5px 3px rgba(17, 34, 17, 0.05)",
          borderRadius: 12,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 24,
          display: "inline-flex",
        }}
      >
        <Box>
          <Box
            style={{
              alignSelf: "stretch",
              justifyContent: "space-between",
              alignItems: "center",
              display: "flex",
            }}
          >
            {/* <Box
              style={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 16,
                display: "inline-flex",
              }}
            > */}
            <div
              style={{
                width: "36rem",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 16,
                display: "flex",
              }}
            >
              <Typography
                style={{
                  flex: "1 1 0",
                  color: "#112211",
                  fontSize: 24,

                  fontWeight: "700",
                }}
              >
                Superior room - 1 double bed or 2 twin beds
              </Typography>
            </div>
            {/* </Box> */}

            {/* <Box
              style={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-end",
                gap: 16,
                display: "inline-flex",
              }}
            > */}
            <Typography style={{ textAlign: "right" }}>
              <span
                style={{
                  color: "#FF8682",
                  fontSize: 32,
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                }}
              >
                $240
              </span>
              <span
                style={{
                  color: "#FF8682",
                  fontSize: 14,
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                }}
              >
                /night
              </span>
            </Typography>
            {/* </Box> */}
          </Box>

          {/* <Box
            style={{
              alignSelf: "stretch",
              // height: 184,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 40,
              display: "flex",
            }}
          > */}
          {/* <Box
            style={{
              alignSelf: "stretch",
              justifyContent: "flex-start",
              alignItems: "center",
              display: "inline-flex",
            }}
          > */}
          <Box
            style={{
              height: 50,
              paddingLeft: 32,
              paddingRight: 32,
              paddingTop: 16,
              paddingBottom: 16,
              background: "white",
              borderRadius: 8,
              border: "0.50px #8DD3BB solid",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 24,
              display: "flex",
              marginTop: 25,
            }}
          >
            <img
              style={{ width: 63, height: 63, borderRadius: 12 }}
              src={BookingImg}
            />
            <Box
              style={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 8,
                display: "inline-flex",
              }}
            >
              <Typography
                style={{
                  color: "#112211",
                  fontSize: 24,
                  fontFamily: "Montserrat",
                  fontWeight: "600",
                  wordWrap: "break-word",
                }}
              >
                CVK Park Bosphorus Hotel Istanbul
              </Typography>
              {/* <div style={{ width: 18, height: 18, position: "relative" }}>
                    <div
                      style={{
                        width: 2.25,
                        height: 2.25,
                        left: 7.88,
                        top: 5.62,
                        position: "absolute",
                        background: "#112211",
                      }}
                    ></div>
                    <div
                      style={{
                        width: 11.25,
                        height: 15.75,
                        left: 3.38,
                        top: 1.12,
                        position: "absolute",
                        background: "#112211",
                      }}
                    ></div>
                  </div> */}
              <Typography
                style={{
                  opacity: 0.75,
                  color: "#112211",
                  fontSize: 14,
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >
                Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
              </Typography>
            </Box>
          </Box>
          {/* </Box> */}

          <Box
            style={{
              width: "100%",
              marginTop: 36,
              alignSelf: "stretch",
              justifyContent: "space-between",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <Box
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: 8,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 8,
                  display: "inline-flex",
                }}
              >
                <Typography
                  style={{
                    color: "#112211",
                    fontSize: 20,
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Thursday, Dec 8
                </Typography>
              </div>

              <div
                style={{
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 8,
                  display: "inline-flex",
                }}
              >
                <Typography
                  style={{
                    opacity: 0.6,
                    color: "#112211",
                    fontSize: 14,
                    fontFamily: "Montserrat",
                    fontWeight: "500",
                    wordWrap: "break-word",
                  }}
                >
                  Check-In
                </Typography>
              </div>
            </Box>

            <Box
              style={{
                transform: "rotate(-90deg)",
                transformOrigin: "25px 1px",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 8,
                display: "flex",
              }}
            >
              <div
                style={{
                  // width: 36,
                  // height: 0,
                  // transform: "rotate(-90deg)",
                  // transformOrigin: "0 0",
                  height: 0,
                  transform: "rotate(-90deg)",
                  transformOrigin: "-24px -6px",
                }}
              >
                <img src={Line6} alt="" />
              </div>
              <div
                style={{
                  // width: 48,
                  // height: 48,
                  // position: "relative",
                  // transform: "rotate(90deg)",
                  // transformOrigin: "0 0",
                  height: 48,
                  transform: "rotate(90deg)",
                  transformOrigin: "12px -10px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    // width: 42,
                    // height: 45,
                    // left: 3,
                    // top: 1.5,
                    // position: "absolute",
                    // background: "#112211",
                    left: 3,
                    top: 1.5,
                    position: "absolute",
                  }}
                >
                  <img src={FilledImg} alt="" />
                </div>
                {/* <div
                  style={{
                    width: 9,
                    height: 18,
                    left: 30,
                    top: 22.5,
                    position: "absolute",
                    background: "black",
                  }}
                ></div> */}
              </div>
              <div
                style={{
                  // width: 36,
                  // height: 0,
                  // transform: "rotate(90deg)",
                  // transformOrigin: "0 0",
                  height: 0,
                  transform: "rotate(90deg)",
                  transformOrigin: "6px -2px",
                }}
              >
                <img src={Line6} alt="" />
              </div>
            </Box>

            <Box
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: 8,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 8,
                  display: "inline-flex",
                }}
              >
                <Typography
                  style={{
                    color: "#112211",
                    fontSize: 20,
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Friday, Dec 9
                </Typography>
              </div>
              <div
                style={{
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 8,
                  display: "inline-flex",
                }}
              >
                <Typography
                  style={{
                    opacity: 0.6,
                    color: "#112211",
                    fontSize: 14,
                    fontFamily: "Montserrat",
                    fontWeight: "500",
                    wordWrap: "break-word",
                  }}
                >
                  Check-Out
                </Typography>
              </div>
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
};
export default HotelBookingCard;
