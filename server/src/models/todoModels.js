/** @format */

const { Schema, model } = require('mongoose');

const todoSchema = new Schema(
  {
    title: { type: Schema.Types.ObjectId, ref: 'Title' },
    description: { type: String, required: true },
    dueDate: { type: Date },
    isCompleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = model('Todo', todoSchema);
