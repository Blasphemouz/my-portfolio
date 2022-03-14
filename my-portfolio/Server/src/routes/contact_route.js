const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contact_controller");

router.post('/post/contacttodb', contactController.contactToDB);

module.exports = router;