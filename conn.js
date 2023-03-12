const mongoose = require('mongoose');
const url = 'mongodb+srv://vishal7859:Vishal4691@cluster0.cnpdj.mongodb.net/Quizo?retryWrites=true&w=majority'

mongoose.set("strictQuery", false);
mongoose.connect(url ,{
}).then((result) => {
    console.log("connected to server")
}).catch((err) => {
    console.log(err)
});