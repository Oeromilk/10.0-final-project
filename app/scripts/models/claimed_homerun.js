var Backbone = require('backbone');

var ClaimedHomerun = Backbone.Model.extend({
  defaults: {
    'seatSection': '',
    'seatRow': '',
    'seatNumber': '',
    'parkName': '',
    'date': '',
    'batterFirstName': '',
    'batterLastName': '',
    'ticketStub': '',
    'baseBallImage': ''
  },
  urlRoot: 'https://grabow.herokuapp.com/classes/ClaimedHomerun'
});

var ClaimedHomerunCollection = Backbone.Collection.extend({
  model: ClaimedHomerun,
  url: 'https://grabow.herokuapp.com/classes/ClaimedHomerun'
});

module.exports = {
  ClaimedHomerun: ClaimedHomerun,
  ClaimedHomerunCollection: ClaimedHomerunCollection
};
