const express = require("express");

const router = express.Router();

const { browse } = require("../../../controllers/pictureActions");

router.get("/", browse);

module.exports = router;
