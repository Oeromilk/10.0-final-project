var Backbone = require('backbone');

var GameDay = Backbone.Model.extend({

});

var GameDayCollection = Backbone.Collection.extend({
  model: GameDay
});

module.exports = {
  GameDay: GameDay,
  GameDayCollection: GameDayCollection
};
