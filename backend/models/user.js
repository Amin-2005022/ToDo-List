const mongoose = require("mongoose");
const todoList = require("./todoList");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  todoList: [{
    type: mongoose.Types.ObjectId,
    ref:"TodoList",
  },],
});

module.exports = mongoose.model("User", userSchema);
