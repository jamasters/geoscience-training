'use strict';

/* Directives */

var geoScienceDirectives = angular.module('geoScienceApp.directives', [])

geoScienceDirectives.directive('appVersion', ['version',
function(version) {
   return function(scope, elm, attrs) {
      elm.text(version);
   };
}]);

geoScienceDirectives.directive('fadeIn', function() {
    return {
      compile: function(elm) {
        $(elm).css('opacity', 0.1);
        return function(scope, elm, attrs) {
          $(elm).animate({ opacity : 1.0 }, 1000 );
        };
      }
    };
  });