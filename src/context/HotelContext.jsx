import React, { createContext, useContext, useState } from "react";

const HotelContext = createContext();

export const HotelProvider = ({ children }) => {
  const [hotelIds, setHotelIds] = useState([]);

  const setIds = (ids) => {
    setHotelIds(ids);
  };

  return (
    <HotelContext.Provider value={{ hotelIds, setIds }}>
      {children}
    </HotelContext.Provider>
  );
};

export const useHotelContext = () => {
  return useContext(HotelContext);
};
