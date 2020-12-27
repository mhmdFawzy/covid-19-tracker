import React from 'react';
import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import { showDataOnMap } from '../utils';
const Map = ({ data }) => {
    const { selectedLat, selectedLong, zoom, countries } = data;
    const ChangeView = ({ center, zoom }) => {
        const map = useMap();
        map.setView(center, zoom);
        return null;
    };
    return (
        <div className="map">
            <MapContainer center={[selectedLat, selectedLong]} zoom={zoom}>
                <ChangeView center={[selectedLat, selectedLong]} zoom={zoom} />

                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* <Marker position={[selectedLat, selectedLong]}></Marker> */}
                {showDataOnMap(countries, 'cases')}
            </MapContainer>
        </div>
    );
};
Map.propTypes = {
    data: PropTypes.object.isRequired
};

export default Map;
