import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


class TopNav extends Component {
  render () {
    return (
      <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href="#home">Would you Rather?</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Add Question</Nav.Link>
          <Nav.Link href="#pricing">Leaderboard</Nav.Link>
        </Nav>
        <Nav>
      <Nav.Link href="#home">Logout</Nav.Link>
      </Nav>
        {/* <Form inline>
          <Button variant="outline-info">Search</Button>
        </Form> */}
      </Navbar>
    )
  }
}

export default TopNav

