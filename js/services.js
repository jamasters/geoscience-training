'use strict';

/* Services */

var geoScienceServices = angular.module('geoScienceApp.services', ["ngResource"]);

// Demonstrate how to register services
// In this case it is a simple value service.
geoScienceServices.value('version', '0.1');

/**
 * Service for manipulating markers.
 *
 * This uses webservices to retrieve and save markers from the persistent store.
 */
geoScienceServices.factory("SurveyService", ['$resource',
function($resource) {
   var serverApi = $resource("/:action", {}, {
      saveMarker : {
         method : "POST",
         params : {
            action : "marker"
         }
      },
      getMarkers : {
         method : "GET",
         isArray : true,
         params : {
            action : "markers"
         }
      }
   });

   return serverApi;
}]);
