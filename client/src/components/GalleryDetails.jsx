import { useEffect, useRef } from "react";
import { Form } from "react-router-dom";
import "../styles/Profile.css";
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
          alt={art.title}
          className="modal-picture-artDetails"
        />
        <h2>
          {`${art.title}`}
          {art.title && art.artist && " - "}
          {art.artist}
        </h2>
        <h3>
          Ajouté le{" "}
          {`${new Date(art.upload_date).toLocaleDateString("fr-FR", dateOptions)} `}
          par {`${art.username}`}
        </h3>
        <p className={art.information && "modal-artDetails-description"}>
          {art.information}
        </p>
        <Form method="delete" onSubmit={handleSubmit}>
          <input type="hidden" name="artId" value={art.id} />
          <button type="submit" className="confirm-delete-profile">
            Supprimer
          </button>
        </Form>
      </article>
    </dialog>
  );
}

export default GalleryDetails;
