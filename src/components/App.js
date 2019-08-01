import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { handleReceiveUsers } from '../actions/users'

import LoadingBar from 'react-redux-loading'
import QuestionList from './QuestionList'
import TopNav from './Nav'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

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
        <Row className="justify-content-md-center">
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">Unanswered Questions</Button>
            <Button variant="secondary">Answered Questions</Button>
          </ButtonGroup>
        </Row>
        <QuestionList />
      </div>
      </Fragment>
    );
  }
}

export default connect()(App)
