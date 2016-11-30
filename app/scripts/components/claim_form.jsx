var React = require('react');

//React Components
var Template = require('./templates/template.jsx').Template;
//Backbone Models and Utility
var ClaimedHomerun = require('../models/claimed_homerun.js').ClaimedHomerun;
var ClaimedHomerunCollection = require('../models/claimed_homerun.js').ClaimedHomerunCollection;
var setupHeaders = require('../parse_utility.js').setupHeaders;
var FileModel = require('../models/file_upload.js').File;
var User = require('../models/user.js').User;

var ClaimForm = React.createClass({
  getInitialState: function(){
    return {
      newHomerun: this.props.model,
      buttonText: this.props.buttonText
    }
  },
  handleInputChange: function(e){
    var target = e.target;
    var newHomerun = this.state.newHomerun;

    newHomerun.set(target.name, target.value);
  },
  handleForm: function(e){
    e.preventDefault();

    this.props.handleForm(this.state.newHomerun);
  },
  handleTicketStub: function(e){
    var self = this;
    var image = e.target.files[0];
    var file = this.props.fileModel;
    var newHomerun = this.state.newHomerun;
    this.setState({buttonText: 'Loading..'});
    file.set('name', image.name);
    file.set('data', image);
    file.save().done(function(){
      console.log(file);
      self.setState({buttonText: 'Claim HomeRun!'});

      newHomerun.set('ticketStub', file.get('url'));
      // var newHomerun = self.state.newHomerun;
      // newHomerun = {
      //   'ticketStub': file.get('url')
      // }
      // self.setState({newHomerun: newHomerun})
    });
  },
  handleBaseballImage: function(e){
    var self = this;
    var image = e.target.files[0];
    var file = this.props.fileModel;
    var newHomerun = this.state.newHomerun;
    this.setState({buttonText: 'Loading..'});
    file.set('name', image.name);
    file.set('data', image);
    file.save().done(function(){
      console.log(file);
      self.setState({buttonText: 'Claim HomeRun!'});

      newHomerun.set('baseBallImage', file.get('url'));
      // var newHomerun = self.state.newHomerun;
      // newHomerun = {
      //   'baseballImage': file.get('url')
      // }
      // self.setState({newHomerun: newHomerun})
    });
  },
  render: function(){
    console.log(this.state.newHomerun);
    return (
      <form onSubmit={this.handleForm} className="col-md-6 col-md-offset-3">
        <h2 id="labelStyle">Seat Information</h2>
        <div className="form-inline claimFormStyle">
          <label htmlFor="seatSection">Section </label>
          <input onChange={this.handleInputChange} type="text" className="form-control" name="seatSection" id="seatSection" placeholder="Seat Section" value={this.state.seatSection} />
          <label htmlFor="seatRow">Row </label>
          <input onChange={this.handleInputChange} type="text" className="form-control" name="seatRow" id="seatRow" placeholder="Seat Row" value={this.state.seatRow} />
          <label htmlFor="seatNumber">Number </label>
          <input onChange={this.handleInputChange} type="text" className="form-control" name="seatNumber" id="seatNumber" placeholder="Seat Number" value={this.state.seatNumber} />
        </div>
        <div className="form-inline claimFormStyle">
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
        <h2 id="labelStyle">Batter Information</h2>
        <div className="form-inline claimFormStyle">
          <label htmlFor="firstName">First Name </label>
          <input onChange={this.handleInputChange} type="text" className="form-control" name="batterFirstName" id="firstName" placeholder="First Name" value={this.state.batterFirstName} />
          <label htmlFor="lastName">Last Name </label>
          <input onChange={this.handleInputChange} type="text" className="form-control" name="batterLastName" id="lastName" placeholder="Last Name" value={this.state.batterLastname} />
        </div>
        <h2 id="labelStyle">Image Upload</h2>
          <div className="form-group claimFormStyle">
            <label htmlFor="ticketStub">Ticket Stub Image</label>
            <input onChange={this.handleTicketStub} type="file" id="ticketStub" />
            <p className="help-block claimFormHelper">Upload an image of your ticket stub to verify your seat.</p>
          </div>
          <div className="form-group claimFormStyle">
            <label htmlFor="baseBallImage">BaseBall Image (optional)</label>
            <input onChange={this.handleBaseballImage} type="file" id="baseBallImage" />
            <p className="help-block claimFormHelper">Upload an image of your baseball you caught.</p>
          </div>
          <button className="btn btn-default" type="submit">{this.state.buttonText}</button>
      </form>
    )
  }
});

var ClaimFormContainer = React.createClass({
  getInitialState: function(){
    return {
      model: new ClaimedHomerun(),
      collection: new ClaimedHomerunCollection(),
      fileModel: new FileModel(),
      buttonText: 'Claim HomeRun!'
    }
  },
  handleForm: function(newHomerun){
    var collection = this.state.collection;
    var router = this.props.router;
    var sessionToken = JSON.parse(localStorage.getItem('shelfSession'));
    var sessionId = JSON.parse(localStorage.getItem('shelfObjectId'));
    setupHeaders(sessionToken)
    console.log(sessionId);
    var formData = newHomerun.toJSON();
    //newHomerun.set('claimedBy', {"__type": "Pointer", "className": "_User", "objectId": sessionId});
    formData.claimedBy = {"__type": "Pointer", "className": "_User", "objectId": sessionId};

    var user = new User(JSON.parse(localStorage.getItem('userInfo')));
    user.unset('createdAt');
    user.unset('updatedAt');
    user.unset('sessionToken');
    user.unset('ACL');

    collection.create(formData);
    user.set("numberOfCatches", {"__op":"Increment","amount":1});
    user.save().then(function(){
      router.navigate('user-listing/', {trigger: true});
    });

  },
  render: function(){
    return (
      <Template>
        <ClaimForm buttonText={this.state.buttonText} fileModel={this.state.fileModel} model={this.state.model} handleForm={this.handleForm}/>
      </Template>
    )
  }
});

module.exports = {
  ClaimFormContainer: ClaimFormContainer,
  ClaimForm: ClaimForm
};
