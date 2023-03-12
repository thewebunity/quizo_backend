const express = require('express');
const router = express.Router();
const exam = require('../Schema/Exam')
var bcrypt = require('bcryptjs');

router.post('/exam', async (req, res) => {
    var { title, questions, duration, marks } = req.body;

    try {
        const Exam = new exam({ title, questions, duration, marks });
        const ExamRegister = await Exam.save();
        if (ExamRegister) {
            return res.status(200).send({ success: true, message: "Exam Register Successfully" })
        }
    }
    catch {
        return res.status(500).send({ success: false, message: 'Server Error' })
    }
})


module.exports = router;















