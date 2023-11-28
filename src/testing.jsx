import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import HotelImg from "../src/assets/images/home-page-flight-img.png";

const Testing = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 40,
          display: "inline-flex",
        }}
      >
        {/* Button */}
        <div
          style={{
            width: 1232,
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 24,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              flex: "1 1 0",
              alignSelf: "stretch",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 16,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                height: 36,
                color: "black",
                fontSize: 32,
                fontFamily: "Montserrat",
                fontWeight: "600",
                wordWrap: "break-word",
              }}
            >
              Reviews
            </div>
            <div
              style={{
                width: 851,
                color: "black",
                fontSize: 16,
                fontFamily: "Montserrat",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              What people says about Golobe facilities
            </div>
          </div>

          <div
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 10,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                height: 40,
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
              <div
                style={{
                  color: "#112211",
                  fontSize: 14,
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >
                See All
              </div>
            </div>
          </div>
        </div>

        <Box
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 24,
            display: "inline-flex",
          }}
        >
          <Paper style={{ width: 450, height: 608, position: "relative" }}>
            <Box
              style={{
                width: 425,
                height: 586,
                left: 25,
                top: 22,
                position: "absolute",
                background: "rgba(141, 211, 187, 0.40)",
                borderRadius: 20,
              }}
            />
            <Box
              style={{
                padding: 24,
                left: -1,
                top: 0,
                position: "absolute",
                background: "white",
                boxShadow: "2px 4px 16px rgba(17, 34, 17, 0.10)",
                borderRadius: 20,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 40,
                display: "inline-flex",
              }}
            >
              <Box
                style={{
                  height: 296,
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 16,
                  display: "flex",
                }}
              >
                <Box
                  style={{
                    alignSelf: "stretch",
                    height: 163,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 16,
                    display: "flex",
                  }}
                >
                  <Typography
                    style={{
                      alignSelf: "stretch",
                      height: 80,
                      color: "#112211",
                      fontSize: 24,
                      fontFamily: "TradeGothic LT Extended",
                      fontWeight: "700",
                      wordWrap: "break-word",
                    }}
                  >
                    “A real sense of community, nurtured”
                    <br />
                  </Typography>
                  <Typography
                    style={{
                      alignSelf: "stretch",
                      height: 67,
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
                        height: 37,
                        opacity: 0.5,
                        color: "#112211",
                        fontSize: 14,
                        fontFamily: "Montserrat",
                        fontWeight: "500",
                        wordWrap: "break-word",
                      }}
                    >
                      Really appreciate the help and support from the staff
                      during these tough times. Shoutout to Katie for helping me
                      always, even when I was out of the country. And always
                      available when needed.
                      <br />
                    </Typography>
                    <Typography
                      style={{
                        alignSelf: "stretch",
                        textAlign: "right",
                        color: "#112211",
                        fontSize: 14,
                        fontFamily: "TradeGothic LT Extended",
                        fontWeight: "700",
                        wordWrap: "break-word",
                      }}
                    >
                      View more
                    </Typography>
                  </Typography>
                </Box>

                <Box
                  style={{
                    alignSelf: "stretch",
                    height: 117,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 20,
                    display: "flex",
                  }}
                >
                  <Box
                    style={{
                      alignSelf: "stretch",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 12,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{ width: 24, height: 24, position: "relative" }}
                    ></div>
                  </Box>

                  {/* UserInfo */}
                  <Box
                    style={{
                      alignSelf: "stretch",
                      height: 73,
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 12,
                      display: "flex",
                    }}
                  >
                    <Box
                      style={{
                        alignSelf: "stretch",
                        height: 37,
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 4,
                        display: "flex",
                      }}
                    >
                      <Typography
                        style={{
                          alignSelf: "stretch",
                          color: "#112211",
                          fontSize: 14,
                          fontFamily: "TradeGothic LT Extended",
                          fontWeight: "700",
                          wordWrap: "break-word",
                        }}
                      >
                        Olga
                      </Typography>

                      <Typography
                        style={{
                          alignSelf: "stretch",
                          opacity: 0.5,
                          color: "#112211",
                          fontSize: 12,
                          fontFamily: "Montserrat",
                          fontWeight: "500",
                          wordWrap: "break-word",
                        }}
                      >
                        Weave Studios – Kai Tak
                      </Typography>
                    </Box>

                    <Box
                      style={{
                        alignSelf: "stretch",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 8,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{ width: 24, height: 24, position: "relative" }}
                      ></div>
                      <Typography
                        style={{
                          flex: "1 1 0",
                          opacity: 0.4,
                          color: "#112211",
                          fontSize: 12,
                          fontFamily: "TradeGothic LT Extended",
                          fontWeight: "700",
                          wordWrap: "break-word",
                        }}
                      >
                        Google
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <img
                style={{ alignSelf: "stretch", height: 200, borderRadius: 8 }}
                src="https://via.placeholder.com/377x200"
              />
            </Box>
          </Paper>

          {/* <div style={{ width: 449, height: 610, position: "relative" }}>
            <div
              style={{
                width: 425,
                height: 586,
                left: 24,
                top: 24,
                position: "absolute",
                background: "rgba(141, 211, 187, 0.40)",
                borderRadius: 20,
              }}
            />
            <div
              style={{
                padding: 24,
                left: 0,
                top: 0,
                position: "absolute",
                background: "white",
                boxShadow: "2px 4px 16px rgba(17, 34, 17, 0.10)",
                borderRadius: 20,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 40,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  height: 298,
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 16,
                  display: "flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 165,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 16,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      height: 80,
                      color: "#112211",
                      fontSize: 24,
                      fontFamily: "TradeGothic LT Extended",
                      fontWeight: "700",
                      wordWrap: "break-word",
                    }}
                  >
                    “The facilities are superb. Clean, slick, bright.”
                    <br />
                  </div>
                  <div
                    style={{
                      alignSelf: "stretch",
                      height: 69,
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 12,
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        alignSelf: "stretch",
                        height: 37,
                        opacity: 0.5,
                        color: "#112211",
                        fontSize: 14,
                        fontFamily: "Montserrat",
                        fontWeight: "500",
                        wordWrap: "break-word",
                      }}
                    >
                      “A real sense of community, nurtured”Really appreciate the
                      help and support from the staff during these tough times.
                      Shoutout to Katie for helping me always, even when I was
                      out of the country. And always available when needed.View
                      moreOlgaWeave Studios – Kai TakGoogle
                      <br />
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        textAlign: "right",
                        color: "#112211",
                        fontSize: 16,
                        fontFamily: "TradeGothic LT Extended",
                        fontWeight: "700",
                        wordWrap: "break-word",
                      }}
                    >
                      View more
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 117,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 20,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 12,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{ width: 24, height: 24, position: "relative" }}
                    >
                      <div
                        style={{
                          width: 22.5,
                          height: 21,
                          left: 0.75,
                          top: 1.5,
                          position: "absolute",
                          background: "#FFC107",
                        }}
                      ></div>
                    </div>
                    <div
                      style={{ width: 24, height: 24, position: "relative" }}
                    >
                      <div
                        style={{
                          width: 22.5,
                          height: 21,
                          left: 0.75,
                          top: 1.5,
                          position: "absolute",
                          background: "#FFC107",
                        }}
                      ></div>
                    </div>
                    <div
                      style={{ width: 24, height: 24, position: "relative" }}
                    >
                      <div
                        style={{
                          width: 22.5,
                          height: 21,
                          left: 0.75,
                          top: 1.5,
                          position: "absolute",
                          background: "#FFC107",
                        }}
                      ></div>
                    </div>
                    <div
                      style={{ width: 24, height: 24, position: "relative" }}
                    >
                      <div
                        style={{
                          width: 22.5,
                          height: 21,
                          left: 0.75,
                          top: 1.5,
                          position: "absolute",
                          background: "#FFC107",
                        }}
                      ></div>
                    </div>
                    <div
                      style={{ width: 24, height: 24, position: "relative" }}
                    >
                      <div
                        style={{
                          width: 22.5,
                          height: 21,
                          left: 0.75,
                          top: 1.5,
                          position: "absolute",
                          background: "#FFC107",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div
                    style={{
                      alignSelf: "stretch",
                      height: 73,
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 12,
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        alignSelf: "stretch",
                        height: 37,
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 4,
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          alignSelf: "stretch",
                          color: "#112211",
                          fontSize: 14,
                          fontFamily: "TradeGothic LT Extended",
                          fontWeight: "700",
                          wordWrap: "break-word",
                        }}
                      >
                        Thomas
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          opacity: 0.5,
                          color: "#112211",
                          fontSize: 12,
                          fontFamily: "Montserrat",
                          fontWeight: "500",
                          wordWrap: "break-word",
                        }}
                      >
                        Weave Studios – Olympic
                      </div>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 8,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{ width: 24, height: 24, position: "relative" }}
                      >
                        <div
                          style={{
                            width: 20,
                            height: 20,
                            left: 2,
                            top: 2,
                            position: "absolute",
                            background: "#FFC107",
                          }}
                        ></div>
                        <div
                          style={{
                            width: 15.66,
                            height: 7.76,
                            left: 3.15,
                            top: 2,
                            position: "absolute",
                            background: "#FF3D00",
                          }}
                        ></div>
                        <div
                          style={{
                            width: 15.61,
                            height: 7.97,
                            left: 3.1,
                            top: 14.03,
                            position: "absolute",
                            background: "#4CAF50",
                          }}
                        ></div>
                        <div
                          style={{
                            width: 10,
                            height: 9.41,
                            left: 12,
                            top: 10,
                            position: "absolute",
                            background: "#1976D2",
                          }}
                        ></div>
                      </div>
                      <div
                        style={{
                          flex: "1 1 0",
                          opacity: 0.4,
                          color: "#112211",
                          fontSize: 12,
                          fontFamily: "TradeGothic LT Extended",
                          fontWeight: "700",
                          wordWrap: "break-word",
                        }}
                      >
                        Google
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                style={{ alignSelf: "stretch", height: 200, borderRadius: 8 }}
                src="https://via.placeholder.com/377x200"
              />
            </div>
          </div> */}

          {/* <div style={{ width: 449, height: 610, position: "relative" }}>
            <div
              style={{
                width: 425,
                height: 586,
                left: 24,
                top: 24,
                position: "absolute",
                background: "rgba(141, 211, 187, 0.40)",
                borderRadius: 20,
              }}
            />
            <div
              style={{
                padding: 24,
                left: 0,
                top: 0,
                position: "absolute",
                background: "white",
                boxShadow: "2px 4px 16px rgba(17, 34, 17, 0.10)",
                borderRadius: 20,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 40,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  height: 298,
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 16,
                  display: "flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 165,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 16,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      height: 80,
                      color: "#112211",
                      fontSize: 24,
                      fontFamily: "TradeGothic LT Extended",
                      fontWeight: "700",
                      wordWrap: "break-word",
                    }}
                  >
                    “A real sense of community, nurtured”
                    <br />
                  </div>
                  <div
                    style={{
                      alignSelf: "stretch",
                      height: 69,
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 12,
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        alignSelf: "stretch",
                        height: 37,
                        opacity: 0.5,
                        color: "#112211",
                        fontSize: 14,
                        fontFamily: "Montserrat",
                        fontWeight: "500",
                        wordWrap: "break-word",
                      }}
                    >
                      Really appreciate the help and support from the staff
                      during these tough times. Shoutout to Katie for helping me
                      always, even when I was out of the country. And always
                      available when needed.
                      <br />
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        textAlign: "right",
                        color: "#112211",
                        fontSize: 16,
                        fontFamily: "TradeGothic LT Extended",
                        fontWeight: "700",
                        wordWrap: "break-word",
                      }}
                    >
                      View more
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 117,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 20,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 12,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{ width: 24, height: 24, position: "relative" }}
                    >
                      <div
                        style={{
                          width: 22.5,
                          height: 21,
                          left: 0.75,
                          top: 1.5,
                          position: "absolute",
                          background: "#FFC107",
                        }}
                      ></div>
                    </div>
                    <div
                      style={{ width: 24, height: 24, position: "relative" }}
                    >
                      <div
                        style={{
                          width: 22.5,
                          height: 21,
                          left: 0.75,
                          top: 1.5,
                          position: "absolute",
                          background: "#FFC107",
                        }}
                      ></div>
                    </div>
                    <div
                      style={{ width: 24, height: 24, position: "relative" }}
                    >
                      <div
                        style={{
                          width: 22.5,
                          height: 21,
                          left: 0.75,
                          top: 1.5,
                          position: "absolute",
                          background: "#FFC107",
                        }}
                      ></div>
                    </div>
                    <div
                      style={{ width: 24, height: 24, position: "relative" }}
                    >
                      <div
                        style={{
                          width: 22.5,
                          height: 21,
                          left: 0.75,
                          top: 1.5,
                          position: "absolute",
                          background: "#FFC107",
                        }}
                      ></div>
                    </div>
                    <div
                      style={{ width: 24, height: 24, position: "relative" }}
                    >
                      <div
                        style={{
                          width: 22.5,
                          height: 21,
                          left: 0.75,
                          top: 1.5,
                          position: "absolute",
                          background: "#FFC107",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div
                    style={{
                      alignSelf: "stretch",
                      height: 73,
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 12,
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        alignSelf: "stretch",
                        height: 37,
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 4,
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          alignSelf: "stretch",
                          color: "#112211",
                          fontSize: 14,
                          fontFamily: "TradeGothic LT Extended",
                          fontWeight: "700",
                          wordWrap: "break-word",
                        }}
                      >
                        Eliot
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          opacity: 0.5,
                          color: "#112211",
                          fontSize: 12,
                          fontFamily: "Montserrat",
                          fontWeight: "500",
                          wordWrap: "break-word",
                        }}
                      >
                        Weave Studios – Kai Tak
                      </div>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 8,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{ width: 24, height: 24, position: "relative" }}
                      >
                        <div
                          style={{
                            width: 20,
                            height: 20,
                            left: 2,
                            top: 2,
                            position: "absolute",
                            background: "#FFC107",
                          }}
                        ></div>
                        <div
                          style={{
                            width: 15.66,
                            height: 7.76,
                            left: 3.15,
                            top: 2,
                            position: "absolute",
                            background: "#FF3D00",
                          }}
                        ></div>
                        <div
                          style={{
                            width: 15.61,
                            height: 7.97,
                            left: 3.1,
                            top: 14.03,
                            position: "absolute",
                            background: "#4CAF50",
                          }}
                        ></div>
                        <div
                          style={{
                            width: 10,
                            height: 9.41,
                            left: 12,
                            top: 10,
                            position: "absolute",
                            background: "#1976D2",
                          }}
                        ></div>
                      </div>
                      <div
                        style={{
                          flex: "1 1 0",
                          opacity: 0.4,
                          color: "#112211",
                          fontSize: 12,
                          fontFamily: "TradeGothic LT Extended",
                          fontWeight: "700",
                          wordWrap: "break-word",
                        }}
                      >
                        Google
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                style={{ alignSelf: "stretch", height: 200, borderRadius: 8 }}
                src="https://via.placeholder.com/377x200"
              />
            </div>
          </div> */}
        </Box>
      </div>
    </>
  );
};
export default Testing;
