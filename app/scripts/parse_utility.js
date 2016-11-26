var $ = require('jquery');
var Backbone = require('backbone');

function setupHeaders(token){
  $.ajaxSetup({
    beforeSend: function(xhr){
      xhr.setRequestHeader("X-Parse-Application-Id", "dalaran");
      xhr.setRequestHeader("X-Parse-REST-API-Key", "stormwind");

      if(token){
        xhr.setRequestHeader("X-Parse-Session-Token", token);
      }
    }
  });
}

function logIn(loginInfo, router){
  $.get('https://grabow.herokuapp.com/login?username=' +
  loginInfo.username + '&password=' + loginInfo.password).then(
    function(response){
      localStorage.setItem('shelfUsername', JSON.stringify(response.username));
      localStorage.setItem('shelfSession', JSON.stringify(response.sessionToken));
      localStorage.setItem('shelfObjectId', JSON.stringify(response.objectId));
      localStorage.setItem('userInfo', JSON.stringify(response));
      console.log(response);

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
