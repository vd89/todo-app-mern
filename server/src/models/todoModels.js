/** @format */

const { Schema, model } = require('mongoose');
const titles = {
  HOUSE_WORK: 'HOUSE_WORK',
  OFFICE_WORK: 'OFFICE_WORK',
  HEALTH: 'HEALTH',
  MEETING: 'MEETING',
  READING_LIST: 'READING_LIST',
  RANDOM: 'RANDOM',
};
const todoSchema = new Schema(
  {
    title: { type: String, enum: Object.values(titles), default: titles.RANDOM },
    description: { type: String, required: true },
    dueDate: { type: Date, required: true },
    isCompleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

class Todo {
  static async getAllTodo() {
    const data = await this.find().sort('createdAt');
    return data;
  }
  static async getSingle(todoId) {
    try {
      return await this.findOne({ _id: todoId });
    } catch (error) {
      throw error;
    }
  }
  static async updateTask(description, todoId) {
    try {
      const result = await this.findOne({ _id: todoId });
      result.description = description;
      await result.save;
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async completeTask(todoId) {
    try {
      const result = await this.findOne({ _id: todoId });
      result.isCompleted = true;
      await result.save();
      return result;
    } catch (error) {
      throw error;
    }
  }
}
todoSchema.loadClass(Todo);
module.exports = model('Todo', todoSchema);
