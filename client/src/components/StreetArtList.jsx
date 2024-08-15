import "../styles/AdminStreetArtPage.css";
import PropTypes from "prop-types";
import BtnGoBack from "./BtnGoBack";
import AdminLinks from "./AdminLinks";

function StreetArtList({ pictures }) {
  const artUrl = import.meta.env.VITE_API_URL;

  return (
    <section className="artlist-section-wrapper">
      <article className="artlist-article">
        <BtnGoBack />
        <AdminLinks />
        <h2 className="title-artgallery">
          Oeuvres ajoutées par les utilisateurs
        </h2>
        <ul className="gallery-list">
          {pictures.map((picture) => (
            <li key={picture.id} className="img">
              <img
                src={`${artUrl}/${picture.image}`}
                alt={`oeuvre d'art ${picture.id}`}
              />
            </li>
          ))}
        </ul>
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
