import "../styles/AdminStreetArtPage.css";
import PropTypes from "prop-types";
import AdminLinks from "./AdminLinks";
import GalleryDetails from "./GalleryDetails";

function StreetArtList({
  arts,
  selectedArt,
  setSelectedArt,
  isOpen,
  setIsOpen,
  handleOpenModal,
  handleCloseModal,
  translations,
  dateOptions,
}) {
  const artUrl = import.meta.env.VITE_API_URL;

  return (
    <section className="artlist-section-wrapper">
      <article className="artlist-article">
        <AdminLinks />
        <h2>Oeuvres présentes sur l'application</h2>
        <ul className="gallery-list">
          {arts.map((art) => (
            <li
              key={art.id}
              onClick={() => {
                setSelectedArt(art);
                handleOpenModal();
              }}
            >
              <img src={`${artUrl}/${art.image}`} alt={`oeuvre d'art`} />
            </li>
          ))}
        </ul>
        {isOpen && selectedArt && (
          <GalleryDetails
            art={selectedArt}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            handleCloseModal={handleCloseModal}
            translations={translations}
            dateOptions={dateOptions}
          />
        )}
      </article>
    </section>
  );
}

StreetArtList.propTypes = {
  arts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
  selectedArt: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
  }),
  setSelectedArt: PropTypes.func,
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  handleOpenModal: PropTypes.func,
  handleCloseModal: PropTypes.func,
  translations: PropTypes.shape({
    pending: PropTypes.string.isRequired,
    accepted: PropTypes.string.isRequired,
    refused: PropTypes.string.isRequired,
  }),
  dateOptions: PropTypes.shape({
    day: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    timeZone: PropTypes.string.isRequired,
  }),
};

export default StreetArtList;
