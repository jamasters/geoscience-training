'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Site Survey', function() {

   beforeEach(function() {
      browser().navigateTo('../../site-survey.html');
   });

   // Make sure that the default route is in place.
   it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
      expect(browser().location().url()).toBe("/view1");
   });

   describe('view1', function() {

      beforeEach(function() {
         browser().navigateTo('#/view1');
      });

      // Ensure map is rendered with a collection of markers.
      it('should render view1 with a map containing markers', function() {
         expect(element('[ng-view] #map').attr('markers')).toMatch('markers');
      });
   });

   describe('view2', function() {

      beforeEach(function() {
         browser().navigateTo('#/view2/-38/147');
      });

      // Ensure route params are working.
      it('should render view2 when user navigates to /view2 with lat long', function() {
         expect(browser().location().url()).toBe("/view2/-38/147");
      });

   });

   describe('Creating a new site survey', function() {

      beforeEach(function() {
         browser().navigateTo('#/view1');
      });

      // End to end test for creating a new site survey point. Simulates a click on the map, with navigation to the add
      // site survey page. Simulates a file upload as angular is yet to handle that feature in tests. And checks to see if
      // the number of site surveys has increased.
      it('should add another marker to the map', function() {
         expect(browser().location().url()).toBe("/view1");

         var initialMarkerCount = element('[ng-view] #surveyCount').query(function(surveyCountElement, done) {
            var initialMarkerCount = surveyCountElement.text();
            
            done();
            
            browser().navigateTo('#/view2/-38/147');
            input('siteSurvey.imageUrl').enter('test/img/test.jpg');

            input('siteSurvey.title').enter('title');
            input('siteSurvey.description').enter('description');

            element('#surveySubmit').click();
            expect(browser().location().url()).toBe("/view1");

            expect(element('[ng-view] #surveyCount').text()).toMatch(1 + parseInt(initialMarkerCount));

         });

      });
   });
});
