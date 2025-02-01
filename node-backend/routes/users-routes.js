const express = require("express");
const router = express.Router();
const userController = require("../controllers/users-controller");
const { check } = require("express-validator");
router.get("/", userController.getUsers);
router.post(
  "/signup",
  [
    check("name").not().isEmpty(),
    check("email")
      .normalizeEmail() // Test@test.com => test@test.com
      .isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  userController.signup
);
router.post("/login", userController.login);

module.exports = router;
