const express = require("express");

const Controller = require("./controller.js");

const router = express.Router();

router.use(Controller.init);
router.get("/CodeSystem-location-physical-type", Controller.getCodeSystemLocationPhysicalType);
router.get("/CodeSystem-organization-type", Controller.getCodeSystemOrganizationType);
router.get("/CodeSystem-v3-ActCode", Controller.getCodeSystemV3ActCode);
router.get("/CodeSystem-v3-ParticipationType", Controller.getCodeSystemV3ParticipationType);

module.exports = router;
