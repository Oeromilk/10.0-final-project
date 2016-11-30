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

var mlbUrl = 'https://shelf-mlb-proxy.herokuapp.com/mlb';

function setUrl(year, month, day){
  var dateUrl = mlbUrl + '?year=' + year + '&month=' + month + '&day=' + day;

  return dateUrl;
}

module.exports = {
  logIn: logIn,
  setupHeaders: setupHeaders,
  setUrl: setUrl
};
