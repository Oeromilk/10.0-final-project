var React = require('react');
var _ = require('underscore');

var Template = require('./templates/template.jsx').Template;
var setupHeaders = require('../parse_utility.js').setupHeaders;
var ClaimedHomerunCollection = require('../models/claimed_homerun.js').ClaimedHomerunCollection;
var Users = require('../models/user.js').User;

var TopUserListing = React.createClass({
  render: function(){
    var homeRunList = this.props.listingView;
    var sortedUsers = _.sortBy(homeRunList, 'numberOfCatches');
    var topHomeRunView = sortedUsers.reverse().map(function(user){
      for(var i = 0; i === 0; i++){
        i + 1;
      }
      return <li className="list-group-item text-center" key={user.objectId}>{i}{user.firstName} {user.lastName} {user.numberOfCatches}</li>
    })
    return (
      <ul className="list-group col-md-6 col-md-offset-3">
        {topHomeRunView}
      </ul>
    )
  }
})

var TopUsersContainer = React.createClass({
  getInitialState: function(){
    return {
        collection: new ClaimedHomerunCollection(),
        user: new Users(),
        listingView: []
    }
  },
  componentWillMount: function(){
    setupHeaders();
    var self = this;
    // var collection = this.state.collection;
    // collection.fetch().then(function(response){
    //   self.setState({listingView: response.results});
    // });
    this.state.user.fetch().then(function(response){
      self.setState({listingView: response.results});
    });
  },
  render: function(){
    console.log(this.state.listingView);
    return (
      <Template>
        <h1 className="col-md-6 col-md-offset-3 text-center">List of Top Users</h1>
        <TopUserListing listingView={this.state.listingView} />
      </Template>
    )
  }
});

module.exports = {
  TopUsersContainer: TopUsersContainer
};
