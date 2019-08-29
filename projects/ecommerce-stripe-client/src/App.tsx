import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { PrivateRoute, ScrollToTop } from './components'
import { HomePage } from './pages/HomePage/HomePage'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { NoMatchPage } from './pages/NoMatch/NoMatch'

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route path="/login" exact component={LoginPage} />å
          <PrivateRoute path="/" exact component={HomePage} />
          <PrivateRoute component={NoMatchPage} />
        </Switch>
      </ScrollToTop>
    </Router>
  )
}

export default App
