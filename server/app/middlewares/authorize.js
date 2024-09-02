const jwt = require("jsonwebtoken");

const authorize = (req, res, next) => {
  try {
    const token = req.headers.authorization && req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.sendStatus(401);
    }

    const decodedToken = jwt.verify(token, process.env.APP_SECRET);

    if (decodedToken.role === 1) {
      return next();
    }

    return res.status(403).json({ message: "Accès interdit : rôle manquant" });
  } catch (err) {
    console.error("Erreur d'authentification :", err.message);
    return res.status(401).json({ message: "Token invalide ou expiré" });
  }
};

module.exports = {
  authorize,
};
