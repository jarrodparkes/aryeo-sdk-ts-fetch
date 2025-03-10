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
exports.instanceOfDotsResource = instanceOfDotsResource;
exports.DotsResourceFromJSON = DotsResourceFromJSON;
exports.DotsResourceFromJSONTyped = DotsResourceFromJSONTyped;
exports.DotsResourceToJSON = DotsResourceToJSON;
exports.DotsResourceToJSONTyped = DotsResourceToJSONTyped;
const runtime_1 = require("../runtime");
const DotsValue_1 = require("./DotsValue");
/**
 * Check if a given object implements the DotsResource interface.
 */
function instanceOfDotsResource(value) {
    if (!('status' in value) || value['status'] === undefined)
        return false;
    return true;
}
function DotsResourceFromJSON(json) {
    return DotsResourceFromJSONTyped(json, false);
}
function DotsResourceFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'status': json['status'],
        'data': json['data'] == null ? undefined : ((0, runtime_1.mapValues)(json['data'], DotsValue_1.DotsValueFromJSON)),
    };
}
function DotsResourceToJSON(json) {
    return DotsResourceToJSONTyped(json, false);
}
function DotsResourceToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'status': value['status'],
        'data': value['data'] == null ? undefined : ((0, runtime_1.mapValues)(value['data'], DotsValue_1.DotsValueToJSON)),
    };
}
