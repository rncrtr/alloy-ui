'use strict';
dataService.$inject = ['$http', '$q'];
function dataService($http, $q){
  var BASE_URL = 'http://localhost:3001';
  var url = '';
  var CALL_BACK = '?callback=JSON_CALLBACK';
  var micro_headers = {
    "Accept":"application/json",
    "Content-Type":"application/json",
    "Cache-Control":"no-cache"
  };

  // accessible methods
  var service = {
    getRest: getRest
  };
  return service;

  function getRest(url,method, params){

    switch(url) {
      case '/contexts':
        return $q.when(getMockContexts());
        break;
      case '/servers':
        return $q.when(getMockServers());
        break;
      case '/scripts':
        return $q.when(getMockScripts());
        break;
      default:
        console.log('no method specified!');
    }


    if (url.indexOf('/contexts') >= 0) {
        if (url.indexOf('/reports') >= 0) {
          return $q.when(getMockReports());
        }
        return $q.when(getMockContexts());
    } else if (url.indexOf('/servers') >= 0) {
        return $q.when(getMockServers());
    } else if (url.indexOf('/scripts') >= 0) {
        return $q.when(getMockScripts());
    }

  };
}

module.exports = dataService;