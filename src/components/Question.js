import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/questions'
import { Link, Redirect, withRouter } from 'react-router-dom'

class Question extends Component {

  state = {
    optionOne: false,
    optionTwo: false,
    buttonClicked: false
  }

  goToPoll = (e) => {
    e.preventDefault()
    const { id } = this.props
    this.setState(() => ({
      buttonClicked: true
    }));
    this.props.history.push(`/questions/${id}`)
  }

  submitAnswer = (e) => {
    const { id } = this.props
    const { dispatch } = this.props
    const answer = this.state.optionOne ? 'optionOne' : 'optionTwo'
    dispatch(handleAnswerQuestion({
      id,
      answer
    }))
    this.setState(() => ({
      buttonClicked: true
    }));
  }

  toggleSelection = (e) => {
    if (e.target.id === 'option1') {
      this.setState((currentState) => ({
        optionOne: !currentState.optionOne,
        optionTwo: !currentState.optionOne === currentState.optionTwo ? !currentState.optionTwo : currentState.optionTwo
      }));
    } else if (e.target.id === 'option2') {
      this.setState((currentState) => ({
        optionOne: !currentState.optionTwo === currentState.optionOne ? !currentState.optionOne : currentState.optionOne,
        optionTwo: !currentState.optionTwo
      }));
    }
  }

  //adapt to check for submitState
  render () {
    const { question, author, avatar, submitState } = this.props
    const { optionOne, optionTwo, buttonClicked} = this.state
    const optionOneClass = optionOne ? 'my-2 answer-selected' : 'my-2 answer'
    const optionTwoClass = optionTwo ? 'my-2 answer-selected' : 'my-2 answer'
    const disabledClass = 'answer-disabled'
    // if(buttonClicked) {
    //   return <Redirect to={`/question/${question.id}`} />
    // }
    return (
      <div className="container">
        <b>{author} asks:</b>
        <hr></hr>
        <div className="container">
          <div className="row">
            <div className="avatar-container col-sm-3 col-md-3">
              <img
              src={`../${avatar}`}
                alt={`Avatar of ${author}`}
                className="avatar"
                width="120"
                height="120"
              />
            </div>
            <div className="col-sm-9 col-md-9">
              <b>Would you rather..</b>
              <div id='option1' className={submitState ? optionOneClass : disabledClass}
                onClick={this.toggleSelection}>
                {question.optionOne.text}
              </div>
              <b className="col-md-12">OR</b>
              <div id='option2' className={submitState ? optionTwoClass : disabledClass}
                onClick={this.toggleSelection}>
                {question.optionTwo.text}
              </div>
            </div>
          </div>
          <div className="text-right">
            {submitState ? (<button
              className="btn btn-primary mt-3"
              onClick={this.submitAnswer}
              disabled={!optionOne && !optionTwo}>
              Submit
          </button>)
              : (<button
                className="btn btn-primary mt-3"
                onClick={this.goToPoll}>
                View Poll
          </button>)}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ questions, users }, { id }) { //second arg is props from parent
  const question = questions[id]
  const avatar = users[question.author].avatarURL
  const author = users[question.author].name
  return {
    question: question
      ? question
      : null,
    avatar: avatar ? avatar : null,
    author: author ? author : null
  }
}
export default withRouter(connect(mapStateToProps)(Question))


{/* <div className="text-right">
            {submitState
            ? (<Link to={`/question/${question.id}`} className="btn btn-primary mt-3"
              onClick={this.submitAnswer}
              disabled={!optionOne && !optionTwo}>
              Submit
              </Link>)
              : (<Link to={`/question/${question.id}`} className="btn btn-primary mt-3"
                onClick={this.goToPoll}>
                View Poll
               </Link>)}
          </div> */}