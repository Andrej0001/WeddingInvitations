import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import "./map.css";
import { motion } from "framer-motion";
import { forwardRef } from "react";

export const Mapp = forwardRef(({ props }, ref) => {
  const [mapLoading, setMapLoading] = useState();

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const markerPosition = {
    address: "K Tržišti 14/4, 155 00 Řeporyje",
    lat: 50.033361, // Latitude pro polohu špendlíku
    lng: 14.312613, // Longitude pro polohu špendlíku
  };

  const handleMapLoad = (map) => {
    const marker = new window.google.maps.Marker({
      position: markerPosition,
      map: map,
    });

    setMapLoading(marker);
  };

  return (
    <div style={{ width: "100%" }} ref={ref}>
      <div className="main-header-map">
        <div className="title">Місце проведення</div>
        <div className="description">
          {" Restaurant ".toUpperCase()}
          &laquo;
          {"PREFUNDA".toUpperCase()}
          &raquo;
          {" K Tržišti 14/4, 155 00 Řeporyje ".toUpperCase()}
        </div>
      </div>

      <div className="mapping">
        <LoadScript googleMapsApiKey="AIzaSyAJUlFqMDmaBex_FZV1CQdgxzrQxsl61Z4">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={markerPosition}
            zoom={17}
            onLoad={handleMapLoad}
          >
            {mapLoading && (
              <Marker
                position={markerPosition}
                map={mapLoading.map}
                Marker
              ></Marker>
            )}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
});

export const MotionMap = motion(Mapp);
