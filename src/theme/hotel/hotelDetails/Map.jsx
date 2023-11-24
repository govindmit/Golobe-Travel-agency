import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
  const apiKey = "AIzaSyCzsWw1Q_6meuYVHeWKGnEntNlurDQXPoc";

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  const center = { lat: 37.7749, lng: -122.4194 };

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  return (
    <div style={{ height: "450px", width: "100%", marginTop: "25px" }}>
      <GoogleMap
        mapContainerStyle={{
          height: "100%",
          width: "100%",
          borderRadius: "1rem",
        }}
        center={center}
        zoom={15}
      >
        {/* Add a Marker to the map with the custom icon */}
        <Marker position={{ lat: 18.52043, lng: 73.856743 }} />
      </GoogleMap>
    </div>
  );
};

export default Map;
