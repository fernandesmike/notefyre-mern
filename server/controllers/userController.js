require("mongoose");
const { default: mongoose } = require("mongoose");
const User = require("../models/User");

const getUser = async (req, res) => {
  res.json({ sampleRes: "getUser has been invoked!" });
};
const registerUser = async (req, res) => {
  res.json({ sampleRes: "registerUser has been invoked!" });
};

module.exports = { getUser, registerUser };
