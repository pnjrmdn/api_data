const {User} = require("../../../../models");

module.exports = async(req, res) => {

    const {userId} = req.params;

    const user = await User.findByPk(userId);
    if(!user) return res.status(400).json({
        message: 'user not found',
    });

    await user.update(req.body);
    await user.save();

    return res.json({user})
    
}