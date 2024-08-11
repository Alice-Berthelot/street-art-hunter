import { useEffect, useRef } from "react";
import "../styles/Profile.css";

function ContributionDetails({ art, isOpen, handleCloseModal }) {
  const artUrl = import.meta.env.VITE_API_URL;
  const imagePath = `${artUrl}${art.image}`;
  const dialog = useRef();

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
        <img
          src={imagePath}
          alt={art.title}
          className="modal-picture-artDetails"
        />
        <h2>
          {art.title}
          {art.title && art.artist && " - "}
          {art.artist}
        </h2>
        <p className={art.information && "modal-artDetails-description"}>
          {art.information}
        </p>
      </article>
    </dialog>
  );
}

export default ContributionDetails;
