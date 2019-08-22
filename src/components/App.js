import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

import LoadingBar from 'react-redux-loading'
import Dashboard from './Dashboard'


class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }

  render () {
    return (
        <Fragment>
          <LoadingBar />
          <Dashboard />
        </Fragment>
    )
  }
}

export default connect()(App)
