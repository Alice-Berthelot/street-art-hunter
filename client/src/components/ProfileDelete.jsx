import { PropTypes } from "prop-types";
import { Form } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { TfiHandStop } from "react-icons/tfi";
import { CurrentUserContext } from "../contexts/CurrentUserProvider";

function ProfileDelete({ isOpen, handleClose, auth, id }) {
  const dialog = useRef();
  const { setAuth } = useContext(CurrentUserContext);

  // The showModal() and close() methods are linked to the dialog tag
  useEffect(() => {
    if (isOpen) {
      dialog.current?.showModal();
    } else {
      dialog.current?.close();
    }
  }, [isOpen]);

  const handleSubmit = () => {
    if (auth.role !== 1 || (auth.role === 1 && auth.id === parseInt(id, 10))) {
      setAuth(null);
    }
  };

  return (
    <dialog className="modal-delete-profile" ref={dialog}>
      <header>
        <button
          type="button"
          aria-label="Fermer la fenêtre"
          onClick={handleClose}
          className="close-delete-profile"
        >
          X
        </button>
      </header>
      <article className="modal-content-delete-profile">
        <TfiHandStop className="hand-icon-delete-profile" />
        <p>
          Êtes-vous sûr de vouloir supprimer{" "}
          {auth?.id === parseInt(id, 10) ? "votre" : "ce"} profil ?
        </p>
        <p>
          Cette action est irréversible et entraînera la perte de toutes{" "}
          {auth?.id === parseInt(id, 10)
            ? "vos données"
            : "les données de l'utilisateur"}{" "}
          (informations personnelles et oeuvres d'art ajoutées).
        </p>
        <Form method="delete">
          <button
            type="submit"
            className="confirm-delete-profile"
            onClick={handleSubmit}
          >
            Confirmer
          </button>
        </Form>
        <button
          type="button"
          onClick={handleClose}
          className="cancel-delete-profile"
        >
          Annuler
        </button>
      </article>
    </dialog>
  );
}

ProfileDelete.propTypes = {
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
  auth: PropTypes.shape({
    id: PropTypes.number,
    role: PropTypes.number,
  }),
  id: PropTypes.string,
};

export default ProfileDelete;
