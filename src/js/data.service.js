'use strict';
dataService.$inject = ['$http'];
function dataService($http){
  var BASE_URL = 'http://localhost:3002';
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
      if(result.length > 0){
        return result.data;
      }else{
        return returnMock();
      }
    }, function fail() {
      console.log('FAILED');
      return returnMock();
    });

    function returnMock() {
      var mockData = [
        {'id':0,'field1':'data1'},
        {'id':1,'field2':'data2'},
        {'id':2,'field3':'data3'},
        {'id':3,'field4':'data4'},
        {'id':4,'field5':'data5'},
        {'id':5,'field6':'data6'},
        {'id':6,'field7':'data7'},
        {'id':7,'field8':'data8'},
        {'id':8,'field9':'data9'},
        {'id':9,'field10':'data10'},
        {'id':10,'field11':'data11'},
        {'id':11,'field12':'data12'},
        {'id':12,'field13':'data13'},
        {'id':13,'field14':'data14'},
        {'id':14,'field15':'data15'},
        {'id':15,'field16':'data16'},
        {'id':16,'field17':'data17'},
        {'id':17,'field18':'data18'},
        {'id':18,'field19':'data19'},
        {'id':19,'field20':'data20'},
        {'id':20,'field21':'data21'},
        {'id':21,'field22':'data22'},
        {'id':22,'field23':'data23'},
        {'id':23,'field24':'data24'},
        {'id':24,'field25':'data25'},
        {'id':25,'field26':'data26'},
        {'id':26,'field27':'data27'},
        {'id':27,'field28':'data28'},
        {'id':28,'field29':'data29'},
        {'id':29,'field30':'data30'},
        {'id':30,'field31':'data31'},
        {'id':31,'field32':'data32'},
        {'id':32,'field33':'data33'},
        {'id':33,'field34':'data34'},
        {'id':34,'field35':'data35'},
        {'id':35,'field36':'data36'},
        {'id':36,'field37':'data37'},
        {'id':37,'field38':'data38'},
        {'id':38,'field39':'data39'}
      ];
      return mockData;
    }
  };
}

module.exports = dataService;