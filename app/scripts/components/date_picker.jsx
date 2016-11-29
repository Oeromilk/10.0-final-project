var React = require('react');
var $ = require('jquery');
var Modal = require('react-modal');

var Template = require('./templates/template.jsx').Template;
var setUrl = require('../parse_utility').setUrl;
var GameDayCollection = require('../models/game_day.js').GameDayCollection;

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

var GameListing = React.createClass({
  getInitialState: function(){
    return {
      collection: this.props.collection
    }
  },
  render: function(){
    var self = this;
    var gameDayModels = this.state.collection.models;

    var gameDayListing = gameDayModels.map(function(gameDay){
      return (
        <a key={gameDay.cid} href={'#date-picker/' + gameDay.get('home_team_city') + '/'} className="list-group-item hover-style" >
          <h4>
            {gameDay.get('home_team_city')} {gameDay.get('home_team_name')}
            vs
            {gameDay.get('away_team_city')} {gameDay.get('away_team_name')}
          </h4>
          <h3 className="text-center">{gameDay.get('venue')}</h3>
        </a>
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

    // this.props.router.navigate('#dateView/' + date +'/');
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
      collection: new GameDayCollection(),
      modalIsOpen: false
    }
  },
  openModal: function() {
    this.setState({modalIsOpen: true});
  },
  afterOpenModal: function() {
    // references are now sync'd and can be accessed.
    // #2B3A42
    // #3F5765
    // #BDD4DE
    this.refs.subtitle.style.color = '#FF530D';
  },
  closeModal: function() {
    this.setState({modalIsOpen: false});
  },
  handleDateChange: function(splitDate){
    var self = this;
    var collection = this.state.collection;
    var dateUrl = setUrl(splitDate[0], splitDate[1], splitDate[2]);
    localStorage.setItem('dateUrl', JSON.stringify(dateUrl));

    $.get(dateUrl).then(function(response){
      if(!response.data.games.game){
        self.openModal();
      };
      var data = response.data.games.game;
      collection.add(data)
      self.setState({collection: collection});
    });
  },
  componentWillMount: function(){
    var req = new XMLHttpRequest();
    req.open('GET', true);
    req.setRequestHeader("Authorization", "");
  },
  render: function(){
    return (
      <Template>
        <div className="row">
          <h1 className="col-md-8 col-md-offset-2 text-center topUserHeading">Select a date to see the home runs</h1>
        </div>
        <DatePickerInput handleDateChange={this.handleDateChange} date={this.state.date} router={this.props.router}/>
        <GameListing collection={this.state.collection}/>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="No Games For That Date"
          >

            <h2 ref="subtitle">Oops!</h2>
            <div ref="description">No there are no games on record for that date.<br/>Select another date.</div>
            <button className="btn btn-default" onClick={this.closeModal}>close</button>
          </Modal>
      </Template>
    )
  }
});

module.exports = {
  DatePickerContainer: DatePickerContainer
};
