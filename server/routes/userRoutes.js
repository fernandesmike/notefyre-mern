const {
  getUser,
  registerUser,
  removeUser,
  updateUser,
} = require("../controllers/userController");
const express = require("express");
const router = express.Router();
require("dotenv").config();

router.get("/", getUser);

router.post("/", registerUser);

router.delete("/", removeUser);

router.patch("/", updateUser);

module.exports = router;
