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
          return <a key={data.id} href="#claim-form/" className="list-group-item text-center">Batter:{data.first}  {data.last}  inning:{data.inning}</a>
        })
      }
      return test
    });
    var homeRunView = homeRunList.map(function(homeRun){
      // console.log(homeRun);
      if(typeof homeRun === 'undefined'){
        return <h3 className="text-center">No Home Runs for this game</h3>
      } else if(homeRun.player.toString() === '[object Object]' && !Array.isArray(homeRun.player)) {
        return <a key={homeRun.player.id} href="#claim-form/" className="list-group-item text-center">Batter:{homeRun.player.first} {homeRun.player.last} inning:{homeRun.player.inning}</a>
      }
    });
    return (
      <div>
        <h1 className="col-md-6 col-md-offset-3 text-center">Home Runs by Batter</h1>
        <div className="list-group col-md-6 col-md-offset-3">
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
      console.log(response);
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
