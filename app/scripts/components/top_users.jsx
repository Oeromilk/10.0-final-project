var React = require('react');

var Template = require('./templates/template.jsx').Template;
var setupHeaders = require('../parse_utility.js').setupHeaders;
var ClaimedHomerunCollection = require('../models/claimed_homerun.js').ClaimedHomerunCollection;

var TopUserListing = React.createClass({
  render: function(){
    var homeRunList = this.props.listingView;
    var topHomeRunView = homeRunList.map(function(data){
      return <li className="list-group-item text-center" key={data.objectId}>{data.batterFirstName} {data.batterLastName}</li>
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
        listingView: []
    }
  },
  componentWillMount: function(){
    setupHeaders();
    var self = this;
    var collection = this.state.collection;
    collection.fetch().then(function(response){
      self.setState({listingView: response.results});
    });
  },
  render: function(){
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
