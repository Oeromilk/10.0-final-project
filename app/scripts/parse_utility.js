var $ = require('jquery');
var Backbone = require('backbone');

function setupHeaders(){
  $.ajaxSetup({
    beforeSend: function(xhr){
      xhr.setRequestHeader("X-Parse-Application-Id", "dalaran");
      xhr.setRequestHeader("X-Parse-REST-API-Key", "stormwind");
    }
  });
}

function logIn(loginInfo, router){
  $.get('https://grabow.herokuapp.com/login?username=' +
  loginInfo.username + '&password=' + loginInfo.password).then(
    function(response){
      localStorage.setItem('shelfUsername', JSON.stringify(response.username));
      localStorage.setItem('shelfSession', JSON.stringify(response.sessionToken))

      router.navigate('#/', {trigger: true});
    });
}

var mlbUrl = 'http://gd2.mlb.com/components/game/mlb/';

function setUrl(year, month, day){
  var dateUrl = mlbUrl + 'year_' + year + '/month_' + month + '/day_' + day + '/master_scoreboard.json';

  return dateUrl;
}

module.exports = {
  logIn: logIn,
  setupHeaders: setupHeaders,
  setUrl: setUrl
};
