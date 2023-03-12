const express = require('express');
const router = express.Router();
const exam = require('../Schema/Exam')


router.get('/getquestions', async (req, res) => {
    var { id } = req.body;
console.log(id)
    try {
        const ExamExist = await exam.findOne({ _id : id });
        if (ExamExist) {
            return res.status(200).send({ success: true, message: 'Exam get Successfully' ,data:ExamExist })
        }
    }
    catch {
        return res.status(500).send({ success: false, message: 'Server Error' })
    }



})

module.exports = router;