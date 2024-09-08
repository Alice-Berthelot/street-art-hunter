const jwt = require("jsonwebtoken");

// Middleware to authorize access to profile features for admins and the profile owner
const authorizeProfileAccess = (req, res, next) => {
  try {
    // Extract token from Authorization header
    const token =
      req.headers.authorization && req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.sendStatus(401); // Unauthorized if token is missing
    }

    // Verify the token and decode it
    const decodedToken = jwt.verify(token, process.env.APP_SECRET);

    const userId = decodedToken.sub;
    const userRole = decodedToken.role;

    const profileId = parseInt(req.params.id);

    // Allow access if user is an admin (role === 1) or if user ID matches the profile ID
    if (userRole === 1 || userId === profileId) {
      return next();
    }

    return res.sendStatus(403); // Forbidden if the user does not have access
  } catch (err) {
    return res.sendStatus(401); // Unauthorized if token verification fails
  }
};

module.exports = {
  authorizeProfileAccess,
};
