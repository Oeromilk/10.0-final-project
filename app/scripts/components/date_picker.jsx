var React = require('react');
var $ = require('jquery');

var Template = require('./templates/template.jsx').Template;
var setUrl = require('../parse_utility').setUrl;
var GameDayCollection = require('../models/game_day.js').GameDayCollection;

var GameListing = React.createClass({
  getInitialState: function(){
    return {
      collection: this.props.collection
    }
  },
  render: function(){
    var gameDayModels = this.state.collection.models;

    var gameDayListing = gameDayModels.map(function(gameDay){
      console.log(gameDay);
      return (
        <button key={gameDay.cid} type="button" className="list-group-item">
          <h4>
            <div className="text-left">{gameDay.get('home_team_city')} {gameDay.get('home_team_name')}</div>
            <div className="text-center">vs</div>
            <div className="text-right">{gameDay.get('away_team_city')} {gameDay.get('away_team_name')}</div>
          </h4>
          <h3 className="text-center">{gameDay.get('venue')}</h3>
        </button>
      )
    });
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <h3 className="text-center">Game Day List</h3>
          <div className="list-group">
            {gameDayListing}
          </div>
        </div>
      </div>
    )
  }
});

var DatePickerInput = React.createClass({
  getInitialState: function(){
    return {
      date: this.props.date
    }
  },
  handleDate: function(e){
    this.setState({date: e.target.value});

  },
  handleDateChange: function(e){
    e.preventDefault();

    var date = this.state.date;
    var splitDate = date.split('-');

    this.props.handleDateChange(splitDate);
  },
  render: function(){
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="input-group">
            <input onChange={this.handleDate} type="date" className="form-control" placeholder="Search for..." value={this.state.date}/>
            <span className="input-group-btn">
              <button onClick={this.handleDateChange} className="btn btn-default" type="button">Go!</button>
            </span>
          </div>
        </div>
      </div>
    )
  }
})

var DatePickerContainer = React.createClass({
  getInitialState: function(){
    return {
      date: '',
      collection: new GameDayCollection()
    }
  },
  handleDateChange: function(splitDate){
    var self = this;
    var collection = this.state.collection;
    var dateUrl = setUrl(splitDate[0], splitDate[1], splitDate[2]);


    $.get(dateUrl).then(function(response){
      var data = response.data.games.game;
      self.setState({collection: collection.add(data)});
    });
  },
  render: function(){
    return (
      <Template>
        <div className="row">
          <h1 className="col-md-8 col-md-offset-2 text-center">Select a date to see the home runs</h1>
        </div>
        <DatePickerInput handleDateChange={this.handleDateChange} date={this.state.date} />
        <GameListing collection={this.state.collection}/>
      </Template>
    )
  }
});

module.exports = {
  DatePickerContainer: DatePickerContainer
};
