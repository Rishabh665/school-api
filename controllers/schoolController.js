// controllers/schoolController.js

// importing schoolModel which follow schema and helper funciton
const schoolModel = require("../models/schoolModel");
const calculateDistance = require("../utils/distanceCalculator");

// ✅ Add School API
const addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  // Basic validation
  if (!name || !address || latitude == null || longitude == null) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  // Prepare data
  const data = [name, address, latitude, longitude];

  // Call model
  schoolModel.addSchool(data, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.status(201).json({
      message: "School added successfully",
      id: result.insertId,
    });
  });
};

// ✅ List Schools API (Sorted by distance)
const listSchools = (req, res) => {
  // const { latitude, longitude } = req.query;
  const {userLatitude,userLongitude} = req.query;
  // Validate input
  if (!userLatitude || !userLongitude) {
    return res.status(400).json({
      message: "Latitude and Longitude required",
    });
  }

  schoolModel.getAllSchools((err, schools) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    // Add distance to each school
    const sortedSchools = schools.map((school) => {
      const distance = calculateDistance(
        userLatitude,
        userLongitude,
        school.latitude,
        school.longitude,
      );

      return { ...school, distance };
    });

    // Sort by nearest
    sortedSchools.sort((a, b) => a.distance - b.distance);

    res.json(sortedSchools);
  });
};

module.exports = {
    addSchool,
    listSchools
};
