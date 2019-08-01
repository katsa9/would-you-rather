import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import QuestionList from './QuestionList'
import { setAuthedUser } from '../actions/authedUser'
import { handleReceiveUsers } from '../actions/users'
import TopNav from './Nav'

//set authed user when the login button is clicked

class App extends Component {

  componentDidMount () {
    this.props.dispatch(handleReceiveUsers())
  }

  render () {
    return (
       <Fragment>
       <LoadingBar />
      <div>
        <TopNav />
        <QuestionList />
      </div>
      </Fragment>
    );
  }
}

export default connect()(App)
