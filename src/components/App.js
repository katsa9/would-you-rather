import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

import LoadingBar from 'react-redux-loading'
import Login from './Login'
import Dashboard from './Dashboard'


class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }

  render () {
    // const { authedUser } = this.props
    return (
        <Fragment>
          <LoadingBar />
          <Dashboard />
          {/* {authedUser 
          ? <Dashboard />
          : <Login />} */}
        </Fragment>
    );
  }
}

// function mapStateToProps ({ authedUser }) {
//   return {
//     authedUser
//   }
// }

export default connect()(App)
