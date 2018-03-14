import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div className="container">
    <h1>Trainer</h1>
    <Link to="/new-session">
      <button onClick={() => this.setState({ newSession: true })}>
        Record a Session
      </button>
    </Link>
  </div>
)

export default Home
