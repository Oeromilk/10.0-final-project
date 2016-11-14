var React = require('react');

var LogInForm = React.createClass({
  render: function(){
    return (
      <form className="form-horizontal well">
        <div className="form-group">
          <label htmlFor="userEmail" className="col-sm-2 control-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="userEmail" placeholder="Email" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="userPassword" className="col-sm-2 control-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="userPassword" placeholder="Password" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default">Sign in</button>
          </div>
        </div>
      </form>
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
    console.log(newUser);
  },
  handleSignUp: function(){
    console.log('props', this.props.user);
  },
  render: function(){
    return (
      <div className="row">
        <div className="col-md-8 well">
          <form onSubmit={this.handleSignUp} className="form-horizontal">
            <div className="form-group">
              <label htmlFor="firstName" className="col-sm-2 control-label">First Name</label>
              <div className="col-sm-10">
                <input onChange={this.handleInputChange} type="text" className="form-control" id="firstName" name="firstName" placeholder="First Name" value={this.state.firstName}/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="lastName" className="col-sm-2 control-label">Last Name</label>
              <div className="col-sm-10">
                <input onChange={this.handleInputChange} type="text" className="form-control" id="lastName" name="lastName" placeholder="Last Name" value={this.state.lastName}/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="signUpEmail" className="col-sm-2 control-label">Email</label>
              <div className="col-sm-10">
                <input onChange={this.handleInputChange} type="email" className="form-control" id="signUpEmail" name="email" placeholder="Email" value={this.state.email}/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="signUpPassword" className="col-sm-2 control-label">Password</label>
              <div className="col-sm-10">
                <input onChange={this.handleInputChange} type="password" className="form-control" id="signUpPassword" name="password" placeholder="Password" value={this.state.password}/>
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
          <h1 className="text-center">Test</h1>
        </div>
      </div>
    )
  }
});

module.exports = {
  LogInForm: LogInForm,
  SignUpForm: SignUpForm
};
