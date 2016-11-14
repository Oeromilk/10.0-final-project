var Backbone = require('backbone');
var React = require('react');
var ReactDom = require('react-dom');

var LandingContainer = require('./components/landing.jsx').LandingContainer;
var LogInContainer = require('./components/login.jsx').LogInContainer;
var SignUpContainer= require('./components/signup.jsx').SignUpContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'login/': 'login',
    'signup/': 'signup'
  },
  index: function(){
    ReactDom.render(
      React.createElement(LandingContainer),
      document.getElementById('app')
    );
  },
  login: function(){
    ReactDom.render(
      React.createElement(LogInContainer),
      document.getElementById('app')
    );
  },
  signup: function(){
    ReactDom.render(
      React.createElement(SignUpContainer),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports = router;
