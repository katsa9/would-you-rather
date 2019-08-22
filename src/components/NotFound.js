import React from 'react'
import error from '../images/error.svg';

export default function NotFound () {
  return (
    <div className="panel">
      <h2 className="text-center main-heading my-5">Error 404</h2>
      <p>Oh dear, something went wrong</p>
      <img src={error}
        type="image/svg+xml"
        className="col-md-6 col-sm-5 rounded mx-auto d-block" alt="person deciding"></img>
    </div>
  )
}