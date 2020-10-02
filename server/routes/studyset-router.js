const express = require("express");
var authMiddleware = require("../middleware/auth-middleware");

const StudySetCtrl = require("../controllers/studyset-ctrl");

const router = express.Router();

// router.post("/set", StudySetCtrl.insertStudySet);
router.post("/set", authMiddleware.checkIfAuthenticated, (req, res) => {
  StudySetCtrl.insertStudySet(req, res);
});
router.get("/setlist", authMiddleware.checkIfAuthenticated, (req, res) => {
  StudySetCtrl.getAllStudySets(req, res);
});
router.get("/existingset", authMiddleware.checkIfAuthenticated, (req, res) => {
  StudySetCtrl.checkTitleExists(req, res);
});
router.get("/set/:id", authMiddleware.checkIfAuthenticated, (req, res) => {
  StudySetCtrl.getStudySetById(req, res);
});
router.get("/validset/:id", authMiddleware.checkIfAuthenticated, (req, res) => {
  StudySetCtrl.checkIdExists(req, res);
});
router.put("/set/:id", authMiddleware.checkIfAuthenticated, (req, res) => {
  StudySetCtrl.updateStudySetById(req, res);
});
router.delete("/set/:id", authMiddleware.checkIfAuthenticated, (req, res) => {
  StudySetCtrl.removeStudySetById(req, res);
});

module.exports = router;
