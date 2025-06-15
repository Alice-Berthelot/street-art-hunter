import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { CurrentUserContext } from "../contexts/CurrentUserProvider";

// Component to protect routes by ensuring access is only granted to admins
export default function AdminProtected({ children }) {
  const navigate = useNavigate();
  const { auth } = useContext(CurrentUserContext);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (!auth?.role || auth?.role !== 1) {
      navigate("/");
    } else {
      setIsAuthorized(true);
    }
  }, [auth, navigate]);

  if (!isAuthorized) {
    return null;
  }

  return children;
}

AdminProtected.propTypes = {
  children: PropTypes.node,
};

AdminProtected.defaultProps = {
  children: null,
};
