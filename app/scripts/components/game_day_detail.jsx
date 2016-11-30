var React = require('react');
var $ = require('jquery');
var _ = require('underscore');

var Template = require('./templates/template.jsx').Template;
var GameDayCollection = require('../models/game_day.js').GameDayCollection;

var HomeRunListing = React.createClass({
  getInitialState: function(){
    return {
      collection: this.props.collection
    }
  },
  render: function(){
    var gameDayModels = this.state.collection;
    var selectedCity = this.props.gameId;

    // Convert all games for a day to just the hits for the selected game
    var selectedGames = gameDayModels.where({'home_team_city': selectedCity});

    // Convert the selected game(s) to the home runs for those games (plural accounts for double headers)
    var homeRuns = _.flatten(selectedGames.map(function(model){
      return model.get('home_runs') || false;
    }));

    // Remove the array items that don't actually have home runs
    homeRuns = _.compact(homeRuns);

    // Convert home runs to hits by each player... ???
    var homeRunView = _.chain(homeRuns).pluck('player').flatten().map(function(player){
      return <a key={player.id} href={"#claim-form/" + player.id + "/" } className="list-group-item text-center">
        Batter:{player.first}  {player.last}  inning:{player.inning}</a>
    }).value();

    return (
      <div>
        <div className="list-group col-md-6 col-md-offset-3">
          {homeRuns.length > 0 ? homeRunView :  <h3 className="text-center">No Home Runs for this game</h3>}
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
    $.getJSON(dateUrl).then(function(response){
      //console.log(response);
      var data = response.data.games.game;
      self.setState({collection: collection.add(data)});
    });
  },
  render: function(){
    return (
      <Template>
        <h1 id="labelStyle" className="col-md-6 col-md-offset-3 text-center batterPadding">Home Runs by Batter</h1>
        <HomeRunListing collection={this.state.collection} gameId={this.props.gameId}/>
      </Template>
    )
  }
});

module.exports = {
  GameDayDetailContainer: GameDayDetailContainer
}
