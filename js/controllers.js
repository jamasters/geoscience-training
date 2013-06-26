'use strict';

var geoScienceControllers = angular.module('geoScienceApp.controllers', []);

/**
 * ViewOncCtrl is bound to the map display view that manages the retrieval of the site survey dataset and the
 * user requesting to add a new site survey.
 */
geoScienceControllers.controller('ViewOncCtrl', ['$scope', '$location', 'SurveyService',
function($scope, $location, SurveyService) {

   // Retrieve existing markers from the persistent store.
   $scope.markers = SurveyService.getMarkers();
   $scope.markerCount = $scope.markers.length;

   // Function that will execute when the map is clicked, in order to add a pin to the map.
   // This function is passed through to the mapping directive to customise functionality when the
   // map is clicked.
   $scope.clickedFunction = function(e) {
      $location.url("/view2/" + e.latlng.lat + "/" + e.latlng.lng);
   }
   // Center the map somewhere near the center of Australia.
   $scope.center = {
      lat : -35.29207988159784,
      lng : 149.12704467773438,
      zoom : 14
   };

}]);

/**
 * View Two Controller is boud to the add site survey view and manages the upload of of a site image as well as recording the
 * site survey data to the persistent store.
 */
geoScienceControllers.controller('ViewTwoCtrl', ['$scope', '$location', '$routeParams', 'SurveyService',
function($scope, $location, $routeParams, SurveyService) {

   $scope.siteSurvey = {};
   
   // Retrieve the lat and long from the route params. Probably not the best way to do this but is a good insight into
   // the angular routing framework.
   $scope.siteSurvey.lat = $routeParams.latitude;
   $scope.siteSurvey.lng = $routeParams.longitude;

   // Handle the file upload result. Store the relative resource url for future
   // reference.
   $scope.uploadResult = function(content, completed) {
      if (completed && content.length > 0) {
         var response = JSON.parse(content);
         $scope.siteSurvey.imageUrl = response.imageUrl;
      }
      else {
         // Could do some cool stuff here...
         // 1. ignore content and adjust your model to show/hide UI snippets; or
         // 2. show content as an _operation progress_ information. Progress bar for large file uploads.
      }
   };

   /**
    * Save a new marker record to the persistent store and redirect back to the mapping page.
    */
   $scope.saveMarker = function() {
      SurveyService.saveMarker({}, $scope.siteSurvey, function(response) {
         $location.url("/view1");
      }, function(error) {
         alert("Error")
      });
   }
}]);
