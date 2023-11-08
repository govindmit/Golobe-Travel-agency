import { Route, Routes } from "react-router-dom";
import Home from "../components/common/home";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />;
    </Routes>
  );
};

export default AppRoute;
