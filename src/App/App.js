import React, { Component } from 'react'

import Router from '../router.js'
import styles from './app.scss'

const App = () => (
  <div className={styles.app}>
    <Router />
  </div>
)

export default App
