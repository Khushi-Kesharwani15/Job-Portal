const jobService = require("../services/jobServices");

const { successResponse, errorResponse } = require("../helpers/responseHelper");

// CREATE JOB
const createJob = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return errorResponse(res, "Job title is required", 400);
    }

    // Logged-in company ID
    const companyId = req.userId;

    console.log("CREATE JOB COMPANY ID:", companyId);

    if (!companyId) {
      return errorResponse(res, "Unauthorized", 401);
    }

    const job = await jobService.createJob(req.body, companyId);

    return successResponse(res, {
      message: "Job created successfully",
      data: job,
    });
  } catch (error) {
    console.log("CREATE JOB ERROR:", error);

    return errorResponse(res, error.message, 500);
  }
};
// GET ALL JOBS
const getAllJobs = async (req, res) => {
  try {
    const companyId = req.userId;
    const role = req.role;

    console.log("GET JOB USER ID:", companyId);
    console.log("GET JOB ROLE:", role);

    if (!companyId) {
      return errorResponse(res, "Unauthorized", 401);
    }

    let jobs;

    // ADMIN -> ALL JOBS
    if (role === "admin") {
      jobs = await jobService.getAllJobs();
    }

    // COMPANY -> ONLY OWN JOBS
    else if (role === "company") {
      jobs = await jobService.getAllJobs(companyId);
    } else {
      return errorResponse(res, "Unauthorized", 401);
    }

    return successResponse(res, "Jobs fetched successfully", jobs, 200);
  } catch (error) {
    console.log("GET ALL JOBS ERROR:", error);

    return errorResponse(res, error.message, 500);
  }
};
// GET SINGLE JOB
const getSingleJob = async (req, res) => {
  try {
    const companyId = req.userId;
    const role = req.role;

    if (!companyId) {
      return errorResponse(res, "Unauthorized", 401);
    }

    let job;

    // ADMIN -> CAN VIEW ANY JOB
    if (role === "admin") {
      job = await jobService.getSingleJob(req.params.id);
    }

    // COMPANY -> CAN VIEW ONLY OWN JOB
    else if (role === "company") {
      job = await jobService.getSingleJob(req.params.id, companyId);
    } else {
      return errorResponse(res, "Unauthorized", 401);
    }

    if (!job) {
      return errorResponse(res, "Job not found", 404);
    }

    return successResponse(res, {
      message: "Job fetched successfully",
      data: job,
    });
  } catch (error) {
    console.log("GET SINGLE JOB ERROR:", error);

    return errorResponse(res, error.message, 500);
  }
};
// UPDATE JOB
const updateJob = async (req, res) => {
  try {
    const companyId = req.userId;
    const role = req.role;

    if (!companyId) {
      return errorResponse(res, "Unauthorized", 401);
    }

    let job;

    // ADMIN -> CAN UPDATE ANY JOB
    if (role === "admin") {
      job = await jobService.updateJob(req.params.id, req.body);
    }

    // COMPANY -> CAN UPDATE ONLY OWN JOB
    else if (role === "company") {
      job = await jobService.updateJob(req.params.id, req.body, companyId);
    } else {
      return errorResponse(res, "Unauthorized", 401);
    }

    if (!job) {
      return errorResponse(res, "Job not found or unauthorized", 404);
    }

    return successResponse(res, {
      message: "Job updated successfully",
      data: job,
    });
  } catch (error) {
    console.log("UPDATE JOB ERROR:", error);

    return errorResponse(res, error.message, 500);
  }
};
// DELETE JOB
const deleteJob = async (req, res) => {
  try {
    const companyId = req.userId;
    const role = req.role;

    if (!companyId) {
      return errorResponse(res, "Unauthorized", 401);
    }

    let job;

    // ADMIN -> CAN DELETE ANY JOB
    if (role === "admin") {
      job = await jobService.deleteJob(req.params.id);
    }

    // COMPANY -> CAN DELETE ONLY OWN JOB
    else if (role === "company") {
      job = await jobService.deleteJob(req.params.id, companyId);
    } else {
      return errorResponse(res, "Unauthorized", 401);
    }

    if (!job) {
      return errorResponse(res, "Job not found or unauthorized", 404);
    }

    return successResponse(res, {
      message: "Job deleted successfully",
    });
  } catch (error) {
    console.log("DELETE JOB ERROR:", error);

    return errorResponse(res, error.message, 500);
  }
};
//JOB SUSPEND
const toggleSuspendJob = async (req, res) => {
  try {
    if (req.role !== "admin") {
      return errorResponse(
        res,
        "Only admin can suspend or unsuspend jobs",
        403,
      );
    }

    const job = await jobService.toggleSuspendJob(req.params.id);

    if (!job) {
      return errorResponse(res, "Job not found", 404);
    }

    return successResponse(
      res,
      job.isSuspend
        ? "Job suspended successfully"
        : "Job unsuspended successfully",
      job,
      200,
    );
  } catch (error) {
    console.log("SUSPEND JOB ERROR:", error);

    return errorResponse(res, error.message, 500);
  }
};
//ACTIVE JOBS

const getActiveJobs = async (req, res) => {
  try {
    const jobs = await jobService.getActiveJobs();

    return successResponse(
      res,
      "Active jobs fetched successfully",
      jobs,
      200
    );
  } catch (error) {
    console.log("GET ACTIVE JOBS ERROR:", error);
    return errorResponse(res, error.message, 500);
  }
};

const getJobDetails = async (req, res) => {
  try {
    const job = await jobService.getJobDetails(req.params.id);

    if (!job) {
      return errorResponse(res, "Job not found", 404);
    }

    return successResponse(
      res,
      "Job details fetched successfully",
      job,
      200
    );
  } catch (error) {
    console.log("GET JOB DETAILS ERROR:", error);

    return errorResponse(res, error.message, 500);
  }
};

module.exports = {
  createJob,
  getAllJobs,
  getSingleJob,
  updateJob,
  deleteJob,
  toggleSuspendJob,
  getActiveJobs,getJobDetails,
};
