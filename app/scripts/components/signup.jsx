var React = require('react');

var SignUpForm = require('./templates/forms.jsx').SignUpForm;
var Template = require('./templates/template.jsx').Template;

var SignUpContainer = React.createClass({
  render: function(){
    return (
      <Template>
        <SignUpForm />
      </Template>
    )
  }
});

module.exports = {
  SignUpContainer: SignUpContainer
};
