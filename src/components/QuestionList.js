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
              <Question id={id} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

//change this to only take in list of ids as props
// function mapStateToProps ({ questions }) {
//   return {
//     questionIds: Object.keys(questions)
//       .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
//   }
// }

export default QuestionList