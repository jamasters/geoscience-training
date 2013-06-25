'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Site Survey', function() {

   beforeEach(function() {
      browser().navigateTo('../../index.html');
   });

   // Make sure that the default route is in place.
   it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
      expect(browser().location().url()).toBe("/view1");
   });

});
