const express = require("express");

const Controller = require("./controller.js");

const router = express.Router();

router.use(Controller.init);

module.exports = router;
