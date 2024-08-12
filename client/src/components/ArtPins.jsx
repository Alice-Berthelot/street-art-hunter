import { Marker, Popup } from "react-leaflet";

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

export default ArtPins;
