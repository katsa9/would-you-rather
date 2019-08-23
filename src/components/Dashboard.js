import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import QuestionList from './QuestionList'
import TopNav from './Nav'
import QuestionPage from './QuestionPage'
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
      (<div className="center py-4 my-2">
            <Route path='/' exact component={QuestionList} />
            <Route path='/questions/:id' component={QuestionPage} /> 
            <Route path='/add' component={NewQuestion} />
            <Route path='/leaderboard' component={Leaderboard} />
      </div>)
      : (
        <div className="center py-5">
          <Login /> 
        </div>  )}
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