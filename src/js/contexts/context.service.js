
function contextService(){
  var url = '';
  var CALL_BACK = '?callback=JSON_CALLBACK';
  var micro_headers = {
    "Accept":"application/json",
    "Content-Type":"application/json",
    "Cache-Control":"no-cache"
  };

  // accessible methods
  var service = {
    listContexts: listContexts
  };
  return service;

  function listContexts(){
    var defer = $q.defer();
    $http.get({
      url: BASE_URL,
      timeout: 25000,
      headers: micro_headers
    }).success(function(response){
      return defer.resolve(response);
    }).error(function(response, status) {
      return defer.resolve(status);
    });
    return defer.promise;
  };
}

module.exports = contextService;