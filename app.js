const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const mongoose = require("mongoose");
const errorHandlerMiddlerware = require("./middleware/error-handler");
const notFound = require("./middleware/not-found");
require("dotenv").config();
const { dirname } = require("path");
const fileURLToPath = require("url");
const path = require("path");
const cors = require("cors");

app.use(cors());

// const __dirName = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, "./FRONTEND/dist")));

app.use(express.json());
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./FRONTEND/dist", "index.html"));
});

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
