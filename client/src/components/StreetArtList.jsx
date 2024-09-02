import "../styles/AdminStreetArtPage.css";
import PropTypes from "prop-types";
import BtnGoBack from "./BtnGoBack";
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
        <BtnGoBack />
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
              <img
                src={`${artUrl}/${art.image}`}
                alt={`oeuvre d'art ${art.id}`}
              />
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
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default StreetArtList;
