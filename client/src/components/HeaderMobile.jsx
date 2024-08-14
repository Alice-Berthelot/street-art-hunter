import { Link } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserProvider";
import logoutIcon from "../assets/images/logout-icon.png";
import logoImg from "../assets/images/logo-small.png";
import "../styles/HeaderMobile.css";

function HeaderMobile() {
  const { auth, logout } = useContext(CurrentUserContext);

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <>
      <Link to="/">
        <img
          src={logoImg}
          alt="Logo pour retourner à l'accueil"
          className="logo-mobile"
        />
      </Link>
      {auth?.id && (
        <Link to="/" onClick={handleLogout}>
          <img
            src={logoutIcon}
            alt="logo pour la déconnexion"
            className="logout-icon"
          />
        </Link>
      )}
    </>
  );
}

export default HeaderMobile;
