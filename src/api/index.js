const express = require("express");

const router = express.Router();

router.use("/master", require("./master"));
router.use("/hl7", require("./hl7"));
router.use("/satusehat", require("./satusehat"));

module.exports = router;
