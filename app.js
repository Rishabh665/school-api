// app.js

const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
}); // api testing
app.use(cors()); // allow cross-origin requests
app.use(express.json()); // parse JSON body

// Routes
const schoolRoutes = require("./routes/schoolRoutes");
app.use("/api", schoolRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("School API is running...");
});

module.exports = app;


// testing GET
// http://localhost:5000/api/listSchools?latitude=28.6&longitude=77.2