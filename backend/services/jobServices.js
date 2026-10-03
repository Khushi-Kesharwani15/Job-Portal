const JobList = require("../model/jobList");

// ==========================================
// CREATE JOB
// ==========================================
const createJob = async (data, companyId) => {
  return await JobList.create({
    ...data,
    companyId: companyId,
  });
};
// GET ALL JOBS
// Admin -> All Jobs
// Company -> Only Own Jobs
const getAllJobs = async (companyId = null) => {
  if (!companyId) {
    return await JobList.find().sort({
      createdAt: -1,
    });
  }
  return await JobList.find({
    companyId: companyId,
  }).sort({
    createdAt: -1,
  });
};
// GET SINGLE JOB
// Only logged-in company's job
const getSingleJob = async (id, companyId) => {
  return await JobList.findOne({
    _id: id,
    companyId: companyId,
  });
};
// UPDATE JOB
// Only owner company can update
const updateJob = async (id, data, companyId) => {
  return await JobList.findOneAndUpdate(
    {
      _id: id,
      companyId: companyId,
    },
    data,
    {
      new: true,
      runValidators: true,
    },
  );
};
// DELETE JOB
// Only owner company can delete
const deleteJob = async (id, companyId) => {
  return await JobList.findOneAndDelete({
    _id: id,
    companyId: companyId,
  });
};
//SUPSPEND JOB
const toggleSuspendJob = async (id) => {
  const job = await JobList.findById(id);

  if (!job) {
    return null;
  }

  job.isSuspend = !job.isSuspend;

  await job.save();

  return job;
};
const getActiveJobs = async () => {
  return await JobList.find({
    isSuspend: false,
  });
};
const getJobDetails = async (id) => {
  const job = await JobList.findOne({ _id: id, isSuspend: false });
  if (!job) {
    return null;
  }
  return job;
};

module.exports = {
  createJob,
  getAllJobs,
  getSingleJob,
  updateJob,
  deleteJob,
  toggleSuspendJob,
  getActiveJobs,
  getJobDetails,
};
