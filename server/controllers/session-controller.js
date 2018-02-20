const Session = require('../models/session')

const sessionController = {}

sessionController.create = (req, res) => {
  const {
    user,
    rating,
    notes,
    techniques,
    strengths,
    weaknesses } = req.body

  const newSession = new Session();
  newSession.user = user
  newSession.rating = rating
  newSession.notes = notes

  techniques.forEach(technique => {
    newSession.techniques.push({
      technique: technique.technique,
      notes: technique.notes
    })
  })

  strengths.forEach(strength => {
    newSession.strengths.push({
      technique: strength.technique,
      notes: strength.notes
    })
  })

  weaknesses.forEach(weakness => {
    newSession.weaknesses.push({
      technique: weakness.technique,
      notes: weakness.notes
    })
  })

  newSession.save(err => {
    if (err) return console.log(err)
    return res.send(newSession)
  })
}


module.exports = sessionController
