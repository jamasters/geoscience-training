'use strict';

/* Directives */

var geoScienceDirectives = angular.module('geoScienceApp.directives', [])

geoScienceDirectives.directive('appVersion', ['version',
function(version) {
   return function(scope, elm, attrs) {
      elm.text(version);
   };
}]);

geoScienceDirectives.directive('sideMenu', function($location) {
   return {
      restrict : "E",
      replace : true,
      scope : {
      },
      templateUrl : "partials/directives/side-menu.html",
      link : function(scope) {
         scope.itemClasses = function(pathFragment, anotherPathFragment) {
            var active = $location.path() == pathFragment || (anotherPathFragment && $location.path().substring(0, anotherPathFragment.length) === anotherPathFragment);
            return {
               "active-item" : active,
               "inactive-item" : !active
               
            }
         };
      }
   }
});

geoScienceDirectives.directive('bottomMenu', function($location) {
   return {
      restrict : "E",
      replace : true,
      scope : {
      },
      templateUrl : "partials/directives/bottom-menu.html",
      link : function(scope) {
         scope.itemClasses = function(pathFragment, anotherPathFragment) {
            var active = $location.path() == pathFragment || (anotherPathFragment && $location.path().substring(0, anotherPathFragment.length) === anotherPathFragment);
            return {
               "active-item" : active,
               "inactive-item" : !active
            }
         };
      }
   }
});

geoScienceDirectives.directive('fadeIn', function() {
   return {
      compile : function(elm) {
         $(elm).css('opacity', 0.1);
         return function(scope, elm, attrs) {
            $(elm).animate({
               opacity : 1.0
            }, 1000);
         };
      }
   };
});
