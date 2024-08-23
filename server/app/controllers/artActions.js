const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const arts = await tables.art.readAll();
    res.status(200).json(arts);
  } catch (err) {
    next(err);
  }
};

const browseAccepted = async (req, res, next) => {
  try {
    const arts = await tables.art.readAccepted();
    res.status(200).json(arts);
  } catch (err) {
    next(err);
  }
};

const browseComparedArts = async (req, res, next) => {
  try {
    const arts = await tables.art.readComparedArts();
    res.status(200).json(arts);
  } catch (err) {
    next(err);
  }
};

const browseGallery = async (req, res, next) => {
  try {
    const arts = await tables.art.readGallery();
    res.status(200).json(arts);
  } catch (err) {
    next(err);
  }
};

const count = async (req, res, next) => {
  try {
    const arts = await tables.art.readTotalArts();
    res.status(200).json(arts);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const art = await tables.art.read(req.params.id);
    if (art == null) {
      res.sendStatus(404);
    }
    res.json(art);
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  try {
    const art = req.body;
    const result = await tables.art.update(art, req.params.id);
    if (result == null) {
      res.sendStatus(404).json({ message: "Art not found" });
    }
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  console.log("req.params.id", req.params.id)
  try {
    await tables.art.delete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  browseAccepted,
  browseComparedArts,
  browseGallery,
  count,
  read,
  edit,
  destroy,
};
