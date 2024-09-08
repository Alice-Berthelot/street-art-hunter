const express = require("express");

const router = express.Router();

const {
  browse,
  browseAccepted,
  browseComparedArts,
  browseGallery,
  count,
  read,
  edit,
  destroy,
} = require("../../../controllers/artActions");

const { authorizeAdmin } = require("../../../middlewares/authorizeAdmin");

router.get("/", browse);
router.get("/accepted", browseAccepted);
router.get("/comparedArts", browseComparedArts);
router.get("/gallery", browseGallery);
router.get("/count", count);
router.get("/:id", read);
router.put("/:id", authorizeAdmin, edit);
router.delete("/:id", authorizeAdmin, destroy);

module.exports = router;
