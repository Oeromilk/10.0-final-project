var React = require('react');
var $ = require('jquery');

var LogInForm = require('./templates/forms.jsx').LogInForm;
var Template = require('./templates/template.jsx').Template;
var setupHeaders = require('../parse_utility.js').setupHeaders;
var logIn = require('../parse_utility.js').logIn;

var LogInContainer = React.createClass({
  handleSignIn: function(loginInfo){
    var router = this.props.router;
    localStorage.setItem('userInfo', JSON.stringify(loginInfo));
    setupHeaders();
    logIn(loginInfo, router);
  },
  render: function(){
    return (
      <Template>
        <LogInForm handleSignIn={this.handleSignIn} />
      </Template>
    )
  }
});

module.exports = {
  LogInContainer: LogInContainer
};
