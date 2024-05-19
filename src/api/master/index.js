const express = require("express");

const Controller = require("./controller.js");
const Telecom = require("./controllers/telecom.js");
const Address = require("./controllers/address.js");

const router = express.Router();

router.use(Controller.init);

router.post('/telecom',Telecom.init,Telecom.insert)
router.get('/telecom',Telecom.init,Telecom.select)
router.patch('/telecom',Telecom.init,Telecom.update)
router.delete('/telecom',Telecom.init,Telecom.delete)

router.post('/address',Address.init,Address.insert)
router.get('/address',Address.init,Address.select)
router.patch('/address',Address.init,Address.update)
router.delete('/address',Address.init,Address.delete)


module.exports = router;
