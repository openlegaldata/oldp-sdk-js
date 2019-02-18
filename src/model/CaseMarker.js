/**
 * Open Legal Data API
 * With the Open Legal Data API you can access various data from the legal domain, e.g. law text or case files. The data may be used for semantic analysis or to create statistics. For more information visit our website. https://openlegaldata.io/
 *
 * OpenAPI spec version: v1
 * Contact: hello@openlegaldata.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OldpApi) {
      root.OldpApi = {};
    }
    root.OldpApi.CaseMarker = factory(root.OldpApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CaseMarker model module.
   * @module model/CaseMarker
   * @version v1
   */

  /**
   * Constructs a new <code>CaseMarker</code>.
   * @alias module:model/CaseMarker
   * @class
   * @param belongsTo {Number} 
   * @param label {Number} 
   */
  var exports = function(belongsTo, label) {
    var _this = this;


    _this['belongs_to'] = belongsTo;
    _this['label'] = label;






  };

  /**
   * Constructs a <code>CaseMarker</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CaseMarker} obj Optional instance to populate.
   * @return {module:model/CaseMarker} The populated <code>CaseMarker</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('belongs_to')) {
        obj['belongs_to'] = ApiClient.convertToType(data['belongs_to'], 'Number');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'Number');
      }
      if (data.hasOwnProperty('value_str')) {
        obj['value_str'] = ApiClient.convertToType(data['value_str'], 'String');
      }
      if (data.hasOwnProperty('value_int')) {
        obj['value_int'] = ApiClient.convertToType(data['value_int'], 'Number');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
      }
      if (data.hasOwnProperty('start')) {
        obj['start'] = ApiClient.convertToType(data['start'], 'Number');
      }
      if (data.hasOwnProperty('end')) {
        obj['end'] = ApiClient.convertToType(data['end'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} belongs_to
   */
  exports.prototype['belongs_to'] = undefined;
  /**
   * @member {Number} label
   */
  exports.prototype['label'] = undefined;
  /**
   * @member {String} value_str
   */
  exports.prototype['value_str'] = undefined;
  /**
   * @member {Number} value_int
   */
  exports.prototype['value_int'] = undefined;
  /**
   * Entry is created at this date time
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * Date time of last change
   * @member {Date} updated_at
   */
  exports.prototype['updated_at'] = undefined;
  /**
   * Start position of marker (from 0)
   * @member {Number} start
   */
  exports.prototype['start'] = undefined;
  /**
   * End position of marker
   * @member {Number} end
   */
  exports.prototype['end'] = undefined;



  return exports;
}));

