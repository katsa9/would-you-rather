import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import QuestionList from './QuestionList'
import TopNav from './Nav'
import Poll from './Poll'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import Login from './Login'

class Dashboard extends Component {

  render () {
    const { authedUser } = this.props
    return (
       <Router>
       <TopNav />
       {authedUser 
       ? 
      <div className="center">
            <Route path='/' exact component={QuestionList} />
            <Route path='/questions/:id' component={Poll} /> 
            <Route path='/add' component={NewQuestion} />
            <Route path='/leaderboard' component={Leaderboard} />
      </div>
      : <Login /> }
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(Dashboard)