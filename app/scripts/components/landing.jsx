var React = require('react');

var Template = require('./templates/template.jsx').Template;

var JumboTron = React.createClass({
  render: function(){
    return (
      <div className="jumbotron">
        <h1 className="text-center">Hello, world!</h1>
      </div>
    )
  }
});

var LandingContainer = React.createClass({
  render: function(){
    return (
      <Template>
        <JumboTron />
      </Template>
    )
  }
});

module.exports = {
  LandingContainer: LandingContainer
};
