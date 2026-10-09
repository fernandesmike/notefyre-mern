require("mongoose");
const { default: mongoose } = require("mongoose");
const User = require("../models/User");

const getUser = async (req, res) => {
  res.json({ sampleRes: "User A retrieved!" });
};

const registerUser = async (req, res) => {
  res.json({ sampleRes: "New user added!" });
};

const removeUser = async (req, res) => {
  res.json({ sampleRes: "Removed user account!" });
};

const updateUser = async (req, res) => {
  res.json({ sampleRes: "Updated user profile!" });
};

module.exports = { getUser, registerUser, removeUser, updateUser };
