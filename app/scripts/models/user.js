var Backbone = require('backbone');

var User = Backbone.Model.extend({
  defaults: {
    'firstName': '',
    'lastName': '',
    'email': '',
    'password': ''
  },
  urlRoot: 'https://grabow.herokuapp.com/users',
  signUp: function(){
    this.save();
  }
});

module.exports = {
  User: User
};
