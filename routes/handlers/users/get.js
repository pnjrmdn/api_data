const express = require('express');
const {User} = require("../../../models");
const router = express.Router();

module.exports = async(req, res) => {

  const users = await User.findAll();
  return res.json(users);

};