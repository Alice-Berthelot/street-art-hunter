import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { Form } from "react-router-dom";
import "../styles/GalleryDetails.css";
import { toast } from "react-toastify";

function GalleryDetails({
  art,
  isOpen,
  setIsOpen,
  handleCloseModal,
  translations,
  dateOptions,
}) {
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

  const handleSubmit = () => {
    setIsOpen(false);
    toast.success("L'oeuvre d'art a bien été supprimée.");
  };

  return (
    <dialog className="modal-gallery" ref={dialog}>
      <header>
        <button
          type="button"
          aria-label="Fermer la fenêtre"
          onClick={handleCloseModal}
          className="close-modal-gallery"
        >
          X
        </button>
      </header>
      <article className="modal-content-gallery">
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
        <p>
          Ajouté le{" "}
          {`${new Date(art.upload_date).toLocaleDateString("fr-FR", dateOptions)} `}
          par {`${art.username}`}
        </p>
        <p>{art.information}</p>
        <Form method="delete" onSubmit={handleSubmit}>
          <input type="hidden" name="artId" value={art.id} />
          <button type="submit" className="confirm-delete-gallery">
            Supprimer
          </button>
        </Form>
      </article>
    </dialog>
  );
}

GalleryDetails.propTypes = {
  art: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
    artist: PropTypes.string,
    information: PropTypes.string,
    status: PropTypes.string.isRequired,
    upload_date: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  translations: PropTypes.objectOf(PropTypes.string).isRequired,
  dateOptions: PropTypes.object.isRequired,
};

export default GalleryDetails;
