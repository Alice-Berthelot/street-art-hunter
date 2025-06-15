import PropTypes from "prop-types";
import "../styles/Profile.css";

function ProfilePoints({ sortedUsers, user, auth, id }) {
  // userRank stores the user's rank, adjusted by adding 1 since array indices start at 0, not 1
  const userRank =
    1 + sortedUsers.findIndex((sortedUser) => sortedUser.id === user.id);

  return (
    <section className="profile-points-section">
      {/* The profile titles and subtitles vary based on whether the authenticated user is the profile owner or an admin. */}
      <h2 className="profile-subtitle">
        {auth?.id === parseInt(id) ? "Mes points" : "Points"}
      </h2>
      <article className="profile-points-article">
        <p>Nombre de points :</p>
        <p>{user.point_number}</p>
        <p>Classement :</p>
        <p>
          {userRank}/{sortedUsers.length}
        </p>
      </article>
    </section>
  );
}

ProfilePoints.propTypes = {
  sortedUsers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      point_number: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
    })
  ).isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    point_number: PropTypes.number.isRequired,
  }).isRequired,
  auth: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
};

export default ProfilePoints;
