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
var UserListingEditContainter = require('./components/user_listing_edit.jsx').UserListingEditContainter;
var TopUsersContainer = require('./components/top_users.jsx').TopUsersContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'login/': 'login',
    'signup/': 'signup',
    'date-picker/': 'datePicker',
    'date-picker/:id/': 'gameDayDetail',
    'claim-form/:id/': 'claimForm',
    'user-listing/': 'userListing',
    'user-listing/:model/': 'userListingEdit',
    'top-users/': 'topUsers'
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
  datePicker: function(dateId){
    ReactDom.render(
      React.createElement(DatePickerContainer, {router: this, dateId: dateId}),
      document.getElementById('app')
    );
  },
  gameDayDetail: function(gameId){
    ReactDom.render(
      React.createElement(GameDayDetailContainer, {gameId: gameId}),
      document.getElementById('app')
    );
  },
  claimForm: function(nameId){
    ReactDom.render(
      React.createElement(ClaimFormContainer, {router: this, nameId: nameId}),
      document.getElementById('app')
    );
  },
  userListing: function(){
    ReactDom.render(
      React.createElement(UserListingContainer, {router: this}),
      document.getElementById('app')
    )
  },
  userListingEdit: function(model){
    ReactDom.render(
      React.createElement(UserListingEditContainter, {router: this, model: model}),
      document.getElementById('app')
    )
  },
  topUsers: function(){
    ReactDom.render(
      React.createElement(TopUsersContainer),
      document.getElementById('app')
    )
  }
});

var router = new AppRouter();

module.exports = router;
