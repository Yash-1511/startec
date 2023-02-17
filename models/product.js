const Mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const { Schema } = Mongoose;

const options = {
  separator: "-",
  lang: "en",
  truncate: 120,
};

Mongoose.plugin(slug, options);

// Product Schema
const ProductSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  slug: {
    type: String,
    slug: "name",
    unique: true,
  },
  images: {
    type: Mongoose.Mixed
  },
  description: {
    type: String,
    trim: true,
  },
  size:{
    type:Array,
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    default: null,
  },
  order:{
    type: Number,
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Mongoose.model("Product", ProductSchema);
