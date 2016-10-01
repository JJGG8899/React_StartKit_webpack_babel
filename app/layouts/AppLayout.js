import React from 'react'
import { Link } from 'react-router'

let AppLayout = function(props) {
  return (
    <div>
      <header>
        <h1>Welcome to the React Start Kit </h1>
        <hr />
      </header>
      <main>
        {props.children}
      </main>
    </div>
  )
}

export default AppLayout
