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

var url = 'http://gd2.mlb.com/components/game/mlb/year_2015/month_04/day_01/master_scoreboard.json';

$.get(url).then(function(data){
  console.log(data.data.games.game);
});

module.exports = {
  logIn: logIn,
  setupHeaders: setupHeaders
};
