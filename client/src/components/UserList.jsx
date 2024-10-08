import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";
import AdminLinks from "./AdminLinks";

function UserList({ users }) {
  const [selectedBtn, setSelectedBtn] = useState("Tous");
  const handleBtnClick = (filter) => {
    setSelectedBtn(filter);
  };

  const filterUsers = () => {
    if (selectedBtn === "Tous") {
      return users;
    }
    const sevenDays = new Date();
    sevenDays.setDate(sevenDays.getDate() - 7);
    return users.filter(
      (user) => new Date(user.registration_date) >= sevenDays
    );
  };

  const filteredtUsers = filterUsers();

  return (
    <section className="user-list-info-section">
      <article className="artlist-article">
        <AdminLinks />
        <h2>Liste des utilisateurs</h2>
        <ul className="user-list-ul">
          <li>
            <button
              type="button"
              className={`user-list-button ${selectedBtn === "Tous" ? "selected" : ""}`}
              onClick={() => handleBtnClick("Tous")}
            >
              Tous
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`user-list-button ${selectedBtn === "7 derniers jours" ? "selected" : ""}`}
              onClick={() => handleBtnClick("7 derniers jours")}
            >
              7 derniers jours
            </button>
          </li>
        </ul>
        <table className="user-list-table">
          <thead>
            <tr className="user-list-theader">
              <th className="user-list-th">Pseudo</th>
              <th className="user-list-th">Ville</th>
            </tr>
          </thead>
          <tbody className="user-list-cells">
            {filteredtUsers.map((user) => (
              <tr key={user.id}>
                <td className="user-list-tr">
                  <Link to={`/profile/${user.id}`}>{user.username} </Link>
                </td>
                <td className="user-list-tr">{user.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </section>
  );
}

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
      point_number: PropTypes.number.isRequired,
      registration_date: PropTypes.string.isRequired,
    })
  ),
};

export default UserList;
