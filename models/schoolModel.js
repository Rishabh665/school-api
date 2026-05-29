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


// nowgong: Latitude: \(25.0574^{\circ }\) NLongitude: \(79.4381^{\circ }\) E