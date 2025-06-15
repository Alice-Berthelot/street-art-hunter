import { Marker, Popup } from "react-leaflet";
import PropTypes from "prop-types";

function ArtPins({
  artData,
  position,
  geolocationIcon,
  artIcon,
  handleOpenModal,
}) {
  return (
    <>
      <Marker position={position} icon={geolocationIcon}>
        <Popup>Vous êtes ici</Popup>
      </Marker>
      {artData.map((art) => (
        <Marker
          key={art.id}
          position={[art.latitude, art.longitude]}
          icon={artIcon}
          eventHandlers={{ click: () => handleOpenModal(art) }}
          aria-label="Ouvrir la fenêtre pour plus de détails sur l'oeuvre sélectionnée"
        />
      ))}
    </>
  );
}

ArtPins.propTypes = {
  artData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      latitude: PropTypes.string.isRequired,
      longitude: PropTypes.string.isRequired,
    })
  ).isRequired,
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  geolocationIcon: PropTypes.object.isRequired,
  artIcon: PropTypes.object.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
};

export default ArtPins;
