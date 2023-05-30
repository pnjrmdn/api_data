const express = require('express');
const { User } = require('../models');
const router = express.Router();

const usersHandler = require('./handlers/users');
const userIdHandler = require('./handlers/users/id');

router
.route("/")
.get(usersHandler.get)
.post(usersHandler.post);

router
.route("/:userId")
.get(userIdHandler.get)
.put(userIdHandler.put)
.delete(userIdHandler.delete);

module.exports = router;
