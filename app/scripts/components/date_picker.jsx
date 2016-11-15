var React = require('react');

var Template = require('./templates/template.jsx').Template;

var DatePickerContainer = React.createClass({
  render: function(){
    return (
      <Template>
        <div className="row">
          <h1 className="col-md-8 col-md-offset-2 text-center">Select a date to see the home runs</h1>
        </div>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="input-group">
              <input type="date" className="form-control" placeholder="Search for..." />
              <span className="input-group-btn">
                <button className="btn btn-default" type="button">Go!</button>
              </span>
            </div>
          </div>
        </div>
      </Template>
    )
  }
});

module.exports = {
  DatePickerContainer: DatePickerContainer
};
