/*
 * Strava API v3
 * The [Swagger Playground](https://developers.strava.com/playground) is the easiest way to familiarize yourself with the Strava API by submitting HTTP requests and observing the responses before you write any client code. It will show what a response will look like with different endpoints depending on the authorization scope you receive from your athletes. To use the Playground, go to https://www.strava.com/settings/api and change your “Authorization Callback Domain” to developers.strava.com. Please note, we only support Swagger 2.0. There is a known issue where you can only select one scope at a time. For more information, please check the section “client code” at https://developers.strava.com/docs.
 *
 * OpenAPI spec version: 3.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.StravaApiV3);
  }
}(this, function(expect, StravaApiV3) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('ActivityStats', function() {
      beforeEach(function() {
        instance = new StravaApiV3.ActivityStats();
      });

      it('should create an instance of ActivityStats', function() {
        // TODO: update the code to test ActivityStats
        expect(instance).to.be.a(StravaApiV3.ActivityStats);
      });

      it('should have the property biggestRideDistance (base name: "biggest_ride_distance")', function() {
        // TODO: update the code to test the property biggestRideDistance
        expect(instance).to.have.property('biggestRideDistance');
        // expect(instance.biggestRideDistance).to.be(expectedValueLiteral);
      });

      it('should have the property biggestClimbElevationGain (base name: "biggest_climb_elevation_gain")', function() {
        // TODO: update the code to test the property biggestClimbElevationGain
        expect(instance).to.have.property('biggestClimbElevationGain');
        // expect(instance.biggestClimbElevationGain).to.be(expectedValueLiteral);
      });

      it('should have the property recentRideTotals (base name: "recent_ride_totals")', function() {
        // TODO: update the code to test the property recentRideTotals
        expect(instance).to.have.property('recentRideTotals');
        // expect(instance.recentRideTotals).to.be(expectedValueLiteral);
      });

      it('should have the property recentRunTotals (base name: "recent_run_totals")', function() {
        // TODO: update the code to test the property recentRunTotals
        expect(instance).to.have.property('recentRunTotals');
        // expect(instance.recentRunTotals).to.be(expectedValueLiteral);
      });

      it('should have the property recentSwimTotals (base name: "recent_swim_totals")', function() {
        // TODO: update the code to test the property recentSwimTotals
        expect(instance).to.have.property('recentSwimTotals');
        // expect(instance.recentSwimTotals).to.be(expectedValueLiteral);
      });

      it('should have the property ytdRideTotals (base name: "ytd_ride_totals")', function() {
        // TODO: update the code to test the property ytdRideTotals
        expect(instance).to.have.property('ytdRideTotals');
        // expect(instance.ytdRideTotals).to.be(expectedValueLiteral);
      });

      it('should have the property ytdRunTotals (base name: "ytd_run_totals")', function() {
        // TODO: update the code to test the property ytdRunTotals
        expect(instance).to.have.property('ytdRunTotals');
        // expect(instance.ytdRunTotals).to.be(expectedValueLiteral);
      });

      it('should have the property ytdSwimTotals (base name: "ytd_swim_totals")', function() {
        // TODO: update the code to test the property ytdSwimTotals
        expect(instance).to.have.property('ytdSwimTotals');
        // expect(instance.ytdSwimTotals).to.be(expectedValueLiteral);
      });

      it('should have the property allRideTotals (base name: "all_ride_totals")', function() {
        // TODO: update the code to test the property allRideTotals
        expect(instance).to.have.property('allRideTotals');
        // expect(instance.allRideTotals).to.be(expectedValueLiteral);
      });

      it('should have the property allRunTotals (base name: "all_run_totals")', function() {
        // TODO: update the code to test the property allRunTotals
        expect(instance).to.have.property('allRunTotals');
        // expect(instance.allRunTotals).to.be(expectedValueLiteral);
      });

      it('should have the property allSwimTotals (base name: "all_swim_totals")', function() {
        // TODO: update the code to test the property allSwimTotals
        expect(instance).to.have.property('allSwimTotals');
        // expect(instance.allSwimTotals).to.be(expectedValueLiteral);
      });

    });
  });

}));