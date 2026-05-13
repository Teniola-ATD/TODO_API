// import express
const express = require("express");

// cors
const cors = require("cors");

// mongoose
const mongoose = require("mongoose");

// routes
const router = require("./routes/todoRoutes");

// ===== DATABASE URLS =====
const live_url =
  "mongodb+srv://Ateniola:Ateniola%40@cluster0.hhdb23r.mongodb.net/userDB?retryWrites=true&w=majority";

const local_url = "mongodb://localhost:27017/userDB";

// CHOOSE ONE DATABASE HERE
const db_url = local_url; // change to live_url when using Atlas

// connect to MongoDB (ONLY ONCE)
mongoose
  .connect(db_url)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Connection Error:", err));

// create express app
const app = express();
const port = 3000;

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api", router);

// home route
app.get("/", (req, res) => {
  res.send("api is ready for use");
});

// start server
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});