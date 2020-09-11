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
const titleSchema = new Schema({
  title: { type: String, enum: Object.values(titles), default: titles.RANDOM },
});

module.exports = model('Title', titleSchema);
