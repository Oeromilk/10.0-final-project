var React = require('react');

//React Components
var SignUpForm = require('./templates/forms.jsx').SignUpForm;
var Template = require('./templates/template.jsx').Template;
//Backbone Models and Utility
var User = require('../models/user.js').User;
var setupHeaders = require('../parse_utility.js').setupHeaders;
var FileModel = require('../models/file_upload.js').File;

var SignUpContainer = React.createClass({
  getInitialState: function(){
    return {
      user: new User(),
      fileModel: new FileModel()
    }
  },
  handleSignUp: function(user){
    var router = this.props.router;
    setupHeaders();
    user.signUp(router);
  },
  handleUserAvatar: function(image){
    console.log(image);
  },
  render: function(){
    return (
      <Template>
        <SignUpForm handleSignUp={this.handleSignUp} fileModel={this.state.fileModel} handleUserAvatar={this.handleUserAvatar} user={this.state.user}/>
      </Template>
    )
  }
});

module.exports = {
  SignUpContainer: SignUpContainer
};
