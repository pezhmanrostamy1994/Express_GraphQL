const mongoose = require("mongoose"); 
module.exports.connectToDataBase = async (cb) => {
  try {
    const options = {
      useNewUrlParser: true,
      autoIndex: true,
      useUnifiedTopology: true,
      dbName: "blogs",
    }; 
    await mongoose.connect("mongodb://localhost:27017", options);
    cb(null)
    console.log(`connected to DB...ready to use!`);
  } catch (err) {
    cb(err)
    console.error("could not connect to MongoDB...", err);
  }
};