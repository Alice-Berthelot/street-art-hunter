const express = require("express");

const router = express.Router();

const {
  browse,
  count,
  browseComparedArts,
  read,
  edit,
  browseAccepted,
} = require("../../../controllers/artActions");

router.get("/", browse);
router.get("/count", count);
router.get("/accepted", browseAccepted);
router.get("/comparedArts", browseComparedArts);
router.get("/:id", read);
router.put("/:id", edit);

module.exports = router;
