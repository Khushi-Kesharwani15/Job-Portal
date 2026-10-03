const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  createJob,
  getAllJobs,
  getSingleJob,
  updateJob,
  deleteJob,
  toggleSuspendJob,
  getActiveJobs,getJobDetails,
} = require("../controller/jobController");

// CREATE JOB
router.post("/create-job", authMiddleware, createJob);

// GET ALL JOBS
router.get("/all-jobs", authMiddleware, getAllJobs);

// GET SINGLE JOB
router.get("/single-job/:id", authMiddleware, getSingleJob);

// UPDATE JOB
router.put("/update-job/:id", authMiddleware, updateJob);

// DELETE JOB
router.delete("/delete-job/:id", authMiddleware, deleteJob);

// SUSPEND / UNSUSPEND JOB
router.put("/suspend-job/:id", authMiddleware, toggleSuspendJob);
//ACTIVE -JOBS 
router.get("/active-job", getActiveJobs);
//ACTIVE -JOBS 
router.get("/job-detail/:id", getJobDetails);


module.exports = router;
