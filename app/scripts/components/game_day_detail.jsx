var React = require('react');
var $ = require('jquery');

var Template = require('./templates/template.jsx').Template;
var GameDayCollection = require('../models/game_day.js').GameDayCollection;

var HomeRunListing = React.createClass({
  getInitialState: function(){
    return {
      collection: this.props.collection
    }
  },
  render: function(){
    var gameDayModels = this.state.collection.models;
    var homeRunList = gameDayModels.map(function(data){
      console.log('length', data.get('home_runs'));
      return data.get('home_runs')
    });
    console.log(homeRunList);
    return (
      <h1>test</h1>
    )
  }
})

var GameDayDetailContainer = React.createClass({
  getInitialState: function(){
    return {
      collection: new GameDayCollection()
    }
  },
  componentWillMount: function(){
    var self = this;
    var collection = this.state.collection;
    var dateUrl = JSON.parse(localStorage.getItem('dateUrl'));
    $.get(dateUrl).then(function(response){
      var data = response.data.games.game;
      self.setState({collection: collection.add(data)});
    });
  },
  render: function(){
    return (
      <Template>
        <HomeRunListing collection={this.state.collection} />
      </Template>
    )
  }
});

module.exports = {
  GameDayDetailContainer: GameDayDetailContainer
}
