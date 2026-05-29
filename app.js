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

// catching syntax error gracefully
// Catch JSON parsing errors gracefully
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ 
      success: false, 
      message: "The request body is not valid JSON. Please check your syntax." 
    });
  }
  next();
});



// testing GET
// http://localhost:5000/api/listSchools?latitude=28.6&longitude=77.2