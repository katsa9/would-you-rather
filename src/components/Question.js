import React, { Component } from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

class Question extends Component {
  render () {
    const { question } = this.props
    return (
      <Container>
        <Row>
          <Col sm={4} md={4}>
          <Image src="./images/hermione.jpg/171x180" rounded />
          </Col>
          <Col sm={8} md={8}>
          <Row>
            <b>Would you rather..</b>
            <div>
                {question.optionOne.text}
            </div>
            <b>OR</b>
            <div>
                {question.optionTwo.text}
            </div>
          </Row>
          <Row>
            <Button>
              View Poll  
            </Button>
          </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps({questions}, {id}) { //second arg is props from parent
  const question = questions[id]
  return {
    question: question 
    ? question
    : null
  }
}
export default connect(mapStateToProps)(Question)