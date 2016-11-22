var React = require('react');

var Template = require('./templates/template.jsx').Template;

var TopUsersContainer = React.createClass({
  getInitialState: function(){
    return {
        something: ''
    }
  },
  render: function(){
    return (
      <Template>
        <h1>Top users go here</h1>
      </Template>
    )
  }
});

module.exports = {
  TopUsersContainer: TopUsersContainer
};
