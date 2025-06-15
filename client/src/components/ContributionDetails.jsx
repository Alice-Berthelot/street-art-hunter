import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import "../styles/Profile.css";

function ContributionDetails({ art, isOpen, handleCloseModal, translations }) {
  const artUrl = import.meta.env.VITE_API_URL;
  const imagePath = `${artUrl}/${art.image}`;
  const dialog = useRef();

  // The showModal() and close() methods are linked to the dialog tag
  useEffect(() => {
    if (isOpen) {
      dialog.current?.showModal();
    } else {
      dialog.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog className="modal-contribution-profile" ref={dialog}>
      <header>
        <button
          type="button"
          aria-label="Fermer la fenêtre"
          onClick={handleCloseModal}
          className="close-contribution-profile"
        >
          X
        </button>
      </header>
      <article className="modal-content-contribution-profile">
        <p>Statut : {translations[art.status]}</p>
        <img
          src={imagePath}
          alt={art.title ? art.title : "oeuvre ajoutée"}
          className="modal-picture-art-details"
        />
        <h3>
          {art.title && art.title.toUpperCase()}
          {art.title && art.artist && " - "}
          {art.artist}
        </h3>
        <p>{art.information}</p>
      </article>
    </dialog>
  );
}

ContributionDetails.propTypes = {
  art: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
    artist: PropTypes.string,
    information: PropTypes.string,
    status: PropTypes.string.isRequired,
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  translations: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ContributionDetails;
