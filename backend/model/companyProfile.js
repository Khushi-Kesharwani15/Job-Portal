const mongoose = require("mongoose");

const companyProfileSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const CompanyProfile = mongoose.model("CompanyProfile", companyProfileSchema);

module.exports = CompanyProfile;
