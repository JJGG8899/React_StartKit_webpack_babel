import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import AppLayout from './layouts/AppLayout'
import Users from './components/Users'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={AppLayout}>
      <IndexRoute component={Users} />
    </Route>
  </Router>
), document.getElementById('root'))
