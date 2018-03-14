import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styles from './nav.scss'

const Nav = props => {
  return (
    <navigation>
      {
        props.location.pathname === '/' &&
        <div className={styles.nav}>
          <h2>KILOS</h2>
          <Link to="/new-session">
            <button>
              New Session
            </button>
          </Link>
        </div>
      }
      {
        props.location.pathname === '/new-session' &&
        <div className={styles.nav}>
          <h2 onClick={() => props.history.goBack()}>
            New Session
          </h2>
          <Link to="/">
            <button>
              Cancel Session
            </button>
          </Link>
        </div>
      }
    </navigation>
  )
}

export default Nav
