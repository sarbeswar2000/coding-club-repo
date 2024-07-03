const mongoose = require("mongoose");
const { Schema } = mongoose;
const OtpSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 300,
  },
});
module.exports = mongoose.model("OTP", OtpSchema);
