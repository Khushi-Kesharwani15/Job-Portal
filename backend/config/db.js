const mongooes = require('mongoose');
dotenv.config();
const UserTable = async () => {
  try {
    const conn = await mongooes.connect(process.env.MONGO_URI)
    console.log("MongoDB Connected:" ,process.env.MONGO_URI);
  }
  catch (error) {
    console.log(error);
  } }
  module.exports = UserTable;