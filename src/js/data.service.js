dataService.$inject = ['$http'];
function dataService($http){
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
    return $http({
      method: method,
      url: BASE_URL+url,
      timeout: 25000,
      headers: micro_headers,
      data: params
    }).then(function(result){
      return result.data;
    });
  };
}

module.exports = dataService;