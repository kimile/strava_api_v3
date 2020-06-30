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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BaseStream', 'model/LatLng'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BaseStream'), require('./LatLng'));
  } else {
    // Browser globals (root is window)
    if (!root.StravaApiV3) {
      root.StravaApiV3 = {};
    }
    root.StravaApiV3.LatLngStream = factory(root.StravaApiV3.ApiClient, root.StravaApiV3.BaseStream, root.StravaApiV3.LatLng);
  }
}(this, function(ApiClient, BaseStream, LatLng) {
  'use strict';

  /**
   * The LatLngStream model module.
   * @module model/LatLngStream
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>LatLngStream</code>.
   * @alias module:model/LatLngStream
   * @class
   * @implements module:model/BaseStream
   */
  var exports = function() {
    BaseStream.call(this);
  };

  /**
   * Constructs a <code>LatLngStream</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LatLngStream} obj Optional instance to populate.
   * @return {module:model/LatLngStream} The populated <code>LatLngStream</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      BaseStream.constructFromObject(data, obj);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [LatLng]);
    }
    return obj;
  }

  /**
   * The sequence of lat/long values for this stream
   * @member {Array.<module:model/LatLng>} data
   */
  exports.prototype.data = undefined;

  // Implement BaseStream interface:
  /**
   * The number of data points in this stream
   * @member {Number} originalSize
   */
  exports.prototype.originalSize = undefined;

  /**
   * The level of detail (sampling) in which this stream was returned
   * @member {module:model/BaseStream.ResolutionEnum} resolution
   */
  exports.prototype.resolution = undefined;

  /**
   * The base series used in the case the stream was downsampled
   * @member {module:model/BaseStream.SeriesTypeEnum} seriesType
   */
  exports.prototype.seriesType = undefined;

  return exports;

}));