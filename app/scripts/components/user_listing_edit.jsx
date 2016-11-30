var React = require('react');
var $ = require('jquery');

var Template = require('./templates/template.jsx').Template;
var ClaimedHomerun = require('../models/claimed_homerun.js').ClaimedHomerun;
var FileModel = require('../models/file_upload.js').File;

var ClaimForm = React.createClass({
  getInitialState: function(){
    return {
      homerun: this.props.homerun,
      buttonText: this.props.buttonText
    }
  },
  handleInputChange: function(e){
    var target = e.target;
    var newHomerun = this.state.homerun;

    newHomerun[target.name] = target.value;

    this.setState(newHomerun);

    this.props.model.set(newHomerun);
  },
  handleForm: function(e){
    e.preventDefault();

    this.props.handleForm(this.props.model);
  },
  handleTicketStub: function(e){
    var self = this;
    var image = e.target.files[0];
    var file = this.props.fileModel;
    var newHomerun = this.props.model;
    this.setState({buttonText: 'Loading..'});
    file.set('name', image.name);
    file.set('data', image);
    file.save().done(function(){
      console.log(file);
      self.setState({buttonText: 'Update Homerun!'});

      newHomerun.set('ticketStub', file.get('url'));
    });
  },
  handleBaseballImage: function(e){
    var self = this;
    var image = e.target.files[0];
    var file = this.props.fileModel;
    var newHomerun = this.props.model;
    this.setState({buttonText: 'Loading..'});
    file.set('name', image.name);
    file.set('data', image);
    file.save().done(function(){
      console.log(file);
      self.setState({buttonText: 'Update HomeRun!'});

      newHomerun.set('baseBallImage', file.get('url'));
    });
  },
  render: function(){
    return (
      <form onSubmit={this.handleForm} className="col-md-6 col-md-offset-3">
        <h2>Seat Information</h2>
        <div className="form-inline well">
          <label htmlFor="seatSection">Section </label>
          <input onChange={this.handleInputChange} type="text" className="form-control" name="seatSection" id="seatSection" placeholder="Seat Section" value={this.state.homerun.seatSection} />
          <label htmlFor="seatRow">Row </label>
          <input onChange={this.handleInputChange} type="text" className="form-control" name="seatRow" id="seatRow" placeholder="Seat Row" value={this.state.homerun.seatRow} />
          <label htmlFor="seatNumber">Number </label>
          <input onChange={this.handleInputChange} type="text" className="form-control" name="seatNumber" id="seatNumber" placeholder="Seat Number" value={this.state.homerun.seatNumber} />
        </div>
        <div className="form-inline well">
          <label htmlFor="parkSelector">Select Your Park </label>
          <select onChange={this.handleInputChange} id="parkSelector" name="parkName" value={this.state.homerun.parkName}>
            <option>Angel Stadium of Anaheim</option>
            <option>AT&T Park</option>
            <option>Busch Stadium</option>
            <option>Chase Field</option>
            <option>Citi Field</option>
            <option>Citizens Bank Park</option>
            <option>Comerica Park</option>
            <option>Coors Field</option>
            <option>Dodger Stadium</option>
            <option>Fenway Park</option>
            <option>Globe Lif Park In Arlington</option>
            <option>Great American Ball Park</option>
            <option>Guaranteed Rate Field</option>
            <option>Kauffman Stadium</option>
            <option>Marlins Park</option>
            <option>Miller Park</option>
            <option>Minute Maid Park</option>
            <option>Nationals Park</option>
            <option>Oakland Coliseum</option>
            <option>Oriole Park at Camden Yards</option>
            <option>Petco Park</option>
            <option>PNC Park</option>
            <option>Progressive Field</option>
            <option>Rogers Centre</option>
            <option>Sun Trust Park</option>
            <option>Safeco Field</option>
            <option>Target Field</option>
            <option>Tropicana Field</option>
            <option>Wrigley Field</option>
            <option>Yanke Stadium</option>
          </select>
          <label htmlFor="dateSelector">Select Date </label>
          <input onChange={this.handleInputChange} type="date" name="date" className="form-control" value={this.state.homerun.date} />
        </div>
        <h2>Batter Information</h2>
        <div className="form-inline well">
          <label htmlFor="firstName">First Name </label>
          <input onChange={this.handleInputChange} type="text" className="form-control" name="batterFirstName" id="firstName" placeholder="First Name" value={this.state.homerun.batterFirstName} />
          <label htmlFor="lastName">Last Name </label>
          <input onChange={this.handleInputChange} type="text" className="form-control" name="batterLastName" id="lastName" placeholder="Last Name" value={this.state.homerun.batterLastName} />
        </div>
        <h2>Image Upload</h2>
          <div className="form-group well">
            <label htmlFor="ticketStub">Ticket Stub Image</label>
            <input onChange={this.handleTicketStub} type="file" id="ticketStub" />
            <p className="help-block">Upload an image of your ticket stub to verify your seat.</p>
            <img src={this.state.homerun.ticketStub} />
          </div>
          <div className="form-group well">
            <label htmlFor="baseBallImage">BaseBall Image (optional)</label>
            <input onChange={this.handleBaseballImage} type="file" id="baseBallImage" />
            <p className="help-block">Upload an image of your baseball you caught.</p>
            <img src={this.state.homerun.baseBallImage} />
          </div>
          <button onClick={this.handleForm} className="btn btn-default" type="submit">{this.state.buttonText}</button>
      </form>
    )
  }
});

var UserListingEditContainter = React.createClass({
  getInitialState: function(){
    return {
      buttonText: 'Update Homerun',
      homerun: JSON.parse(localStorage.getItem('homeRunModel')),
      model: new ClaimedHomerun(),
      fileModel: new FileModel()
    }
  },
  handleForm: function(updatedModel){
    var objectId = this.state.homerun.objectId;
    var token = JSON.parse(localStorage.getItem('shelfSession'));
    var options = {};
    var router = this.props.router;

    updatedModel.unset('buttonText');
    updatedModel.unset('claimedBy');
    updatedModel.unset('createdAt');
    updatedModel.unset('updatedAt');
    updatedModel.unset('newHomerun');

    options.url = "https://grabow.herokuapp.com/classes/ClaimedHomerun/" + objectId + "/";
    options.data = updatedModel.toJSON();

    options.method = "PUT";
    options.data['objectId'] = objectId;

    options.headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    "X-Parse-Application-Id": "dalaran",
    "X-Parse-REST-API-Key": "stormwind",
    "X-Parse-Session-Token": token
    }

    $.ajax(options).then(function(response) {
     console.log('response', response);
     router.navigate('#user-listing/', {trigger: true});
    })

  },
  render: function(){
    return (
      <Template>
        <ClaimForm fileModel={this.state.fileModel} model={this.state.model} homerun={this.state.homerun} buttonText={this.state.buttonText} handleForm={this.handleForm}/>
      </Template>
    )
  }
});

module.exports = {
  UserListingEditContainter: UserListingEditContainter
}
