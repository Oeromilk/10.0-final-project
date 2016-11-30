var React = require('react');

var LogInForm = React.createClass({
  getInitialState: function(){
    return {
      'username': '',
      'password': ''
    };
  },
  handleInputChange: function(e){
    var target = e.target;
    var userLogin = {};
    userLogin[target.name] = target.value;
    this.setState(userLogin);
  },
  handleSignIn: function(e){
    e.preventDefault();

    this.props.handleSignIn(this.state);
  },
  render: function(){
    return (
      <div id="signInBackground" className="row">
        <div className="col-sm-6 col-sm-offset-3 signInBanner">
          <form onSubmit={this.handleSignIn} className="form-horizontal">
            <div className="form-group">
              <label id="labelStyle" htmlFor="username" className="col-sm-2 control-label">User Name</label>
              <div className="col-sm-10">
                <input onChange={this.handleInputChange} type="text" className="form-control" id="username" name="username" placeholder="User Name" value={this.state.username}/>
              </div>
            </div>
            <div className="form-group">
              <label id="labelStyle" htmlFor="userPassword" className="col-sm-2 control-label">Password</label>
              <div className="col-sm-10">
                <input onChange={this.handleInputChange} type="password" className="form-control" id="userPassword" name="password" placeholder="Password" value={this.state.password}/>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-default">Sign in</button>
                <div id="labelStyle">Don't have an account yet? <a href="#signup/">Sign Up!</a></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
});

var SignUpForm = React.createClass({
  getInitialState: function(){
    return this.props.user.toJSON();
  },
  handleInputChange: function(e){
    var target = e.target;
    var newUser = {};
    newUser[target.name] = target.value;
    this.setState(newUser);
    // console.log(newUser);

    this.props.user.set(target.name, target.value);
  },
  handleSignUp: function(e){
    e.preventDefault();

    this.props.handleSignUp(this.props.user);
  },
  handleUserAvatar: function(e){
    var image = e.target.files[0];
    this.props.handleUserAvatar(image);
  },
  render: function(){
    return (
      <div id="signUpBackground" className="row">
        <div className="col-sm-8 col-sm-offset-2 signInBanner">
          <div className="col-md-8">
            <form onSubmit={this.handleSignUp} className="form-horizontal">
              <div className="form-group">
                <label id="labelStyle" htmlFor="firstName" className="col-sm-2 control-label">First Name</label>
                <div className="col-sm-10">
                  <input onChange={this.handleInputChange} type="text" className="form-control" id="firstName" name="firstName" placeholder="First Name" value={this.state.firstName}/>
                </div>
              </div>
              <div className="form-group">
                <label id="labelStyle" htmlFor="lastName" className="col-sm-2 control-label">Last Name</label>
                <div className="col-sm-10">
                  <input onChange={this.handleInputChange} type="text" className="form-control" id="lastName" name="lastName" placeholder="Last Name" value={this.state.lastName}/>
                </div>
              </div>
              <div className="form-group">
                <label id="labelStyle" htmlFor="userName" className="col-sm-2 control-label">User Name</label>
                <div className="col-sm-10">
                  <input onChange={this.handleInputChange} type="text" className="form-control" id="userName" name="username" placeholder="User Name" value={this.state.username}/>
                </div>
              </div>
              <div className="form-group">
                <label id="labelStyle" htmlFor="signUpEmail" className="col-sm-2 control-label">Email</label>
                <div className="col-sm-10">
                  <input onChange={this.handleInputChange} type="email" className="form-control" id="signUpEmail" name="email" placeholder="Email" value={this.state.email}/>
                </div>
              </div>
              <div className="form-group">
                <label id="labelStyle" htmlFor="signUpPassword" className="col-sm-2 control-label">Password</label>
                <div className="col-sm-10">
                  <input onChange={this.handleInputChange} type="password" className="form-control" id="signUpPassword" name="password" placeholder="Password" value={this.state.password}/>
                </div>
              </div>
              <div className="form-group">
                <label id="labelStyle" htmlFor="userAvatar" className="col-sm-2 control-label">Avatar Image</label>
                <div className="col-sm-10">
                  <input onChange={this.handleUserAvatar} type="file" className="form-control" id="userAvatar" />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="submit" className="btn btn-default">Sign Up</button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-4">
            <h1 id="signUpSide" className="text-center">So Close!</h1>
            <div id="signUpSide" className="text-center">Just a few more clicks for greatness!</div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = {
  LogInForm: LogInForm,
  SignUpForm: SignUpForm
};
