const repositories = require("../models");

const add = async (req, res, next) => {
  try {
    const { title, information, artist, user_id, latitude, longitude } =
      req.body;

    const artistRecord = await repositories.artist.create({ name: artist });

    const artRecord = await repositories.art.create({
      title,
      information,
      latitude,
      longitude,
      status: "pending",
    });

    const insertId = await repositories.picture.create({
      image: req.newPath,
      user_id: parseInt(user_id, 10),
      art_id: artRecord,
    });

    res.status(201).json({
      msg: "Upload successful",
      url: `http://localhost:3000/${req.newPath}`,
      insertId,
      artistRecord,
      artRecord,
    });
  } catch (dbErr) {
    next(dbErr);
  }
};

module.exports = { add };
