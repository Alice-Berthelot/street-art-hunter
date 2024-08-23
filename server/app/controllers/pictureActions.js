const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const pictures = await tables.picture.readAll();
    res.status(200).json(pictures);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
};
