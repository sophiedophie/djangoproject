import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom'
import './style.scss';
import Footer from 'components/Footer';

// can return array component
const App = props => [
  //Nav,
  props.isLoggedIn ? <PrivateRoutes key={2} /> : <PublicRoutes key={2} />,
  <Footer key={3} />
]

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
}

const PrivateRoutes = props => (
  <Switch>
    <Route exact path='/' render={() => "hello!"} />
    <Route exact path='/explorer' render={() => "explore!"} />
  </Switch>
)

const PublicRoutes = props => (
  <Switch>
    <Route exact path='/' render={() => "login!"} />
    <Route exact path='/forgot' render={() => "password!"} />
  </Switch>
)

export default App;
