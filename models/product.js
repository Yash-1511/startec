const Mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const { Schema } = Mongoose;

const options = {
  separator: '-',
  lang: 'en',
  truncate: 120
};
const UploadedFile  = new Mongoose.Schema({
  path: String,
  type: String,
  size: Number,
  folder: String,
  filename: String
})
Mongoose.plugin(slug, options);

// Product Schema
const ProductSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required:true,
  },
  slug: {
    type: String,
    slug: 'name',
    unique: true
  },
  uploadedFile: {
    type: UploadedFile,
  },
  description: {
    type: String,
    trim: true
  },
  size:{
    type:Array,
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    default: null
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = Mongoose.model('Product', ProductSchema);