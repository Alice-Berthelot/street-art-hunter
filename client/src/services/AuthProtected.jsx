import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { CurrentUserContext } from "../contexts/CurrentUserProvider";

export default function AuthProtected({ children }) {
  const navigate = useNavigate();
  const { auth } = useContext(CurrentUserContext);
  const { id } = useParams();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (!auth?.id || (auth?.id !== parseInt(id, 10) && auth?.role !== 1)) {
      navigate("/");
    } else {
      setIsAuthorized(true);
    }
  }, [auth, id, navigate]);

  if (!isAuthorized) {
    return null;
  }

  return children;
}

AuthProtected.propTypes = {
  children: PropTypes.node,
};

AuthProtected.defaultProps = {
  children: null,
};
