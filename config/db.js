// config/db.js

// Import mysql2 (modern MySQL client)
const mysql = require("mysql2");

// Load environment variables
require("dotenv").config();

// Create connection
const db = mysql.createConnection({
  host: process.env.DB_HOST, // e.g. localhost
  user: process.env.DB_USER, // e.g. root
  password: process.env.DB_PASS, // your password
  database: process.env.DB_NAME, // school_db
});

// Connect to DB
db.connect((err) => {
  if (err) {
    console.error("DB Connection Failed:", err);
  } else {
    console.log("✅ MySQL Connected");
  }
});

// Export DB connection
module.exports = db;
