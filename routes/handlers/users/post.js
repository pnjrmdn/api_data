const express = require('express');
const {User} = require("../../../models");
const router = express.Router();

module.exports = async(req, res) => {

    const body = req.body;
    if(!body.name || !body.email)
        return res.status(400).json({message: "name and email null!"});

    const user = await User.create(body);
    return res.json(user);
};