const {User} = require('../../../models');

module.exports = async(req, res) => {

    //get email and password

    const { body } = req;

    if(!body.email || !body.password)
    return res.status(400).json({
        message: "email and password must be provided",
    });

    const user = await User.findOne({
        where: {email: body.email}
    });

    if(user)
    return res.status(404).json({
        message: "email existing",
    });

    if(!user)
    return res.status(404).json({
        message: "email not found",
    });

    return res.json({ status: "success"});
};