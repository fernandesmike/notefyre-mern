const { getUser, registerUser } = require("../controllers/userController");
const express = require("express");
const router = express.Router();
require("dotenv").config();

router.get("/", getUser);

router.post("/", registerUser);

module.exports = router;
