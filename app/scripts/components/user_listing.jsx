var React = require('react');

var Template = require('./templates/template.jsx').Template;
var ClaimedHomerunCollection = require('../models/claimed_homerun.js').ClaimedHomerunCollection;
var setupHeaders = require('../parse_utility.js').setupHeaders;

var UserHomeRunList = React.createClass({
  render: function(){
    var userList = this.props.userListing.map(function(homerun){
      return <li key={homerun.objectId}>{homerun.batterFirstName}{homerun.batterLastName}</li>
    })
    return (
      <div>
        <ul>
          {userList}
        </ul>
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
