import PropTypes from "prop-types";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import StreetArtList from "../components/StreetArtList";

function AdminStreetArtPage() {
  const { arts } = useOutletContext();
  const [selectedArt, setSelectedArt] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  const translations = {
    pending: "En attente de validation",
    accepted: "Validé",
    refused: "Refusé",
  };

  const dateOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Paris",
  };

  return (
    <section className="Admin-Street-Art">
      <StreetArtList
        arts={arts}
        selectedArt={selectedArt}
        setSelectedArt={setSelectedArt}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
        translations={translations}
        dateOptions={dateOptions}
      />
    </section>
  );
}

StreetArtList.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AdminStreetArtPage;
