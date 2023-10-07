const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const mongoose = require("mongoose");
const errorHandlerMiddlerware = require("./middleware/error-handler");
const notFound = require("./middleware/not-found");
require("dotenv").config();
const cors = require("cors");

app.use(express.json());

app.use(cors());

app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

app.use(notFound);
app.use(errorHandlerMiddlerware);

const port = process.env.PORT || 6000;

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(port, console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
