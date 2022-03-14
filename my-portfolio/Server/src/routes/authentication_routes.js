const express = require("express");
const router = express.Router();
const authController = require("../controllers/authentication_controller");

router.post("/login", authController.validateLogin, authController.login);
router.post(
    "/register",
    authController.validateRegister,
    authController.register
);
router.get(
    "/validate",
    authController.validateToken,
    authController.renewToken
);

module.exports = router;