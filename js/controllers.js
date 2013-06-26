'use strict';

var geoScienceControllers = angular.module('geoScienceApp.controllers', []);

/**
 * ViewOncCtrl is bound to the map display view that manages the retrieval of the site survey dataset and the
 * user requesting to add a new site survey.
 */
geoScienceControllers.controller('ViewOncCtrl', ['$scope', 'SurveyService',
function($scope, SurveyService) {
   $scope.markers = SurveyService.getMarkers();

}]);

/**
 * View Two Controller is boud to the add site survey view and manages the upload of of a site image as well as recording the
 * site survey data to the persistent store.
 */
geoScienceControllers.controller('ViewTwoCtrl', ['$scope',
function($scope) {

   $scope.siteSurvey = {};

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

   $scope.saveMarker = function() {
      alert("Saving site survey with title [" + $scope.siteSurvey.title + "] and descrription [" + $scope.siteSurvey.description + "] and imageUrl [" + $scope.siteSurvey.imageUrl + "]");
   }
}]);
