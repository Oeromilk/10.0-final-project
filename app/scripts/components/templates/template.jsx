var React = require('react');
var $ = window.jQuery = require('jquery');

require('bootstrap-sass');

var FixedHeader = React.createClass({
  handleSignOut: function(e){
    e.preventDefault();
    console.log('clicked');
    localStorage.removeItem('shelfObjectId', '');
    localStorage.removeItem('shelfSession', '');
    localStorage.removeItem('shelfUsername', '');
    localStorage.removeItem('userInfo', '');
    if(localStorage.getItem('userInfo') === ''){
      this.props.router.naviate('#/', {trigger: true});
    }
  },
  render: function(){
    var username = JSON.parse(localStorage.getItem('shelfUsername'));
    var userInfo = JSON.parse(localStorage.getItem('userInfo'));
    var userAvatar = userInfo  ? userInfo.userAvatar : '' ;

    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid navbarStyle">
          <div className="navbar-header hover-style navBarDropDown">
            <a className="navbar-brand" href="#">Shelf</a>
          </div>
          <ul className="nav navbar-nav visible-sm visible-md visible-lg">
            <li><a href="#user-listing/"><i className="fa fa-list" aria-hidden="true"></i></a></li>
            <li><a href="#top-users/"><i className="fa fa-fire" aria-hidden="true"></i></a></li>
            <li><a href="#date-picker/"><i className="fa fa-calendar-o" aria-hidden="true"></i></a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><p className="navbar-text visible-sm visible-md visible-lg">Signed in as: {username}</p></li>
            <li><div className="navbar-brand visible-sm visible-md visible-lg"><img className="user-nav-avatar img-rounded" src={userAvatar} /></div></li>
            <li><a className="visible-sm visible-md visible-lg" href="#login/" role="button">Sign In <i className="fa fa-sign-in" aria-hidden="true"></i></a></li>
              <li id="navBarDropDown" className="dropdown visible-xs">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-bars" aria-hidden="true"></i></a>
                <ul className="dropdown-menu">
                  <li><a href="#user-listing/"><i className="fa fa-list" aria-hidden="true"></i></a></li>
                  <li><a href="#top-users/"><i className="fa fa-fire" aria-hidden="true"></i></a></li>
                  <li><a href="#date-picker/"><i className="fa fa-calendar-o" aria-hidden="true"></i></a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#login/" role="button">Sign In <i className="fa fa-sign-in" aria-hidden="true"></i></a></li>
                  <li><a href="#signup/" role="button">Sign Up <i className="fa fa-user-plus" aria-hidden="true"></i></a></li>
                  <li><a onClick={this.handleSignOut} href="#"><i className="fa fa-power-off" aria-hidden="true"></i></a></li>
                </ul>
              </li>
            <li><a className="visible-sm visible-md visible-lg" href="#signup/" role="button">Sign Up <i className="fa fa-user-plus" aria-hidden="true"></i></a></li>
            <li><a className="visible-sm visible-md visible-lg" onClick={this.handleSignOut} href="#"><i className="fa fa-power-off" aria-hidden="true"></i></a></li>
          </ul>
        </div>
      </nav>
    )
  }
});

var Template = React.createClass({
  render: function(){
    return (
      <div id="dateStyle">
        <FixedHeader />
          {this.props.children}
      </div>
    )
  }
});

module.exports = {
  Template: Template
};
