import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";

function AdminLinks() {
  const location = useLocation();

  return (
    <>
      <h1>ADMINISTRATION</h1>
      <nav
        className="admin-links-nav"
        aria-label="Lien vers les pages réservées aux administrateurs"
      >
        <NavLink
          to="/admin"
          className={
            location.pathname === "/admin"
              ? "admin-links-link-active"
              : "admin-links-link"
          }
        >
          Statistiques
        </NavLink>
        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            isActive ? "admin-links-link-active" : "admin-links-link"
          }
        >
          Utilisateurs
        </NavLink>
        <NavLink
          to="/admin/artlist"
          className={({ isActive }) =>
            isActive ? "admin-links-link-active" : "admin-links-link"
          }
        >
          Gallerie
        </NavLink>
        <NavLink
          to="/admin/validation"
          className={({ isActive }) =>
            isActive ? "admin-links-link-active" : "admin-links-link"
          }
        >
          Validation
        </NavLink>
      </nav>
    </>
  );
}

AdminLinks.propTypes = {
  classNameBody: PropTypes.string.isRequired,
  classNameNav: PropTypes.string.isRequired,
};

export default AdminLinks;
