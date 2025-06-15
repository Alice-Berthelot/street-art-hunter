import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import "../styles/Profile.css";

function ProfileInfo({ user, auth, id }) {
  return (
    <section className="profile-information-section">
      {/* The profile titles and subtitles vary based on whether the authenticated user is the profile owner or an admin. */}
      <h2 className="profile-subtitle">
        {auth?.id === parseInt(id, 10) ? "Mes informations" : "Informations"}
      </h2>
      <table className="profile-information-table">
        <tbody>
          <tr>
            <td>Pseudo</td>
            <td>{user.username}</td>
          </tr>
          <tr>
            <td>Ville</td>
            <td>{user.city}</td>
          </tr>
          <tr>
            <td>E-mail</td>
            <td>{user.email}</td>
          </tr>
        </tbody>
      </table>

      <Link
        to={`/profile/${user.id}/edit`}
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
