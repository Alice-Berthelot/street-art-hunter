import { MapContainer, TileLayer } from "react-leaflet";
import { useEffect, useRef } from "react";
import LeafletGeocoder from "../components/LeafletGeocoder";
import ZoomControl from "../components/ZoomControl";
import ArtPins from "../components/ArtPins";

function Map({
  position,
  setPosition,
  artData,
  geolocationIcon,
  artIcon,
  handleOpenModal,
}) {
  const mapRef = useRef();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((geoPosition) => {
      const { latitude, longitude } = geoPosition.coords;
      setPosition([latitude, longitude]);
      if (mapRef.current) {
        mapRef.current.setView([latitude, longitude], 13);
      }
    });
  }, []);
  return (
    <MapContainer
      center={position}
      zoom={13}
      className="leaflet-container"
      zoomControl={false}
      ref={mapRef}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <ZoomControl />
      <ArtPins
        artData={artData}
        position={position}
        geolocationIcon={geolocationIcon}
        artIcon={artIcon}
        handleOpenModal={handleOpenModal}
      />
      <LeafletGeocoder />
    </MapContainer>
  );
}

export default Map;
