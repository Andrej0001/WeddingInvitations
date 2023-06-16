import React, { useMemo } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const Map = () => {
  const containerStyle = {
    width: "500px",
    height: "400px",
  };

  const center = {
    lat: 50.0755, // Latitude pro Prahu
    lng: 14.4378,
  };
  const markerPosition = {
    lat: 50.089431, // Latitude pro polohu špendlíku
    lng: 14.12318, // Longitude pro polohu špendlíku
  };

  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: "AIzaSyAJUlFqMDmaBex_FZV1CQdgxzrQxsl61Z4",
  // });
  // const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
  return (
    <div>
      <div className="main-header-map">
        <div className="title">Місце проведення</div>
        <div className="description">
          {"банкетний зал ".toUpperCase()}
          &laquo;
          {"GATTINO".toUpperCase()}
          &raquo;
        </div>

        <div className="mapping">
          <LoadScript googleMapsApiKey="AIzaSyAJUlFqMDmaBex_FZV1CQdgxzrQxsl61Z4">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={markerPosition}
              zoom={10}
            >
              {/* <Marker position={center} /> */}
              <Marker position={markerPosition} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
};

export default Map;
