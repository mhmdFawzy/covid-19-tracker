import React, { useLayoutEffect, useState } from "react";
import PropTypes from "prop-types";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import numeral from "numeral";
import { showDataOnMap } from "../utils";
const Map = ({ data }) => {
  const {
    selectedLat,
    selectedLong,
    zoom,
    countries,
    selectedCountry,
    casesType,
  } = data;
  const [mounted, setMounted] = useState(false);
  const ChangeView = ({ center, zoom }) => {
    const map = useMap();
    map.setView([center[0] - 5, center[1] - 5], zoom);
    return null;
  };

  useLayoutEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 80);
    return () => {
      setMounted(false);
    };
  }, []);
  return (
    <div className="map">
      {mounted && (
        <MapContainer center={[selectedLat, selectedLong]} zoom={zoom}>
          <ChangeView center={[selectedLat, selectedLong]} zoom={zoom} />
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[selectedLat, selectedLong]}>
            {selectedCountry.countryInfo && (
              <Popup>
                <div className="info-container">
                  <div
                    className="info-flag"
                    style={{
                      backgroundImage: `url(${selectedCountry.countryInfo.flag})`,
                    }}
                  ></div>
                  <div className="info-name">{selectedCountry.country}</div>
                  <div className="info-confirmed">
                    Cases: {numeral(selectedCountry.cases).format("0,0")}
                  </div>
                  <div className="info-recovered">
                    Recovered:{" "}
                    {numeral(selectedCountry.recovered).format("0,0")}
                  </div>
                  <div className="info-deaths">
                    Deaths: {numeral(selectedCountry.deaths).format("0,0")}
                  </div>
                </div>
              </Popup>
            )}
          </Marker>
          $
          {countries &&
            showDataOnMap(countries, selectedLat, selectedLong, casesType)}
        </MapContainer>
      )}
    </div>
  );
};
Map.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Map;
