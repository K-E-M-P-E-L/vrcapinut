const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");


app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://Kempel:Buster2013@cluster0.umvrm.gcp.mongodb.net/vrca")

app.use("/", require("./routes/avatarRoute"));

app.listen(3001, function () {
    console.log("express server is running on port 3001")
})