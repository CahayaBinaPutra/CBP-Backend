const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  type: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  summary: { type: String },
  hasDetailPage: { type: Boolean, required: true, default: false }, // Add this field
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

ContentSchema.index({ title: 'text', content: 'text', summary: 'text' });

module.exports = mongoose.model('Content', ContentSchema);
