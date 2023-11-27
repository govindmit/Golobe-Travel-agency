import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HotelProvider } from "./context/HotelContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HotelProvider>
      <App />
    </HotelProvider>
  </React.StrictMode>
);
