import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import NewSession from './components/NewSession/NewSession'

const Router = () => (
  <BrowserRouter>
    <div>
      <Route component={Nav} />
      <Route exact path="/" component={Home} />
      <Route path="/new-session" component={NewSession} />
    </div>
  </BrowserRouter>
)

export default Router
