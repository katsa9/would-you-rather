import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Question from './Question'
import { handleSaveNewQuestion, handleAnswerQuestion } from '../actions/questions';

class QuestionList extends Component {

  // componentDidMount() {
  //   // this.props.dispatch(handleSaveNewQuestion("this is option 1", "this is option 2"))
  //   this.props.dispatch(handleAnswerQuestion({authedUser: "sarahedo", id:"6ni6ok3ym7mf1p33lnez", answer: 'optionTwo'}))
  // }

  render () {
    return (
       <div className="green-container">
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