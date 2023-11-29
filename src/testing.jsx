import { Paper, Typography } from "@mui/material";

const Testing = () => {
  return (
    <>
      <Paper
        style={{
          width: "100%",
          height: "100%",
          boxShadow: "0px 4px 16px rgba(17, 34, 17, 0.05)",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          display: "inline-flex",
        }}
      >
        <img
          style={{
            width: 300,
            alignSelf: "stretch",
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          }}
          src="https://via.placeholder.com/300x298"
        />
        <Box
          style={{
            width: 72,
            paddingLeft: 8,
            paddingRight: 8,
            paddingTop: 4,
            paddingBottom: 4,
            background: "rgba(255, 255, 255, 0.50)",
            borderRadius: 8,
            backdropFilter: "blur(4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            display: "flex",
          }}
        >
          <Typography
            style={{
              opacity: 0.75,
              color: "#112211",
              fontSize: 12,
              fontFamily: "Montserrat",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            9 images
          </Typography>
        </Box>

        <div
          style={{
            width: 540,
            padding: 24,
            background: "white",
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 24,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 24,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                flex: "1 1 0",
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
                  color: "#112211",
                  fontSize: 20,
                  fontFamily: "TradeGothic LT Extended",
                  fontWeight: "700",
                  wordWrap: "break-word",
                }}
              >
                CVK Park Bosphorus Hotel Istanbul
              </div>
              <div
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 12,
                  display: "flex",
                }}
              >
                <div
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 2,
                    display: "inline-flex",
                  }}
                >
                  <div style={{ width: 16, height: 16, position: "relative" }}>
                    <div
                      style={{
                        width: 2,
                        height: 2,
                        left: 7,
                        top: 5,
                        position: "absolute",
                        background: "#112211",
                      }}
                    ></div>
                    <div
                      style={{
                        width: 10,
                        height: 14,
                        left: 3,
                        top: 1,
                        position: "absolute",
                        background: "#112211",
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      opacity: 0.75,
                      color: "#112211",
                      fontSize: 12,
                      fontFamily: "Montserrat",
                      fontWeight: "500",
                      wordWrap: "break-word",
                    }}
                  >
                    Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
                  </div>
                </div>
                <div
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 32,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: 4,
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        display: "flex",
                      }}
                    >
                      <div
                        style={{ width: 16, height: 16, position: "relative" }}
                      >
                        <div
                          style={{
                            width: 15,
                            height: 14,
                            left: 0.5,
                            top: 1,
                            position: "absolute",
                            background: "#FF8682",
                          }}
                        ></div>
                      </div>
                      <div
                        style={{ width: 16, height: 16, position: "relative" }}
                      >
                        <div
                          style={{
                            width: 15,
                            height: 14,
                            left: 0.5,
                            top: 1,
                            position: "absolute",
                            background: "#FF8682",
                          }}
                        ></div>
                      </div>
                      <div
                        style={{ width: 16, height: 16, position: "relative" }}
                      >
                        <div
                          style={{
                            width: 15,
                            height: 14,
                            left: 0.5,
                            top: 1,
                            position: "absolute",
                            background: "#FF8682",
                          }}
                        ></div>
                      </div>
                      <div
                        style={{ width: 16, height: 16, position: "relative" }}
                      >
                        <div
                          style={{
                            width: 15,
                            height: 14,
                            left: 0.5,
                            top: 1,
                            position: "absolute",
                            background: "#FF8682",
                          }}
                        ></div>
                      </div>
                      <div
                        style={{ width: 16, height: 16, position: "relative" }}
                      >
                        <div
                          style={{
                            width: 15,
                            height: 14,
                            left: 0.5,
                            top: 1,
                            position: "absolute",
                            background: "#FF8682",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div
                      style={{
                        color: "#112211",
                        fontSize: 12,
                        fontFamily: "Montserrat",
                        fontWeight: "500",
                        wordWrap: "break-word",
                      }}
                    >
                      5 Star Hotel
                    </div>
                  </div>
                  <div
                    style={{
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 4,
                      display: "flex",
                    }}
                  >
                    <div
                      style={{ width: 16, height: 16, position: "relative" }}
                    >
                      <div
                        style={{
                          width: 13,
                          height: 11.5,
                          left: 1.5,
                          top: 2,
                          position: "absolute",
                          background: "#112211",
                        }}
                      ></div>
                    </div>
                    <div>
                      <span
                        style={{
                          color: "#112211",
                          fontSize: 12,
                          fontFamily: "Montserrat",
                          fontWeight: "700",
                          wordWrap: "break-word",
                        }}
                      >
                        20+
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
                        Aminities
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 4,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 10,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        alignSelf: "stretch",
                        height: 32,
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
                          fontSize: 12,
                          fontFamily: "Montserrat",
                          fontWeight: "500",
                          wordWrap: "break-word",
                        }}
                      >
                        4.2
                      </div>
                    </div>
                  </div>
                  <div>
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
                      {" "}
                      371 reviews
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-end",
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  opacity: 0.75,
                  color: "#112211",
                  fontSize: 12,
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >
                starting from
              </div>
              <div style={{ textAlign: "right" }}>
                <span
                  style={{
                    color: "#FF8682",
                    fontSize: 24,
                    fontFamily: "Montserrat",
                    fontWeight: "700",
                    wordWrap: "break-word",
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
                    wordWrap: "break-word",
                  }}
                >
                  /night
                </span>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  opacity: 0.75,
                  textAlign: "right",
                  color: "#112211",
                  fontSize: 12,
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >
                excl. tax
              </div>
            </div>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              height: 0.5,
              opacity: 0.25,
              background: "#112211",
            }}
          />
          <div
            style={{
              width: 492,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 16,
              display: "inline-flex",
            }}
          >
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
                  width: 48,
                  height: 48,
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
                <div style={{ width: 20, height: 20, position: "relative" }}>
                  <div
                    style={{
                      width: 16.25,
                      height: 15,
                      left: 1.87,
                      top: 2.5,
                      position: "absolute",
                      background: "black",
                      border: "0.05px #4C4850 solid",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div
              style={{
                flex: "1 1 0",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 10,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  height: 48,
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 8,
                  paddingBottom: 8,
                  background: "#8DD3BB",
                  borderRadius: 4,
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
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  View Place
                </div>
              </div>
            </div>
          </div>
        </div>
      </Paper>
    </>
  );
};
export default Testing;
