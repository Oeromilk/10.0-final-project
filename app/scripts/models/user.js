var Backbone = require('backbone');

var User = Backbone.Model.extend({
  defaults: {
    'firstName': '',
    'lastName': '',
    'username': '',
    'email': '',
    'password': '',
    'userAvatar': ''
  },
  idAttribute: 'objectId',
  urlRoot: 'https://grabow.herokuapp.com/users',
  signUp: function(router){
    this.save();
    router.navigate('login/', {trigger: true})
  }
});

module.exports = {
  User: User
};
