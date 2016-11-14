var $ = require('jquery');
var Backbone = require('backbone');
require('./router');

//Dom Ready
$(function(){
  Backbone.history.start();
});
