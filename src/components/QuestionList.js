import React, { Component } from 'react';
import { connect } from 'react-redux'

class QuestionList extends Component {

  componentDidMount () {
  //load questions only after auth
  }

  render() {
    return (
      <div>
        <h3 className='center'>Question List</h3>
        <ul className='question-list'>
          {this.props.questionids.map((id) => (
            <li key={id}>
              id
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default connect()(QuestionList)