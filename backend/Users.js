const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  //ДОП
  city: String,
  phone:String,

});

module.exports = mongoose.model("users", UserSchema);
