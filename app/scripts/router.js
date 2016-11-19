var Backbone = require('backbone');
var React = require('react');
var ReactDom = require('react-dom');

var LandingContainer = require('./components/landing.jsx').LandingContainer;
var LogInContainer = require('./components/login.jsx').LogInContainer;
var SignUpContainer = require('./components/signup.jsx').SignUpContainer;
var DatePickerContainer = require('./components/date_picker.jsx').DatePickerContainer;
var GameDayDetailContainer = require('./components/game_day_detail.jsx').GameDayDetailContainer;
var ClaimFormContainer = require('./components/claim_form.jsx').ClaimFormContainer;
var UserListingContainer = require('./components/user_listing.jsx').UserListingContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'login/': 'login',
    'signup/': 'signup',
    'date-picker/': 'datePicker',
    'date-picker/:id/': 'gameDayDetail',
    'claim-form/': 'claimForm',
    'user-listing/': 'userListing'
  },
  index: function(){
    ReactDom.render(
      React.createElement(LandingContainer),
      document.getElementById('app')
    );
  },
  login: function(){
    ReactDom.render(
      React.createElement(LogInContainer, {router: this}),
      document.getElementById('app')
    );
  },
  signup: function(){
    ReactDom.render(
      React.createElement(SignUpContainer, {router: this}),
      document.getElementById('app')
    );
  },
  datePicker: function(){
    ReactDom.render(
      React.createElement(DatePickerContainer, {router: this}),
      document.getElementById('app')
    );
  },
  gameDayDetail: function(){
    ReactDom.render(
      React.createElement(GameDayDetailContainer),
      document.getElementById('app')
    );
  },
  claimForm: function(){
    ReactDom.render(
      React.createElement(ClaimFormContainer, {router: this}),
      document.getElementById('app')
    );
  },
  userListing: function(){
    ReactDom.render(
      React.createElement(UserListingContainer),
      document.getElementById('app')
    )
  }
});

var router = new AppRouter();

module.exports = router;
