// routes/schoolRoutes.js

const express = require("express");
const router = express.Router();

// Import controller
const schoolController = require("../controllers/schoolController");

// POST → Add school
router.post("/addSchool", schoolController.addSchool);

// GET → List schools
router.get("/listSchools", schoolController.listSchools);

module.exports = router;
