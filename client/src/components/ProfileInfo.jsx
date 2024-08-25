import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import "../styles/Profile.css";

function ProfileInfo({ user, auth, id }) {
  return (
    <section className="profile-information-section">
      <h2 className="profile-subtitle">
        {auth?.id === parseInt(id, 10) ? "Mes informations" : "Informations"}
      </h2>
      <article className="profile-information-article">
        <p>Pseudo</p>
        <p>{user.username}</p>
        <p>Ville</p>
        <p>{user.city}</p>
        <p>E-mail</p>
        <p>{user.email}</p>
      </article>

      <Link
        to={`/profile/${user.id}/edit`}
        aria-label="Informations"
        className="profile-information-edit-button"
      >
        Modifier
      </Link>
    </section>
  );
}

ProfileInfo.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};

ProfileInfo.defaultProps = {
  user: {
    id: 0,
    username: "",
    city: "",
    email: "",
  },
};

export default ProfileInfo;
