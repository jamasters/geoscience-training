'use strict';

/* Directives */

var geoScienceDirectives = angular.module('geoScienceApp.directives', [])

geoScienceDirectives.directive('appVersion', ['version',
function(version) {
   return function(scope, elm, attrs) {
      elm.text(version);
   };
}]);