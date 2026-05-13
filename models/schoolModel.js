// models/schoolModel.js

const db = require("../config/db");

// Insert new school into DB
exports.addSchool = (data, callback) => {
  const query = `
        INSERT INTO schools (name, address, latitude, longitude)
        VALUES (?, ?, ?, ?)
    `;

  db.query(query, data, callback);
};

// Get all schools
exports.getAllSchools = (callback) => {
  const query = `SELECT * FROM schools`;
  db.query(query, callback);
};
