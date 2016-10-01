import React from 'react'
import User from './User'

let Users = React.createClass({
  getInitialState: function() {
    return {
      users: [
          {name:'Neo'},
          {name:'Ketty'},
          {name:'Lucky'}
      ]
    }
  },
  render: function() {
    return (
      <div>
        <h3> Users </h3>
        {this.state.users.map(user => {
          return <User name={user.name} key={user.name} />
        })}
      </div>
    )
  }
})

export default Users
