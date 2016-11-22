var React = require('react');

//React Components
var Template = require('./templates/template.jsx').Template;
//Backbone Models and Utility
var ClaimedHomerun = require('../models/claimed_homerun.js').ClaimedHomerun;
var ClaimedHomerunCollection = require('../models/claimed_homerun.js').ClaimedHomerunCollection;
var setupHeaders = require('../parse_utility.js').setupHeaders;
var FileModel = require('../models/file_upload.js').File;

var ClaimForm = React.createClass({
  getInitialState: function(){
    return this.props.model.toJSON()
  },
  handleInputChange: function(e){
    var target = e.target;
    var newHomerun = {};
    newHomerun[target.name] = target.value;

    this.setState(newHomerun);
  },
  handleForm: function(e){
    e.preventDefault();

    this.props.handleForm(this.state);
  },
  handleTicketStub: function(e){
    var self = this;
    var image = e.target.files[0];
    var file = this.props.fileModel;
    file.set('name', image.name);
    file.set('data', image);
    file.save().done(function(){
      console.log(file);
      self.setState({'ticketStub': file.get('url')})
    });
  },
  handleBaseballImage: function(e){
    var image = e.target.files[0];
    var file = this.props.fileModel;
    file.set('name', image.name);
    file.set('data', image);
    file.save().done(function(){
      console.log(file);
    });
  },
  render: function(){
    return (
      <form onSubmit={this.handleForm} className="col-md-6 col-md-offset-3">
        <h2>Seat Information</h2>
        <div className="form-inline well">
          <label htmlFor="seatSection">Section </label>
          <input onChange={this.handleInputChange} type="text" className="form-control" name="seatSection" id="seatSection" placeholder="Seat Section" value={this.state.seatSection} />
          <label htmlFor="seatRow">Row </label>
          <input onChange={this.handleInputChange} type="text" className="form-control" name="seatRow" id="seatRow" placeholder="Seat Row" value={this.state.seatRow} />
          <label htmlFor="seatNumber">Number </label>
          <input onChange={this.handleInputChange} type="text" className="form-control" name="seatNumber" id="seatNumber" placeholder="Seat Number" value={this.state.seatNumber} />
        </div>
        <div className="form-inline well">
          <label htmlFor="parkSelector">Select Your Park </label>
          <select onChange={this.handleInputChange} id="parkSelector" name="parkName" value={this.state.parkName}>
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
          <input onChange={this.handleInputChange} type="date" name="date" className="form-control" value={this.state.date} />
        </div>
        <h2>Batter Information</h2>
        <div className="form-inline well">
          <label htmlFor="firstName">First Name </label>
          <input onChange={this.handleInputChange} type="text" className="form-control" name="batterFirstName" id="firstName" placeholder="First Name" value={this.state.batterFirstName} />
          <label htmlFor="lastName">Last Name </label>
          <input onChange={this.handleInputChange} type="text" className="form-control" name="batterLastName" id="lastName" placeholder="Last Name" value={this.state.batterLastname} />
        </div>
        <h2>Image Upload</h2>
          <div className="form-group well">
            <label htmlFor="ticketStub">Ticket Stub Image</label>
            <input onChange={this.handleTicketStub} type="file" id="ticketStub" />
            <p className="help-block">Upload an image of your ticket stub to verify your seat.</p>
          </div>
          <div className="form-group well">
            <label htmlFor="baseBallImage">BaseBall Image (optional)</label>
            <input onChange={this.handleBaseballImage} type="file" id="baseBallImage" />
            <p className="help-block">Upload an image of your baseball you caught.</p>
          </div>
          <button className="btn btn-primary" type="submit">Claim HomeRun!</button>
      </form>
    )
  }
});

var ClaimFormContainer = React.createClass({
  getInitialState: function(){
    return {
      model: new ClaimedHomerun(),
      collection: new ClaimedHomerunCollection(),
      fileModel: new FileModel()
    }
  },
  handleForm: function(formData){
    var collection = this.state.collection;
    var router = this.props.router;
    var sessionToken = JSON.parse(localStorage.getItem('shelfSession'));
    var sessionId = JSON.parse(localStorage.getItem('shelfObjectId'));
    console.log('sessionId', sessionId);
    setupHeaders(sessionToken)

    collection.create(new ClaimedHomerun(formData));

    router.navigate('user-listing/', {trigger: true});
  },
  render: function(){
    console.log(this.props.nameId);
    return (
      <Template>
        <ClaimForm fileModel={this.state.fileModel} model={this.state.model} handleForm={this.handleForm}/>
      </Template>
    )
  }
});

module.exports = {
  ClaimFormContainer: ClaimFormContainer
};
