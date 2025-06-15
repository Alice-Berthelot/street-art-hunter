const repositories = require("../models");

const browse = async (req, res, next) => {
  try {
    const users = await repositories.user.readAll();
    if (users == null) {
      res.sendStatus(404);
    }
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const user = await repositories.user.read(req.params.id);
    if (user == null) {
      res.sendStatus(404);
    }
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  try {
    const user = { ...req.body, id: req.params.id };
    await repositories.user.update(user);
    if (user == null) {
      res.sendStatus(404);
    }
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const editPoints = async (req, res, next) => {
  try {
    const { pointNumber, artId } = req.body;
    await repositories.user.updatePoints({ pointNumber, artId });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const count = async (req, res, next) => {
  try {
    const users = await repositories.user.readTotalUsers();
    if (users == null) {
      res.sendStatus(404);
    }
    res.json(users);
  } catch (err) {
    next(err);
  }
};

const rank = async (req, res, next) => {
  try {
    const users = await repositories.user.readRanking();
    if (users == null) {
      res.sendStatus(404);
    }
    res.json(users);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  try {
    const user = req.body;
    const insertId = await repositories.user.create(user);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await repositories.user.delete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  edit,
  editPoints,
  count,
  rank,
  add,
  destroy,
};
