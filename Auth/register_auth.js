const express = require('express');
const router = express.Router();
const user = require('../Schema/User')
var bcrypt = require('bcryptjs');

router.post('/register', async (req, res) => {
    var { name, email, password } = req.body;

    try {
        const emailExist = await user.findOne({ email: req.body.email });
        if (emailExist) {
            return res.status(400).send({ success: false, message: 'User Already Exist' })
        } else {
            var salt = bcrypt.genSaltSync(10);
            var password = bcrypt.hashSync(req.body.password, salt);
            var uid = "user" + Math.floor(Math.random() * 1000000);
            const User = new user({ name, email, password, uid });
            const UserRegister = await User.save();
            if (UserRegister) {
                return res.status(200).send({ success: true, message: "User Register Successfully" })
            }
        }
    }
    catch {
        return res.status(500).send({ success: false, message: 'Server Error' })
    }



})


module.exports = router;