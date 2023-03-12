const express = require('express');
const router = express.Router();
const user = require('../Schema/User')
var bcrypt = require('bcryptjs');


router.post('/login', async (req, res) => {

    var { email, password } = req.body;

    try {
        const User = await user.findOne({ email: email })

        if (!User) {
            return res.status(400).send({ success: false, message: 'User not Registered' })
        } else {
            const login = bcrypt.compareSync(password, User.password);
            if (login === true) {
                return res.status(200).send({ success: true, message: "User Login Successfull" ,uid:User.uid})
            } else {
                return res.status(400).send({ success: false, message: "Wrong Credentials" })
            }
        }
    } catch (error) {
        return res.status(500).send({ success: false, message: 'Server Error' })
    }
}

)


module.exports = router;