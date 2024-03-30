const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute");

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.send("welcome to our app");
});

const port = process.env.PORT || 3000;
const uri = process.env.ATLAS_URI;

app.listen(port, (req, res) => {
  console.log(`server listening on port ${port}`);
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection established"))
  .catch((err) => console.log("DB connection error:", err));
