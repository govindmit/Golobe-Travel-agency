import { Box, Button, Typography } from "@mui/material";
import HotelImageList1 from "../../../assets/images/hotel-detail-img/hotel2.jpeg";
import HotelImageList2 from "../../../assets/images/hotel-detail-img/hotel3.jpeg";
import HotelImageList3 from "../../../assets/images/hotel-detail-img/hotel4.jpeg";
import HotelImageList4 from "../../../assets/images/hotel-detail-img/hotel5.jpeg";

const HotelDetailList = () => {
  const data = [
    {
      id: 1,
      imgUrl: HotelImageList1,
      name: "Superior room - 1  double bed or 2 twin beds",
      price: "240",
    },
    {
      id: 2,
      imgUrl: HotelImageList2,
      name: "Superior room - City view - 1 double bed or  2 twin bed",
      price: "280",
    },
    {
      id: 3,
      imgUrl: HotelImageList3,
      name: "Superior room - city view -1 double bed or 2 twin bed ",
      price: "320",
    },
    {
      id: 3,
      imgUrl: HotelImageList4,
      name: "Superior room - city view -1 double bed or 2 twin bed ",
      price: "350",
    },
  ];
  return (
    <>
      <Box className="ht-li-box">
        <Typography className="ht-li-title">Available Rooms</Typography>

        <Box className="ht-li-container">
          <ul className="hi-li-ul">
            {data.map((item) => (
              <li className="hi-list">
                <img className="ht-li-img" src={item.imgUrl} />
                <Typography className="ht-li-name">{item.name}</Typography>

                <Box className="ht-li-pr-box">
                  <Box>
                    <span className="ht-li-pr-span" style={{ fontSize: 24 }}>
                      {`$${item.price}`}
                    </span>
                    <span className="ht-li-pr-span" style={{ fontSize: 14 }}>
                      /night
                    </span>
                  </Box>

                  <Typography className="ht-li-pr-btn-div">
                    <Button className="ht-li-btn">Book now</Button>
                  </Typography>
                </Box>
              </li>
            ))}
          </ul>
        </Box>
      </Box>
    </>
  );
};
export default HotelDetailList;
