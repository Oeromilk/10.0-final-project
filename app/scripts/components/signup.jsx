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
    setupHeaders();

    var router = this.props.router;

    var file = this.state.fileModel;
    file.set('name', this.state.avatar.name);
    file.set('data', this.state.avatar);

    file.save().done(function(){
      user.set('userAvatar', file.get('url'));
      user.signUp(router);
    });
  },
  handleUserAvatar: function(image){
    this.setState({'avatar': image});
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
