import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import QuestionList from './QuestionList'
import Login from './Login'
import TopNav from './Nav'

class App extends Component {
  //authed user is being overridden on resfresh- use local storage
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }

  render () {
    return (
      <Fragment>
        <LoadingBar />
        <div>
          {this.props.authedUser
            ? <div className="center">
              <TopNav />
              <div className="col-md-5 btn-group text-center" role="group">
                <button type="button" className="btn btn-secondary">Unanswered Questions</button>
                <button type="button" className="btn btn-secondary">Answered Questions</button>
              </div>
              <QuestionList />
            </div>
            : <Login />}
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)
