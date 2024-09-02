import { PropTypes } from "prop-types";
import "../styles/ModalContent.css";

function ModalContent({ onClose }) {
  return (
    <section className="modal-welcome">
      <header>
        <button
          type="button"
          className="close-button"
          onClick={onClose}
          aria-label="fermer"
        >
          x
        </button>
      </header>
      <h2>Bienvenue !</h2>
      <section>
        <p>
          Avec Street Art Hunter, partez à la chasse aux œuvres d’art urbaines.
        </p>
        <p>
          Photographiez de nouvelles œuvres d’art à partir de votre téléphone
          pour gagner des points : cliquez sur l’appareil photo et laissez-vous
          guider.
        </p>
        <p>Explorez, découvrez et amusez-vous!</p>
      </section>
    </section>
  );
}
ModalContent.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalContent;
