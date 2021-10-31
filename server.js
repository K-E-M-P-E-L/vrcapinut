require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));

app.use(express.json());
app.use(cors());

const vrcRouter = require("./routes/vrcaRouter");
app.use("/vrca", vrcRouter);

const CategoryRoutes = require('./routes/category')
app.use('/', CategoryRoutes)

const ImageRoutes = require('./routes/images')
app.use('/', ImageRoutes)


app.listen(3001, () => console.log("Server Started"));