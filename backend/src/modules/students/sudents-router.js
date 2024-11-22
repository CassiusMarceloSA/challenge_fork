const express = require("express");
const router = express.Router();
const studentController = require("./students-controller");
const studentsSchema = require("./students-schema");
const { validateRequest } = require("../../utils");

router.get("", studentController.handleGetAllStudents);
router.post(
  "",
  validateRequest(studentsSchema.CreateSchema),
  studentController.handleAddStudent
);
router.get("/:id", studentController.handleGetStudentDetail);
router.post("/:id/status", studentController.handleStudentStatus);
router.put("/:id", studentController.handleUpdateStudent);

module.exports = { studentsRoutes: router };
