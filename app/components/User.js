import React from 'react'
import { Link } from 'react-router'

let User = function(props) {
  return (
    <div className="user">
      <div>Name: {props.name} </div>
    </div>
  )
}

export default User
