"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Aryeo
 * # Introduction The Aryeo API provides access to the Aryeo platform.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: jarrodp@zillowgroup.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfDotsValue = instanceOfDotsValue;
exports.DotsValueFromJSON = DotsValueFromJSON;
exports.DotsValueFromJSONTyped = DotsValueFromJSONTyped;
exports.DotsValueToJSON = DotsValueToJSON;
exports.DotsValueToJSONTyped = DotsValueToJSONTyped;
/**
 * Check if a given object implements the DotsValue interface.
 */
function instanceOfDotsValue(value) {
    return true;
}
function DotsValueFromJSON(json) {
    return DotsValueFromJSONTyped(json, false);
}
function DotsValueFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'scheduled': json['scheduled'] == null ? undefined : json['scheduled'],
        'unscheduled': json['unscheduled'] == null ? undefined : json['unscheduled'],
        'cancelled': json['cancelled'] == null ? undefined : json['cancelled'],
    };
}
function DotsValueToJSON(json) {
    return DotsValueToJSONTyped(json, false);
}
function DotsValueToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'scheduled': value['scheduled'],
        'unscheduled': value['unscheduled'],
        'cancelled': value['cancelled'],
    };
}
