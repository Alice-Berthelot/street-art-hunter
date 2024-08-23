const jwt = require("jsonwebtoken");

const authorize = (requiredRole) => {
  return (req, res, next) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      
      if (!token) {
        return res.sendStatus(401).json({ error : err.message });
      }

      const decodedToken = jwt.verify(token, process.env.APP_SECRET);

      if (decodedToken.role === undefined) {
        return res.sendStatus(403).json({ message: "Accès interdit : rôle manquant" });;
      }

      if (requiredRole === 'admin' && decodedToken.role !== 1) {
        return res.sendStatus(403).json({ message: "Accès interdit : rôle administrateur requis" });;
      }

      if (requiredRole === 'userAuth' && decodedToken.role !== null && decodedToken.role !== 1) {
        return res.sendStatus(403).json({ message: "Accès interdit : utilisateur authentifié requis" });;
      }

      next();
    } catch (err) {
      return res.sendStatus(401);
    }
  };
};

module.exports = {
  authorize,
};
