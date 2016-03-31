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
    getRest: getRest,
    getMockCtx: getMockCtx,
    getMockSrv: getMockSrv
  };
  return service;


  function getMockContexts() {
    return [
      {'id':0,'field1':'Context 1', 'field2': 'xfersvc1', 'field3': 'prcsrvc1', 'field5': 'reportsvc1', 'field6': 'key1', 'field7': 'key1', 'field8': 'map', 'field9': '2000', 'field10': '5000', 'field11': 'list'},
      {'id':1,'field1':'Context 1', 'field2': 'xfersvc1', 'field3': 'prcsrvc1', 'field5': 'reportsvc1', 'field6': 'key1', 'field7': 'key1', 'field8': 'map', 'field9': '2000', 'field10': '5000', 'field11': 'list'},
      {'id':2,'field1':'Context 1', 'field2': 'xfersvc1', 'field3': 'prcsrvc1', 'field5': 'reportsvc1', 'field6': 'key1', 'field7': 'key1', 'field8': 'map', 'field9': '2000', 'field10': '5000', 'field11': 'list'},
      {'id':3,'field1':'Context 1', 'field2': 'xfersvc1', 'field3': 'prcsrvc1', 'field5': 'reportsvc1', 'field6': 'key1', 'field7': 'key1', 'field8': 'map', 'field9': '2000', 'field10': '5000', 'field11': 'list'},
      {'id':4,'field1':'Context 1', 'field2': 'xfersvc1', 'field3': 'prcsrvc1', 'field5': 'reportsvc1', 'field6': 'key1', 'field7': 'key1', 'field8': 'map', 'field9': '2000', 'field10': '5000', 'field11': 'list'},
      {'id':5,'field1':'Context 1', 'field2': 'xfersvc1', 'field3': 'prcsrvc1', 'field5': 'reportsvc1', 'field6': 'key1', 'field7': 'key1', 'field8': 'map', 'field9': '2000', 'field10': '5000', 'field11': 'list'},
      {'id':6,'field1':'Context 1', 'field2': 'xfersvc1', 'field3': 'prcsrvc1', 'field5': 'reportsvc1', 'field6': 'key1', 'field7': 'key1', 'field8': 'map', 'field9': '2000', 'field10': '5000', 'field11': 'list'},
      {'id':7,'field1':'Context 1', 'field2': 'xfersvc1', 'field3': 'prcsrvc1', 'field5': 'reportsvc1', 'field6': 'key1', 'field7': 'key1', 'field8': 'map', 'field9': '2000', 'field10': '5000', 'field11': 'list'},
      {'id':8,'field1':'Context 1', 'field2': 'xfersvc1', 'field3': 'prcsrvc1', 'field5': 'reportsvc1', 'field6': 'key1', 'field7': 'key1', 'field8': 'map', 'field9': '2000', 'field10': '5000', 'field11': 'list'},
      {'id':9,'field1':'Context 1', 'field2': 'xfersvc1', 'field3': 'prcsrvc1', 'field5': 'reportsvc1', 'field6': 'key1', 'field7': 'key1', 'field8': 'map', 'field9': '2000', 'field10': '5000', 'field11': 'list'},
      {'id':10,'field1':'Context 1', 'field2': 'xfersvc1', 'field3': 'prcsrvc1', 'field5': 'reportsvc1', 'field6': 'key1', 'field7': 'key1', 'field8': 'map', 'field9': '2000', 'field10': '5000', 'field11': 'list'},
      {'id':11,'field1':'Context 1', 'field2': 'xfersvc1', 'field3': 'prcsrvc1', 'field5': 'reportsvc1', 'field6': 'key1', 'field7': 'key1', 'field8': 'map', 'field9': '2000', 'field10': '5000', 'field11': 'list'},
      {'id':12,'field1':'Context 1', 'field2': 'xfersvc1', 'field3': 'prcsrvc1', 'field5': 'reportsvc1', 'field6': 'key1', 'field7': 'key1', 'field8': 'map', 'field9': '2000', 'field10': '5000', 'field11': 'list'},
      {'id':13,'field1':'Context 1', 'field2': 'xfersvc1', 'field3': 'prcsrvc1', 'field5': 'reportsvc1', 'field6': 'key1', 'field7': 'key1', 'field8': 'map', 'field9': '2000', 'field10': '5000', 'field11': 'list'},
      {'id':14,'field1':'Context 1', 'field2': 'xfersvc1', 'field3': 'prcsrvc1', 'field5': 'reportsvc1', 'field6': 'key1', 'field7': 'key1', 'field8': 'map', 'field9': '2000', 'field10': '5000', 'field11': 'list'},
      {'id':15,'field1':'Context 1', 'field2': 'xfersvc1', 'field3': 'prcsrvc1', 'field5': 'reportsvc1', 'field6': 'key1', 'field7': 'key1', 'field8': 'map', 'field9': '2000', 'field10': '5000', 'field11': 'list'},
      {'id':16,'field1':'Context 1', 'field2': 'xfersvc1', 'field3': 'prcsrvc1', 'field5': 'reportsvc1', 'field6': 'key1', 'field7': 'key1', 'field8': 'map', 'field9': '2000', 'field10': '5000', 'field11': 'list'},
      {'id':17,'field1':'Context 1', 'field2': 'xfersvc1', 'field3': 'prcsrvc1', 'field5': 'reportsvc1', 'field6': 'key1', 'field7': 'key1', 'field8': 'map', 'field9': '2000', 'field10': '5000', 'field11': 'list'},
      {'id':18,'field1':'Context 1', 'field2': 'xfersvc1', 'field3': 'prcsrvc1', 'field5': 'reportsvc1', 'field6': 'key1', 'field7': 'key1', 'field8': 'map', 'field9': '2000', 'field10': '5000', 'field11': 'list'},
      {'id':19,'field1':'Context 1', 'field2': 'xfersvc1', 'field3': 'prcsrvc1', 'field5': 'reportsvc1', 'field6': 'key1', 'field7': 'key1', 'field8': 'map', 'field9': '2000', 'field10': '5000', 'field11': 'list'},
    ];
  }

  function getMockServers() {
    return [
      {'id': 0, 'field1': 'Server #1', 'field2': '2000', 'field3': 'http://thebestserver/ever1'},
      {'id': 1, 'field1': 'Server #2', 'field2': '800', 'field3': 'http://thebestserver/ever2'},
      {'id': 2, 'field1': 'Server #3', 'field2': '2000', 'field3': 'http://thebestserver/ever3'},
      {'id': 3, 'field1': 'Server #4', 'field2': '1400', 'field3': 'http://thebestserver/ever4'},
      {'id': 4, 'field1': 'Server #5', 'field2': '2000', 'field3': 'http://thebestserver/ever5'},
      {'id': 5, 'field1': 'Server #6', 'field2': '1500', 'field3': 'http://thebestserver/ever6'},
      {'id': 6, 'field1': 'Server #7', 'field2': '2000', 'field3': 'http://thebestserver/ever7'},
      {'id': 7, 'field1': 'Server #8', 'field2': '2000', 'field3': 'http://thebestserver/ever8'},
      {'id': 8, 'field1': 'Server #9', 'field2': '1800', 'field3': 'http://thebestserver/ever9'},
    ];
  }

  function getMockScripts() {
    return [
      {'id': 0, 'name': 'Script #1', 'language': 'javascript', 'status': 'In Queue'},
      {'id': 1, 'name': 'Script #2', 'language': 'groovy', 'status': 'In Queue'},
      {'id': 2, 'name': 'Script #3', 'language': 'groovy', 'status': 'In Queue'},
      {'id': 3, 'name': 'Script #4', 'language': 'javascript', 'status': 'Approved'},
      {'id': 4, 'name': 'Script #5', 'language': 'scala', 'status': 'Approved'},
      {'id': 5, 'name': 'Script #6', 'language': 'javascript', 'status': 'Approved'},
      {'id': 6, 'name': 'Script #7', 'language': 'scala', 'status': 'Approved'},
      {'id': 7, 'name': 'Script #8', 'language': 'javascript', 'status': 'Rejected'},
      {'id': 8, 'name': 'Script #9', 'language': 'groovy', 'status': 'Rejected'},
    ];
  }

  function getMockReports() {
    return [
      {id: 0, name: "Report #1"},
      {id: 1, name: "Report #2"},
      {id: 2, name: "Report #3"},
      {id: 3, name: "Report #4"},
      {id: 4, name: "Report #5"},
      {id: 5, name: "Report #6"},
      {id: 6, name: "Report #7"},
    ]
  }

  function getMockCtx() {
    return {'id':0,'contextName':'Context 1', 'transformService': 'xfersvc1', 'processingService': 'prcsrvc1', 'daemonFactoryService': 'daemonfactory1', 'reportService': 'reportsvc1', 'endpointKey': 'key1', 'identityKey': 'key1', 'polynomialMap': 'map', 'threshold': '2000', 'expiration': '5000', 'fieldList': 'list'};
  }

  function getMockSrv() {
    return {'id': 0, 'name': 'Server #1', 'timeout': '2000', baseUrl: 'http://thebestserver/ever1'};
  }

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