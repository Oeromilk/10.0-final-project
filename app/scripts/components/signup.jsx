var React = require('react');

var SignUpForm = require('./templates/forms.jsx').SignUpForm;
var Template = require('./templates/template.jsx').Template;
var User = require('../models/user.js').User;

var SignUpContainer = React.createClass({
  getInitialState: function(){
    return {
      user: new User()
    }
  },
  render: function(){
    return (
      <Template>
        <SignUpForm user={this.state.user}/>
      </Template>
    )
  }
});

module.exports = {
  SignUpContainer: SignUpContainer
};
