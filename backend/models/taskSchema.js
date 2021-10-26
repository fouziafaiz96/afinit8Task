const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema({
  noOfStudents: {
    type: Number,
  },
  totalClasses: {
    type: Number,
  },
  expense: {
    type: Number,
  },
  revenue: {
    type: Number,
  },
  profit: {
    type: Number,
  },
});
const TaskIemSchema = new mongoose.model("TaskSchema", TaskSchema);
module.exports = TaskIemSchema;
