const express = require("express");

const router = express.Router();

const {
  browse,
  count,
  rank,
  editPoints,
  read,
  edit,
  destroy,
} = require("../../../controllers/userActions");

const { authorizeAdmin } = require("../../../middlewares/authorizeAdmin");
const { authorizeProfileAccess } = require("../../../middlewares/authorizeProfileAccess");

router.get("/", browse);
router.get("/count", count);
router.get("/rank", rank);
router.put("/editpoint", authorizeAdmin, editPoints);
router.get("/:id", read);
router.put("/:id", authorizeProfileAccess, edit);
router.delete("/:id", authorizeProfileAccess, destroy);

module.exports = router;