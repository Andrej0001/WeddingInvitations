import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import "./map.css";

const Map = () => {
  const [mapLoading, setMapLoading] = useState();

  const containerStyle = {
    width: "500px",
    height: "400px",
  };

  const markerPosition = {
    address: "Gattino,Řešovská 515,181 00 ,Praha 8-Bohnice,Česko",
    lat: 50.131163, // Latitude pro polohu špendlíku
    lng: 14.409497, // Longitude pro polohu špendlíku
  };

  const handleMapLoad = (map) => {
    // Mapa byla úspěšně načtena, můžeme zobrazit špendlík
    const marker = new window.google.maps.Marker({
      position: markerPosition,
      map: map,
    });
    console.log(marker);

    setMapLoading(marker);
  };

  return (
    <div>
      <div className="main-header-map">
        <div className="title">Місце проведення</div>
        <div className="description">
          {"банкетний зал ".toUpperCase()}
          &laquo;
          {"GATTINO".toUpperCase()}
          &raquo;
          {"Zhořelecká 514/2, 181 00 Praha 8".toUpperCase()}
        </div>
      </div>

      <div className="mapping">
        <LoadScript googleMapsApiKey="AIzaSyAJUlFqMDmaBex_FZV1CQdgxzrQxsl61Z4">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={markerPosition}
            zoom={15}
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
};

export default Map;
