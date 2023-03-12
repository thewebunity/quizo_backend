const express = require('express');
const router = express.Router();
const questions = require('../Schema/Exam')
var bcrypt = require('bcryptjs');

router.post('/questions', async (req, res) => {
    var { question, description, answer, imageUrl, options, id } = req.body;

    try {
        const questionExist = await questions.updateOne(
            { _id: id },
            {
                $push: {
                    questions: {
                        question: question,
                        description: description,
                        options: options,
                        imageUrl: imageUrl,
                        answer: answer,
                    },
                },
            }
        );
        if (questionExist) {
            return res.status(200).send({ success: true, message: "Question Add Successfully" })
        } else {
            return res.status(400).send({ success: false, message: 'Something Went Wrong' })

        }
    }
    catch {
        return res.status(500).send({ success: false, message: 'Server Error' })
    }



})


module.exports = router;