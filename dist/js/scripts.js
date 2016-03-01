!function(){"use strict"}();
!function(){var a=["routes"];angular.module("app",a)}();
!function(){"use strict";var t=[];angular.module("contexts",t)}();
function contextService(){function e(){var e=$q.defer();return $http.get({url:BASE_URL,timeout:25e3,headers:t}).success(function(t){return e.resolve(t)}).error(function(t,n){return e.resolve(n)}),e.promise}var t={Accept:"application/json","Content-Type":"application/json","Cache-Control":"no-cache"},n={listContexts:e};return n}angular.module("app").factory("contextService",contextService);

!function(){"use strict";var r=[];angular.module("reports",r)}();
!function(){"use strict";function t(t,e){e.otherwise("/contexts"),t.state("main",{"abstract":!0,templateUrl:"partials/main-template.html"}).state("main.contexts",{url:"/contexts",template:"main.contexts"}).state("main.contextDetail",{url:"/contexts/{id}",template:"main.contextDetail"})}angular.module("routes").config(t),t.$inject=["$stateProvider","$urlRouterProvider"]}();
!function(){"use strict";angular.module("routes",["ui.router"])}();


function TrainingDataController(){}angular.module("app").controller("TrainingDataController",TrainingDataController);

!function(){"use strict";function t(){function t(t,e,c){}return{restrict:"E",template:"context-detail-view.html",scope:{ctx:"=ctx"},link:t}}angular.module("contexts").directive("contextDetail",t)}();

!function(){"use strict";function n(){}angular.module("reports").controller(n),n.$inject=[]}();
!function(){"use strict";function n(){}angular.module("reports").controller(n),n.$inject=[]}();





