var React = require('react');
var $ = require('jquery');

var Template = require('./templates/template.jsx').Template;
var ClaimedHomerunCollection = require('../models/claimed_homerun.js').ClaimedHomerunCollection;
var setupHeaders = require('../parse_utility.js').setupHeaders;
var User = require('../models/user.js').User;

var UserHomeRunList = React.createClass({
  handleEdit: function(e){
    e.preventDefault();
    console.log('clicked');
  },
  handleDelete: function(e){
    e.preventDefault();
    var objectId = e.target.value;
    var self = this;
    var router = this.props.router;

    var user = new User(JSON.parse(localStorage.getItem('userInfo')));
    user.unset('createdAt');
    user.unset('updatedAt');
    user.unset('sessionToken');
    user.unset('ACL');
    user.set("numberOfCatches", {"__op":"Increment","amount":-1});
    user.save();

    var options = {'url': 'https://grabow.herokuapp.com/classes/ClaimedHomerun/' + objectId, 'method': 'DELETE'};

    $.ajax(options).success(function(){
      router.navigate('user-listing/', {trigger: true});
    });

  },
  render: function(){
    var self = this;
    var userList = this.props.userListing.map(function(homerun){
      console.log(homerun);
      return (
        <div key={homerun.objectId} className="col-md-3 userListingStyle">
          <div>
            <h4>Homerun Batter: </h4>
            <p>{homerun.batterFirstName}{homerun.batterLastName}</p>
          </div>
          <div>
            <h4>Seating Information:</h4>
            <p>Section: {homerun.seatSection} Row: {homerun.seatRow} Number: {homerun.seatNumber}</p>
          </div>
          <div>
            <h4>Ball Park:</h4>
            <p>{homerun.parkName} On: {homerun.date}</p>
          </div>
          <div>
            <img src={homerun.baseBallImage} alt="Image of baseball" />
            <img src={homerun.ticketStub} alt="Image of tickestub" />
          </div>
          <button onClick={self.handleEdit} className="btn btn-default">Edit</button>
          <button onClick={self.handleDelete} className="btn btn-default" value={homerun.objectId}>Delete</button>
        </div>
      )
    })
    return (
      <div className="row">
        <div className="col-md-12 userStyleBackground">
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
        <UserHomeRunList router={this.props.router} userListing={this.state.userListing} />
      </Template>
    )
  }
});

module.exports = {
  UserListingContainer: UserListingContainer
};
