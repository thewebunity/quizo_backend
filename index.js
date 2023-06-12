const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(require("./Auth/register_auth"));
app.use(require("./Auth/login_auth"));
app.use(require("./Auth/exam_auth"));
app.use(require("./Auth/question_auth"));
app.use(require("./Auth/get_questions"));
require("./conn");

app.get("/", (req, res) => {
  res.status(200).send("Index");
});

app.listen(port, () => {
  console.log(`http:\\localhost:${port}`);
});
