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
   var serverApi = {
      getMarkers : function() {
         var markers = [{
            "lat" : "-35.28948774935103",
            "lng" : "149.12103652954102",
            "imageUrl" : "img/upload/test.png",
            "title" : "Test Survey Title",
            "description" : "Test Survey Description"
         },{"lat" : "-35.28948774935103",
            "lng" : "149.12103652954102",
            "imageUrl" : "img/upload/test.png",
            "title" : "Another Survey Title",
            "description" : "Another Survey Description"
         },
         {"lat" : "-35.28948774935103",
            "lng" : "149.12103652954102",
            "imageUrl" : "img/upload/test.png",
            "title" : "Yet Another Survey",
            "description" : "Yet Another Description"
         }
         
         ]
         return markers;
      }
   };

   return serverApi;
}]);
