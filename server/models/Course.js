var mongoose = require('mongoose');

//A mongoose Schema
var courseSchema = new mongoose.Schema({
  name: String,
  featured: Boolean,
  published: Date
});

// Compile Schema into a mongoose Model
module.exports = mongoose.model('Course', courseSchema);