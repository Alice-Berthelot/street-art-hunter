const repositories = require("../models");

const browse = async (req, res, next) => {
  try {
    const arts = await repositories.art.readAll();
    res.status(200).json(arts);
  } catch (err) {
    next(err);
  }
};

const browseAccepted = async (req, res, next) => {
  try {
    const arts = await repositories.art.readAccepted();
    res.status(200).json(arts);
  } catch (err) {
    next(err);
  }
};

const browseComparedArts = async (req, res, next) => {
  try {
    const arts = await repositories.art.readComparedArts();
    res.status(200).json(arts);
  } catch (err) {
    next(err);
  }
};

const browseGallery = async (req, res, next) => {
  try {
    const arts = await repositories.art.readGallery();
    res.status(200).json(arts);
  } catch (err) {
    next(err);
  }
};

const count = async (req, res, next) => {
  try {
    const arts = await repositories.art.readTotalArts();
    res.status(200).json(arts);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const art = await repositories.art.read(req.params.id);
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
    await repositories.art.update(art, req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await repositories.art.delete(req.params.id);
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