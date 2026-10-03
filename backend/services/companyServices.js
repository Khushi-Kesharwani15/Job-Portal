const CompanyProfile = require("../model/companyProfile");

const createCompany = async (companyData) => {
  try {
    return await CompanyProfile.create(companyData);
  } catch (error) {
    throw error;
  }
};

const findCompanyByUserId = async (userId) => {
  return await CompanyProfile.findOne({ userId: userId });
};

module.exports = {
  createCompany,
  findCompanyByUserId,
};
