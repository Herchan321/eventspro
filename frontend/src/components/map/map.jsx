import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const position = [31.7917, -7.0926]; 

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "450px", width: "100%" }} // Taille de la carte
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
      </Marker>
    </MapContainer>
  );
};

export default Map;
