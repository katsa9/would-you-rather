import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import QuestionList from './QuestionList'

class App extends Component {

  componentDidMount () {
    //load users
  }

  render () {
    return (
      <div className="container">
        <QuestionList />
      </div>
    );
  }
}

export default connect()(App)
