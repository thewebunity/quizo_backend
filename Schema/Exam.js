const mongoose = require("mongoose");
const { Schema } = mongoose;

const QuestionSchema = new Schema(
  {
    question: { type: String, required: true },
    description: { type: String },
    answer: { type: Number, required: true },
    imageUrl: { type: String, default: "" },
    options: { type: [String], required: true },
  },
  { timestamps: true }
);

const ExamSchema = new Schema(
  {
    title: { type: String },
    questions: { type: [QuestionSchema] },
    duration: { type: Number },
    marks: { type: Number, default: 1 },
  },
  { timestamps: true }
);

const Exam = mongoose.model("Exam", ExamSchema);

module.exports = Exam;
