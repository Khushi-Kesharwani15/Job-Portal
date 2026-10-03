const mongoose = require("mongoose");

const jobListSchema = new mongoose.Schema(
  {
    category: {
      type: String,
    },

    title: {
      type: String,
      required: true,
    },

    companyName: {
      type: String,
    },
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    location: {
      type: String,
    },

    jobType: {
      type: String,
      enum: ["part time", "full time", "remote"],
    },

    salaryMin: {
      type: Number,
    },

    salaryMax: {
      type: Number,
    },

    skills: {
      type: String,
    },

    expire: {
      type: Date,
    },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },

    isSuspend: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const JobList = mongoose.model("JobList", jobListSchema);

module.exports = JobList;
