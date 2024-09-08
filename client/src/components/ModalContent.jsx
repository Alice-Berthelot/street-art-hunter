import { PropTypes } from "prop-types";
import "../styles/ModalContent.css";

function ModalContent({ onClose }) {
  return (
    <section className="modal-welcome">
      <header>
        <button type="button" onClick={onClose} aria-label="fermer la fenêtre">
          x
        </button>
      </header>
      <article>
        <h2>Bienvenue !</h2>
        <p>
          Avec Street Art Hunter, partez à la chasse aux œuvres d’art urbaines !
        </p>
        <p>
          Parcourez la carte à la recherche d'oeuvres de street art situées
          autour de vous et contribuez à l'enrichissement de l'application en
          ajoutant vos propres découvertes. Si vous êtes inscrit, vous pouvez
          capturer des photos directement depuis l'application mobile en
          cliquant sur l'icône appareil photo. Vous pourrez ainsi gagner des
          points et vous mesurer aux autres chasseurs.
        </p>
        <p>Explorez, découvrez et amusez-vous!</p>
      </article>
    </section>
  );
}
ModalContent.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalContent;
