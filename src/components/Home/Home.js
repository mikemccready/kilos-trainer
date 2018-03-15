import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { AES, enc } from 'crypto-js'
import { hashSecret as secret } from '../../../config.js'

export default class Home extends Component {
  state = {
    sessions: null
  }

  componentDidMount() {
    this.retrieveSessions()
  }

  retrieveSessions() {
    const storedHashed = localStorage.getItem('sessions')
    if (storedHashed) {
      const bytes = AES.decrypt(storedHashed.toString(), secret)
      this.setState({ sessions: JSON.parse(bytes.toString(enc.Utf8)) })
    }
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
