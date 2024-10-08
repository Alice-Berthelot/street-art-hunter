import { useContext, useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import { Icon } from "leaflet";
import { createPortal } from "react-dom";
import { CurrentUserContext } from "../contexts/CurrentUserProvider";
import ModalContent from "../components/ModalContent";
import ArtDetails from "../components/ArtDetails";
import decodeTokenAndExtractRole from "../services/decodeToken";
import "leaflet/dist/leaflet.css";
import "../styles/Home.css";
import "../styles/ModalContent.css";
import "../styles/Geocoder.css";
import yellowMarker from "../assets/images/location_yellow.svg";
import pinkMarker from "../assets/images/location_pink.svg";
import Map from "../components/Map";

function Home() {
  const artData = useLoaderData();

  const { setAuth } = useContext(CurrentUserContext);
  const [position, setPosition] = useState([
    44.831271602173324, -0.5722962522737938,
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedArt, setSelectedArt] = useState(null);

  // artIcon and geolocationIcon are custom markers created using React Leaflet's Icon class
  const artIcon = new Icon({
    iconUrl: yellowMarker,
    iconSize: [38, 38],
  });

  const geolocationIcon = new Icon({
    iconUrl: pinkMarker,
    iconSize: [38, 38],
  });

  const handleOpenDetails = (art) => {
    setIsOpen(true);
    setSelectedArt(art);
  };

  const handleCloseDetails = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const userData = decodeTokenAndExtractRole(token);
      setAuth(userData);
    }
  }, [setAuth]);

  const [showModal, setShowModal] = useState(false);
  const modalContent = document.getElementById("modal-content");
  const location = useLocation();

  useEffect(() => {
    const isFirstVisit = localStorage.getItem("isFirstVisit") === null;
    if (isFirstVisit) {
      setShowModal(true);
      localStorage.setItem("isFirstVisit", "false");
    }
  }, []);

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 10000);

      return () => clearTimeout(timer);
    }
    return undefined;
  }, [showModal]);

  const isHomepage = location.pathname === "/";

  return (
    <>
      {showModal &&
        modalContent &&
        isHomepage &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          modalContent
        )}
      <Map
        position={position}
        setPosition={setPosition}
        artData={artData}
        geolocationIcon={geolocationIcon}
        artIcon={artIcon}
        handleOpenModal={handleOpenDetails}
      />
      {isOpen && (
        <ArtDetails
          art={selectedArt}
          isOpen={isOpen}
          handleCloseModal={handleCloseDetails}
        />
      )}
    </>
  );
}

export default Home;
