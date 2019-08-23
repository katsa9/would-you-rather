import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveNewQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'
class NewQuestion extends Component {

  state = {
    optionOne: '',
    optionTwo: '',
    toHome: false
  }

  handleChange = (e) => {
    const text = e.target.value
    const item = e.target.placeholder
    if (item === 'Option One') {
      this.setState(() => ({
        optionOne: text
      }))
    } else if (item === 'Option Two') {
      this.setState(() => ({
        optionTwo: text
      }))
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { optionOne, optionTwo } = this.state
    const { dispatch } = this.props
    dispatch(handleSaveNewQuestion(optionOne, optionTwo))
    this.setState(() => ({
      optionOne: '',
      optionTwo: '',
      toHome: true
    }))
  }

  render () {
    const { optionOne, optionTwo, toHome } = this.state
    if (toHome === true) {
      return <Redirect to='/' />
    }
    return (
      <div className="green-container py-3 px-4">
        <div className="container">
          <b>Create New Question</b>
          <hr></hr>
          <div className="container">
              <form className='new-question' onSubmit={this.handleSubmit}>
                <p>Complete the Question:</p>
                <b>Would you rather..</b>
                <input type="text"
                  className="my-2 form-control"
                  placeholder="Option One"
                  value={optionOne}
                  onChange={this.handleChange}
                  aria-label="Option One">
                </input>
                <b className="col-md-12">OR</b>
                <input type="text"
                  className="my-2 form-control"
                  placeholder="Option Two"
                  value={optionTwo}
                  onChange={this.handleChange}
                  aria-label="Option Two">
                </input>
                <div className="text-right">
                  <button className='btn btn-primary'
                    type='submit'
                    disabled={optionOne === '' || optionTwo === ''}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
    )
  }
}
export default connect()(NewQuestion)