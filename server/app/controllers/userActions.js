const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const users = await tables.user.readAll();
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
    const user = await tables.user.read(req.params.id);
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
    await tables.user.update(user);
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
    await tables.user.updatePoints({ pointNumber, artId });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const count = async (req, res, next) => {
  try {
    const users = await tables.user.readTotalUsers();
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
    const users = await tables.user.readRanking();
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
    const insertId = await tables.user.create(user);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.user.delete(req.params.id);
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
