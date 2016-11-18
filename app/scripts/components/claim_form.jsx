var React = require('react');

var Template = require('./templates/template.jsx').Template;

var ClaimForm = React.createClass({
  render: function(){
    return (
      <form className="col-md-6 col-md-offset-3">
        <h2>Seat Information</h2>
        <div className="form-inline well">
          <label htmlFor="seatSection">Section</label>
          <input type="text" className="form-control" id="seatSection" placeholder="Seat Section" />
          <label htmlFor="seatRow">Row</label>
          <input type="text" className="form-control" id="seatRow" placeholder="Seat Row" />
          <label htmlFor="seatNumber">Number</label>
          <input type="text" className="form-control" id="seatNumber" placeholder="Seat Number" />
        </div>
        <div className="form-inline well">
          <label htmlFor="parkSelector">Select Your Park</label>
          <select id="parkSelector">
            <option>Angel Stadium of Anaheim</option>
            <option>AT&T Park</option>
            <option>Busch Stadium</option>
            <option>Chase Field</option>
            <option>Citi Field</option>
            <option>Citizens Bank Park</option>
            <option>Comerica Park</option>
            <option>Coors Field</option>
            <option>Dodger Stadium</option>
            <option>Fenway Park</option>
            <option>Globe Lif Park In Arlington</option>
            <option>Great American Ball Park</option>
            <option>Guaranteed Rate Field</option>
            <option>Kauffman Stadium</option>
            <option>Marlins Park</option>
            <option>Miller Park</option>
            <option>Minute Maid Park</option>
            <option>Nationals Park</option>
            <option>Oaklan Coliseum</option>
            <option>Oriole Park at Camden Yards</option>
            <option>Petco Park</option>
            <option>PNC Park</option>
            <option>Progressive Field</option>
            <option>Rogers Centre</option>
            <option>Sun Trust Park</option>
            <option>Safeco Field</option>
            <option>Target Field</option>
            <option>Tropicana Field</option>
            <option>Wrigley Field</option>
            <option>Yanke Stadium</option>
          </select>
          <label htmlFor="dateSelector">Select Date</label>
          <input type="date" className="form-control" />
        </div>
        <h2>Batter Information</h2>
        <div className="form-inline well">
          <label htmlFor="firstName">First Name</label>
          <input type="text" className="form-control" id="firstName" placeholder="First Name" />
          <label htmlFor="lastName">Last Name</label>
          <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
        </div>
        <h2>Image Upload</h2>
          <div className="form-group well">
            <label htmlFor="ticketStub">Ticket Stub Image</label>
            <input type="file" id="ticketStub" />
            <p className="help-block">Upload an image of your ticket stub to verify your seat.</p>
          </div>
          <div className="form-group well">
            <label htmlFor="baseBallImage">BaseBall Image (optional)</label>
            <input type="file" id="baseBallImage" />
            <p className="help-block">Upload an image of your baseball you caught.</p>
          </div>
          <button className="btn btn-primary" type="submit">Claim HomeRun!</button>
      </form>
    )
  }
});

var ClaimFormContainer = React.createClass({
  render: function(){
    return (
      <Template>
        <ClaimForm />
      </Template>
    )
  }
});

module.exports = {
  ClaimFormContainer: ClaimFormContainer
};
