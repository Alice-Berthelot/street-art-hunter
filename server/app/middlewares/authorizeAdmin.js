const jwt = require("jsonwebtoken");

// Middleware to authorize access for admins only
const authorizeAdmin = (req, res, next) => {
  try {
    // Extract token from Authorization header
    const token =
      req.headers.authorization && req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.sendStatus(401); // Unauthorized if token is missing
    }

    // Verify the token and decode it
    const decodedToken = jwt.verify(token, process.env.APP_SECRET);

    const userRole = decodedToken.role;

    // Allow access if the user is an admin (role === 1)
    if (userRole === 1) {
      return next();
    }

    return res.status(403).json({ message: "Accès interdit : rôle manquant" });
  } catch (err) {
    return res.status(401).json({ message: "Token invalide ou expiré" });
  }
};

module.exports = {
  authorizeAdmin,
};
