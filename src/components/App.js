import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { handleInitialData } from '../actions/shared'

import LoadingBar from 'react-redux-loading'
import QuestionList from './QuestionList'
import TopNav from './Nav'

//set authed user when the login button is clicked

class App extends Component {

  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }

  render () {
    return (
      <Fragment>
        <LoadingBar />
        <div>
          <TopNav />
          <div className="center">
            <div className="col-md-5 btn-group text-center" role="group">
              <button type="button" className="btn btn-secondary">Unanswered Questions</button>
              <button type="button" className="btn btn-secondary">Answered Questions</button>
            </div>
            </div>
            <QuestionList />
          </div>
      </Fragment>
    );
  }
}

export default connect()(App)
