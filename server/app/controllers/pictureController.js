const repositories = require("../models");

const browse = async (req, res, next) => {
  try {
    const pictures = await repositories.picture.readAll();
    res.status(200).json(pictures);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
};
