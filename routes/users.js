var express = require('express');
var router = express.Router();

const {User} = require("../models");
const usersHandler = require('./handlers/users');
const userIdHandler = require("./handlers/users/id");

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
