import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'
import Question from './Question'

class QuestionPage extends Component {
  render() {
    const { id, hasBeenAnswered } = this.props
    return (
      <div className="container">
        {hasBeenAnswered
        ?  (<Poll id={id}/>)
        : (<Question
          id={id}
          submitState={true} />)
        }  
      </div>
    )
  }
}
function mapStateToProps({authedUser, questions}, props) {
  const { id } = props.match.params  //from react router
  const question = questions[id]
  const hasBeenAnswered = question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)
  return {
    id,
    hasBeenAnswered
  }
}
export default connect(mapStateToProps)(QuestionPage)