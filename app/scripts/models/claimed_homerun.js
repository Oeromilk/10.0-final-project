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
    'baseBallImage': '',
    'claimedBy': {}
  },
  idAttribute: 'objectId'
});

var ClaimedHomerunCollection = Backbone.Collection.extend({
  model: ClaimedHomerun,
  baseUrl: 'https://grabow.herokuapp.com/classes/ClaimedHomerun/',
  url: function(){
    return this.baseUrl + '?where={"claimedBy": ' + ' {"__type": "Pointer", "className": "_User", "objectId": "' + this.userId + '"}}';
  }
});

module.exports = {
  ClaimedHomerun: ClaimedHomerun,
  ClaimedHomerunCollection: ClaimedHomerunCollection
};
