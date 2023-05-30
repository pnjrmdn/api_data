const {User} = require("../../../models"); 
const bcrypt = require("bcrypt");

module.exports = async(req, res) => {

    // this.name, email, password
    const { body } = req;

    if(!body.name || !body.email || !body.password) 
    return res.status(400).json({
        message : "data not fill full",
    });

    const isEmailused = await User.findOne({
        where: {email: body.email}
    });

    if(isEmailused){
        return res.status(400).json({
            message: "email has used",
        });
    }

    const password = await bcrypt.hashSync(body.password, 10);

    const user = await User.create({
        name: body.name,
        email: body.email,
        password,
    });

    // name: body.name,
    // email: body.email,

    return res.json({ 
        id: user.id,
        name: user.name,
        email: user.email,
        // status: "success"
        // password_real: body.password,
        // password
    });
};