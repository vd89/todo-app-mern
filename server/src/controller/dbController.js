/** @format */

const { connect } = require('mongoose');
require('dotenv').config();

const mongoUrl = process.env.DATABASE_URL;
const mongoOpt = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

const dbController = async () => {
  try {
    await connect(mongoUrl, mongoOpt);
    console.log(`Database is connected to server 🚀 🚀`);
  } catch (err) {
    console.log(err);
  }
};
module.exports = dbController;
