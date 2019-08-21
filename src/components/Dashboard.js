import React, { Component, Fragment } from 'react';
// import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import QuestionList from './QuestionList'
import TopNav from './Nav'
import Poll from './Poll'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'

class Dashboard extends Component {

  render () {
    return (
       <Router>
       <TopNav />
      <div className="center">
            <Route path='/' exact component={QuestionList} />
            <Route path='/questions/:id' component={Poll} /> 
            <Route path='/add' component={NewQuestion} />
            <Route path='/leaderboard' component={Leaderboard} />
      </div>
      </Router>
    )
  }
}



export default Dashboard