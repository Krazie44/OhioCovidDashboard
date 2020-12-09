import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './Dashboard'


class Main extends Component {
  render() {
    return (
      <div className="main-panel">
        <Header />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Redirect from='*' to='/dashboard' />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default Main