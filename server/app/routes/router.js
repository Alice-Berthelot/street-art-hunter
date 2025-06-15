const express = require("express");

const router = express.Router();

const authRouter = require("./auth/router");
const artsRouter = require("./arts/router");
const usersRouter = require("./users/router");
const picturesRouter = require("./pictures/router");
const uploadRouter = require("./upload/router");

router.use("/auth", authRouter);
router.use("/arts", artsRouter);
router.use("/users", usersRouter);
router.use("/pictures", picturesRouter);
router.use("/upload", uploadRouter);

module.exports = router;