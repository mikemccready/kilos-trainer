import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { AES, enc } from 'crypto-js'
import { hashSecret as secret } from '../../../config.js'

export default class Home extends Component {
  state = {
    sessions: null,
    strengths: {},
    weaknesses: {},
    techniques: {}
  }

  componentDidMount() {
    this.retrieveSessions()
  }

  retrieveSessions() {
    const storedHashed = localStorage.getItem('sessions')
    if (storedHashed) {
      const bytes = AES.decrypt(storedHashed.toString(), secret)
      const sessions = JSON.parse(bytes.toString(enc.Utf8))
      this.setState({ sessions })
      this.parseTechniques(sessions)
      return
    }
    return
  }

  parseTechniques(sessions) {
    let storedTechniques = []
    let storedStrengths = []
    let storedWeaknesses = []

    const techniquesCount = {}
    const strengthsCount = {}
    const weaknessesCount = {}

    sessions.forEach(session => {
      storedTechniques = storedTechniques.concat(session.techniques)
      storedStrengths.concat(session.strengths)
      storedWeaknesses.concat(session.weaknesses)
    })
    storedTechniques.forEach(tech => techniquesCount[tech.technique] ? techniquesCount[tech.technique]++ : techniquesCount[tech.technique] = 1)
    const techniques = Object.keys(techniquesCount).sort((a,b) => techniquesCount[b] - techniquesCount[a])
    console.log(techniques)
  }

  render() {
    const { sessions } = this.state

    return (
      <div className="container">
        <h1>Trainer</h1>

        {
          sessions &&
          <h3>{ sessions.length } Sessions</h3>
        }

        <Link to="/new-session">
          <button onClick={() => this.setState({ newSession: true })}>
            Record a Session
          </button>
        </Link>
      </div>
    )
  }
}
