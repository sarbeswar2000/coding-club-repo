const cors = require("cors");
const mongoose = require("mongoose");
const mongoUri =
  "mongodb+srv://sarbeswar58behera:fg6eDXwPObAIkyOf@cluster1.vkd7exz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";
const connectTomongo = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log("Connected to mongo successfully");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectTomongo;
