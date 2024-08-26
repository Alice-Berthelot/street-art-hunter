const jwt = require("jsonwebtoken");

const authorizeProfileAccess = (req, res, next) => {
    try {
        const token = req.headers.authorization && req.headers.authorization.split(" ")[1];

        if (!token) {
          return res.sendStatus(401);
        }

        const decodedToken = jwt.verify(token, process.env.APP_SECRET);

    const userId = decodedToken.sub;
    const userRole = decodedToken.role;

    const profileId = parseInt(req.params.id);

    if (userRole === 1 || userId === profileId) {
        console.log("L'utilisateur est autorisé à supprimer le profil");
      return next();
    }

    return res.sendStatus(403); 
  } catch (err) {
    return res.sendStatus(401); 
  }
};

//     const { id } = req.params;
//     const userId = req.user.sub;
  
//     if (req.user.role === 1 || userId === parseInt(id, 10)) {
//       return next();
//     }
  
//     return res.sendStatus(403);
//   };
  

module.exports = {
  authorizeProfileAccess,
};
