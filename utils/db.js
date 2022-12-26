require('dotenv').config();
const mongoose = require('mongoose');

const setupDB = async () => {
  try {
    // Connect to MongoDB
    // mongoose.set('useCreateIndex', true);
    const db = await mongoose
      .connect("mongodb+srv://parth190896:alex2580@startek.anh0j1e.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false
      })
      .then(() =>
        console.log(`MongoDB Connected Successfully!`)
      )
      .catch(err => console.log(err));
  } catch (error) {
    console.log(error)
    return null;
  }
};

module.exports = setupDB;