var React = require('react');

var LogInForm = require('./templates/forms.jsx').LogInForm;
var Template = require('./templates/template.jsx').Template;

var LogInContainer = React.createClass({
  render: function(){
    return (
      <Template>
        <LogInForm />
      </Template>
    )
  }
});

module.exports = {
  LogInContainer: LogInContainer
};
