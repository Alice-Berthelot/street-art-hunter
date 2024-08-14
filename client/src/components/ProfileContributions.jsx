import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import PropTypes from "prop-types";
import ContributionDetails from "./ContributionDetails";

function ProfileContributions({
  auth,
  id,
  arts,
  selectedArt,
  setSelectedArt,
  isOpen,
  handleOpenModal,
  handleCloseModal,
  translations,
}) {
  const pictureUrl = import.meta.env.VITE_API_URL;

  return (
    <section className="profile-contributions-section">
      <h2 className="profile-subtitle">
        {auth?.id === parseInt(id) ? "Mes contributions" : "Contributions"}
      </h2>
      <Splide
        options={{
          type: "slide",
          perPage: 5,
          breakpoints: {
            768: {
              perPage: 3,
            },
            1024: {
              perPage: 5,
            },
          },
          gap: "2rem",
          pagination: false,
        }}
      >
        {arts.map((art) => (
          <SplideSlide key={art.id}>
            <figure
              onClick={() => {
                setSelectedArt(art);
                handleOpenModal();
              }}
            >
              <img
                src={`${pictureUrl}/${art.image}`}
                alt={`Street art`}
                className="profile-added-image"
              />
            </figure>
          </SplideSlide>
        ))}
      </Splide>
      {isOpen && selectedArt && (
        <ContributionDetails
          art={selectedArt}
          isOpen={isOpen}
          handleCloseModal={handleCloseModal}
          translations={translations}
        />
      )}
    </section>
  );
}

ProfileContributions.propTypes = {
  arts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string,
      artist: PropTypes.string,
      information: PropTypes.string,
    })
  ).isRequired,
  selectedArt: PropTypes.object,
  setSelectedArt: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
};

ProfileContributions.defaultProps = {
  selectedArt: null,
};

export default ProfileContributions;
