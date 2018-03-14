import React, { Component } from 'react'

import Router from '../router.js'

import styles from './app.scss'

export default class App extends Component {
  state = {
    newSession: false
  }

  render() {
    const { newSession } = this.state

    return (
      <div className={styles.app}>
        <Router />
      </div>
    )
  }
}
