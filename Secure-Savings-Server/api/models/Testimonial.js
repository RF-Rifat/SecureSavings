const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define testimonialSchema before using it
const testimonialSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
    unique: true,
  },
  imageSrc: {
    type: String,
  },
  testimonialDescription: {
    type: String,
    required: true,
  },
  keyWord: {
    type: String,
    required: true,
  },
});

// Now you can use testimonialSchema to define your model
const Testimonial = mongoose.model("Testimonial", testimonialSchema);

// Export the model
module.exports = Testimonial;
