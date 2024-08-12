import { PropTypes } from "prop-types";
import { Form, useParams } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { TfiHandStop } from "react-icons/tfi";
import { CurrentUserContext } from "../contexts/CurrentUserProvider";

function ProfileDelete({ isOpen, handleClose, auth, logout, id }) {
  const dialog = useRef();

  useEffect(() => {
    if (isOpen) {
      dialog.current?.showModal();
    } else {
      dialog.current?.close();
    }
  }, [isOpen]);

  const handleSubmit = () => {
    if (auth.role !== 1 || (auth.role === 1 && auth.id === parseInt(id, 10))) {
      logout();
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
        <p>Êtes-vous sûr de vouloir supprimer votre profil ?</p>
        <p>
          Cette action est irréversible et entraînera la perte de toutes vos
          données.
        </p>
        <Form method="delete">
          <button
            type="submit"
            aria-label="Fermer la fenêtre"
            className="confirm-delete-profile"
            onClick={handleSubmit}
          >
            Confirmer
          </button>
        </Form>
        <button
          type="button"
          aria-label="Fermer la fenêtre"
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
  onClose: PropTypes.func,
};

ProfileDelete.defaultProps = {
  onClose: () => {},
};

export default ProfileDelete;
