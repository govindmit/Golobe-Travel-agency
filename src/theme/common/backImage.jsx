import Bgimg from "../../assets/images/Bgimg.png";
import RectangleImg from "../../assets/images/Rectangle.png";
import BookingCard from "./bookingCard";
import Navbar from "./navbar";

const BackImg = () => {
  const containerStyle = {
    width: "100%",
    height: "100%",
    position: "relative",
    backgroundImage: `url(${Bgimg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 24,
  };

  const textOverlayStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "45px",
    color: "white",
    fontWeight: "500",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    textAlign: "center",
    wordWrap: "break-word",
    letterSpacing: "2px",
  };

  const text = {
    textAlign: "center",
    top: "20%",
    color: "white",
    fontSize: "80px",
    fontWeight: "500",
    textTransform: "uppercase",
    fontFamily: "system-ui",
    letterSpacing: "5px",
  };

  const textlast = {
    textAlign: "center",
    bottom: "50%",
    color: "white",
    fontSize: "20px",
    fontWeight: "500",
    fontFamily: "system-ui",
  };

  const mediaQueryStyle = {
    "@media (minWidth: 500px)": {
      fontSize: "2px",
      BackImg,
    },
  };

  return (
    <div>
      <div style={containerStyle}>
        <img src={RectangleImg} alt="Rectangle Image" style={imageStyle} />
        <div style={{ ...textOverlayStyle, ...mediaQueryStyle }}>
          Helping Others
          <br />
          <div style={{ ...text, ...mediaQueryStyle }}>Live & Travel</div>
          <div style={textlast}>Special offers to suit your plan</div>
        </div>
      </div>
      <Navbar isHomePage={true} />
      <BookingCard/>
    </div>
  );
};

export default BackImg;
