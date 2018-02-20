const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SkillSchema = new Schema({
  technique: String,
  notes: String
})

const SessionSchema = new Schema({
  user: { type: Schema.ObjectId, ref: 'User', required: true },
  notes: String,
  rating: { type: Number, min: 0, max: 5 },
  techniques: [ SkillSchema ],
  strengths: [ SkillSchema ],
  weaknesses: [ SkillSchema ],
  date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Session', SessionSchema)
