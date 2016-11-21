var React = require('react');

var FixedHeader = React.createClass({
  render: function(){
    var username = JSON.parse(localStorage.getItem('shelfUsername'));
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Shelf</a>
          </div>
          <ul className="nav navbar-nav">
            <li><a className="glyphicon glyphicon-stats" href="#user-listing/"></a></li>
            <li><a className="glyphicon glyphicon-fire" href="#top-users/"></a></li>
            <li><a className="glyphicon glyphicon-calendar" href="#date-picker/"></a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#login/" role="button">Sign In</a></li>
            <li><a href="#signup/" role="button">Sign Up</a></li>
            <li><a className="glyphicon glyphicon-off" href="#"></a></li>
          </ul>
          <p className="navbar-text navbar-right">Signed in as: {username}</p>
        </div>
      </nav>
    )
  }
});

var Template = React.createClass({
  render: function(){
    return (
      <div>
        <FixedHeader />
          {this.props.children}
      </div>
    )
  }
});

module.exports = {
  Template: Template
};
