import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class QuestionList extends Component {

  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }

  render () {
    return (
      <Container className="bg-primary container">
        <Row className="justify-content-md-center">
          <ul>
            {this.props.questionIds.map((id) => (
              <li key={id}>
                {id}
              </li>
            ))}
          </ul>
        </Row>
      </Container>
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