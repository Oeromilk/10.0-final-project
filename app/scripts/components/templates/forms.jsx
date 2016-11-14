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
  render: function(){
    return (
      <div className="row">
        <div className="col-md-8 well">
          <form className="form-horizontal">
            <div className="form-group">
              <label htmlFor="firstName" className="col-sm-2 control-label">First Name</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="firstName" placeholder="First Name" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="lastName" className="col-sm-2 control-label">Last Name</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="signUpEmail" className="col-sm-2 control-label">Email</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="signUpEmail" placeholder="Email" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="signUpPassword" className="col-sm-2 control-label">Password</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="signUpPassword" placeholder="Password" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="passwordVerify" className="col-sm-2 control-label">Verify Password</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="passwordVerify" placeholder="Re-enter Password" />
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
