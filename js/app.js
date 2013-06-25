'use strict';

// Declare app level module which depends on filters, and services
angular.module('geoScienceApp', ['geoScienceApp.filters', 'geoScienceApp.services', 'geoScienceApp.directives', 'geoScienceApp.controllers', 'leaflet-directive', 'ngUpload']).config(['$routeProvider',
function($routeProvider) {
   $routeProvider.when('/view1', {
      templateUrl : 'partials/partial1.html',
      controller : 'ViewOncCtrl'
   });
   $routeProvider.when('/view2', {
      templateUrl : 'partials/partial2.html',
      controller : 'ViewTwoCtrl'
   });
   $routeProvider.otherwise({
      redirectTo : '/view1'
   });
}]);
