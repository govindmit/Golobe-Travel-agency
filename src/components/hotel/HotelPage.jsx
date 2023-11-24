import HotelPageImage from "../../theme/hotel/HotelPageImage";
import HotelSearch from "../../theme/hotel/HotelSearch";
import HotelCard from "../../theme/hotel/HotelCard";
import Fotter from "../../theme/common/Fotter";
import BackPackingCard from "../../theme/common/BackPackingCard";

const HotelPage = () => {
  return (
    <>
      <HotelPageImage />
      <HotelCard />
      <HotelSearch />
      <BackPackingCard/>
      <Fotter />
    </>
  );
};
export default HotelPage;
