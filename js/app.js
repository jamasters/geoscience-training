'use strict';

// Declare app level module which depends on filters, and services
angular.module('geoScienceApp', ['geoScienceApp.filters', 'geoScienceApp.services', 'geoScienceApp.directives', 'geoScienceApp.controllers', 'leaflet-directive', 'ngUpload']).config(['$routeProvider',
function($routeProvider) {
   $routeProvider.when('/surveys', {
      templateUrl : 'partials/surveys.html',
      controller : 'SurveysCtrl'
   });
   $routeProvider.when('/add-survey/:latitude/:longitude', {
      templateUrl : 'partials/add-survey.html',
      controller : 'AddSurveyCtrl'
   });
   $routeProvider.when('/email', {
      templateUrl : 'partials/email.html',
      controller : 'EmailCtrl'
   });
   $routeProvider.when('/weather', {
      templateUrl : 'partials/weather.html',
      controller : 'WeatherCtrl'
   });
   $routeProvider.when('/news', {
      templateUrl : 'partials/news.html',
      controller : 'NewsCtrl'
   });
   $routeProvider.otherwise({
      redirectTo : '/surveys'
   });
}]);
