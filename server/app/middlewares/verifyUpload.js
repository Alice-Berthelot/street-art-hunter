const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const handleFileUpload = (req, res, next) => {
  const newFileName = `${uuidv4()}.jpg`;
  const newPath = `public/assets/images/upload/${newFileName}`;

  fs.rename(req.file.path, newPath, (err) => {
    if (err) {
      return next(err);
    }

    req.newPath = `${newFileName}`;

    req.latitude = req.body.latitude;
    req.longitude = req.body.longitude;

    next();
    return true; 
  });
};

module.exports = {
  handleFileUpload,
};
