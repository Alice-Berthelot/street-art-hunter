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

const { authorize } = require("../../../middlewares/authorize");

router.get("/", browse);
router.get("/accepted", browseAccepted);
router.get("/comparedArts", browseComparedArts);
router.get("/gallery", browseGallery);
router.get("/count", count);
router.get("/:id", read);
router.put("/:id", edit);
router.delete("/:id", destroy);

module.exports = router;
