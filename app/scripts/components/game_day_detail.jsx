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
    //var theModel = this.state.collection.get('c1');
    //console.log('the model', theModel.get('home_runs'));
    var gameDayModels = this.state.collection.models;
    var homeRunList = gameDayModels.map(function(model){
      return model.get('home_runs')
    });
    var homeRunArrays = homeRunList.map(function(homeRun){
      if (typeof homeRun != 'undefined' && homeRun.player.toString() != '[object Object]'){
        return homeRun
      }
    });
    var homeRunArrView = homeRunArrays.map(function(homeRun){
      if(typeof homeRun != 'undefined'){
        var test = homeRun.player.map(function(data){
          return <h3>{data.first}  {data.last}  {data.inning}</h3>
        })
      }
      return test
    });
    var homeRunView = homeRunList.map(function(homeRun){
      if(typeof homeRun === 'undefined'){
        return <h3>No Home Runs for this game</h3>
      } else if(homeRun.player.toString() === '[object Object]' && !Array.isArray(homeRun.player)) {
        return <h3>{homeRun.player.first} {homeRun.player.last} {homeRun.player.inning}</h3>
      }
    });
    return (
      <div>
        <h1>test</h1>
        <div>
          {homeRunView}
          {homeRunArrView}
        </div>
      </div>
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
