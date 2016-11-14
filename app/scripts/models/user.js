var Backbone = require('backbone');

var User = Backbone.Model.extend({
  urlRoot: 'https://grabow.herokuapp.com/users',
  signUp: function(){
    this.save().then(function(data){

    });
  }
});

module.exports = {
  User: User
};
