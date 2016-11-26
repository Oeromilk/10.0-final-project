var React = require('react');

var Template = require('./templates/template.jsx').Template;
var ClaimedHomerunCollection = require('../models/claimed_homerun.js').ClaimedHomerunCollection;
var setupHeaders = require('../parse_utility.js').setupHeaders;

var UserHomeRunList = React.createClass({
  render: function(){
    var userList = this.props.userListing.map(function(homerun){
      console.log(homerun);
      return (
        <div key={homerun.objectId} className="col-md-3 well">
          <div>
            <h4>Homerun Batter: </h4>
            {homerun.batterFirstName}{homerun.batterLastName}
          </div>
          <div>
            <h4>Seating Information:</h4>
            Section: {homerun.seatSection} Row: {homerun.seatRow} Number: {homerun.seatNumber}
          </div>
          <div>
            <h4>Ball Park:</h4>
            {homerun.parkName} On: {homerun.date}
          </div>
          <div>
            <img src={homerun.baseBallImage} alt="Image of baseball" />
            <img src={homerun.ticketStub} alt="Image of tickestub" />
          </div>
        </div>
      )
    })
    return (
      <div className="row">
        <div className="col-md-12">
          {userList}
        </div>
      </div>
    )
  }
});

var UserListingContainer = React.createClass({
  getInitialState: function(){
    return {
      collection: new ClaimedHomerunCollection(),
      userListing: []
    }
  },
  componentWillMount: function(){
    var self = this;
    var collection = this.state.collection;
    var userId = JSON.parse(localStorage.getItem('shelfObjectId'));
    collection.userId = userId;
    setupHeaders();


    collection.fetch().then(function(response){

      self.setState({userListing: response.results});
    });
  },
  render: function(){
    return (
      <Template>
        <UserHomeRunList userListing={this.state.userListing} />
      </Template>
    )
  }
});

module.exports = {
  UserListingContainer: UserListingContainer
};
