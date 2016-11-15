var React = require('react');

var SignUpForm = require('./templates/forms.jsx').SignUpForm;
var Template = require('./templates/template.jsx').Template;
var User = require('../models/user.js').User;
var setupHeaders = require('../parse_utility.js').setupHeaders;

var SignUpContainer = React.createClass({
  getInitialState: function(){
    return {
      user: new User()
    }
  },
  handleSignUp: function(user){
    var router = this.props.router;
    setupHeaders();
    user.signUp(router);
  },
  render: function(){
    return (
      <Template>
        <SignUpForm handleSignUp={this.handleSignUp} user={this.state.user}/>
      </Template>
    )
  }
});

module.exports = {
  SignUpContainer: SignUpContainer
};
