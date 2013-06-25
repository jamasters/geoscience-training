'use strict';

/* Filters */

var geoScienceFilters = angular.module('geoScienceApp.filters', []);

geoScienceFilters.filter('interpolate', ['version',
function(version) {
   return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
   }
}]);
