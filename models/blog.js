const Mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const { Schema } = Mongoose;

const options = {
  separator: "-",
  lang: "en",
  truncate: 120,
};
const UploadedFile = new Mongoose.Schema({
  path: String,
  type: String,
  size: Number,
  folder: String,
  filename: String,
});

Mongoose.plugin(slug, options);

// Product Schema
const BlogSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  slug: {
    type: String,
    slug: "title",
    unique: true,
  },
  uploadedFile: {
    type: UploadedFile,
  },
  description: {
    type: String,
    trim: true,
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Mongoose.model("Blog", BlogSchema);
