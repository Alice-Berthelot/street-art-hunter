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
      {/* The profile titles and subtitles vary based on whether the authenticated user is the profile owner or an admin. */}
      <h2 className="profile-subtitle">
        {auth?.id === parseInt(id) ? "Mes contributions" : "Contributions"}
      </h2>
      {/* Splide is a library used to create carousels */}
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
                alt="oeuvre ajoutée"
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
  auth: PropTypes.shape({
    id: PropTypes.number.isRequired,
    role: PropTypes.number.isRequired,
  }),
  id: PropTypes.string,
  arts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string,
      artist: PropTypes.string,
      information: PropTypes.string,
    })
  ),
  selectedArt: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    artist: PropTypes.string,
    information: PropTypes.string,
    status: PropTypes.string,
    upload_date: PropTypes.string,
    username: PropTypes.string,
  }),
  setSelectedArt: PropTypes.func,
  isOpen: PropTypes.bool,
  handleOpenModal: PropTypes.func,
  handleCloseModal: PropTypes.func,
  translations: PropTypes.shape({
    pending: PropTypes.string.isRequired,
    accepted: PropTypes.string.isRequired,
    refused: PropTypes.string.isRequired,
  }),
};

ProfileContributions.defaultProps = {
  selectedArt: null,
};

export default ProfileContributions;
