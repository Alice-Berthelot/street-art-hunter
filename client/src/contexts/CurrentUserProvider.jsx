import { createContext, useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import decodeTokenAndExtractRole from "../services/decodeToken";
import { toast } from "react-toastify";

export const CurrentUserContext = createContext();

export function CurrentUserProvider({ children }) {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const userData = decodeTokenAndExtractRole(token);
      if (userData.exp > Date.now() / 1000) {
        setAuth(userData);
      } else {
        localStorage.removeItem("token");
        setAuth(null);
      }
    }
  }, []);

  useEffect(() => {
    if (auth && auth.exp) {
      const expirationTime = auth.exp * 1000 - Date.now();
      if (expirationTime > 0) {
        const timer = setTimeout(() => {
          setAuth(null);
          localStorage.removeItem("token");
          toast.warning("Votre session a expiré.");
        }, expirationTime);
        return () => clearTimeout(timer);
      } else {
        setAuth(null);
        localStorage.removeItem("token");
        toast.warning("Votre session a expiré.");
      }
    }
  }, [auth]);

  const logout = () => {
    setAuth(null);
    localStorage.removeItem("token");
    toast.success("Vous avez été déconnecté(e)");
  };

  const contextValue = useMemo(
    () => ({
      auth,
      setAuth,
      logout,
    }),
    [auth]
  );

  return (
    <CurrentUserContext.Provider value={contextValue}>
      {children}
    </CurrentUserContext.Provider>
  );
}

CurrentUserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
