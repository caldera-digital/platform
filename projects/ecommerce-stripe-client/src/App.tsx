import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { PrivateRoute, ScrollToTop } from './components'
import { CartPage } from './pages/CartPage/CartPage'
import { HomePage } from './pages/HomePage/HomePage'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { NoMatchPage } from './pages/NoMatch/NoMatch'
import { ThankYouPage } from './pages/ThankYou/ThankYou'

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route path="/login" exact component={LoginPage} />
          <Route path="/cart" exact component={CartPage} />
          <Route path="/thank-you" exact component={ThankYouPage} />
          <PrivateRoute path="/" exact component={HomePage} />
          <PrivateRoute component={NoMatchPage} />
        </Switch>
      </ScrollToTop>
    </Router>
  )
}

export default App
