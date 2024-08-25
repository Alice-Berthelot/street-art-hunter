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

const { authorize } = require("../../../middlewares/authorize");
const { authorizeProfileAccess } = require("../../../middlewares/authorizeProfileAccess");

router.get("/", browse);
router.get("/count", count);
router.get("/rank", rank);
router.put("/editpoint", editPoints);
router.get("/:id", read);
router.put("/:id", edit);
router.delete("/:id", authorizeProfileAccess, destroy);

module.exports = router;