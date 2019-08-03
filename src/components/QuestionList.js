import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Question from './Question'

class QuestionList extends Component {

  render () {
    return (
      
      <div className="container">
          <ul>
            {this.props.questionIds.map((id) => (
              <li key={id}>
              <Question id={id}/>
            </li>
            ))}
          </ul>
          </div>
    )
  }
}

function mapStateToProps ({ questions }) {
  return {
    questionIds: Object.keys(questions)
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(QuestionList)