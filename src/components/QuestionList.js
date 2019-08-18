import React, { Component } from 'react'
// import { connect } from 'react-redux'
import Question from './Question'

class QuestionList extends Component {

  render () {
    return (
      <div className="green-container">
        <ul>
          {this.props.questions.map((id) => (
            <li key={id}>
              <Question 
              id={id}
              submitState={false} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default QuestionList