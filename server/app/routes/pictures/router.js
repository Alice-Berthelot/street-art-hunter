const express = require("express");

const router = express.Router();

const { browse } = require("../../controllers/pictureController");

router.get("/", browse);

module.exports = router;
