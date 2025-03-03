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
exports.instanceOfApiError409 = instanceOfApiError409;
exports.ApiError409FromJSON = ApiError409FromJSON;
exports.ApiError409FromJSONTyped = ApiError409FromJSONTyped;
exports.ApiError409ToJSON = ApiError409ToJSON;
exports.ApiError409ToJSONTyped = ApiError409ToJSONTyped;
/**
 * Check if a given object implements the ApiError409 interface.
 */
function instanceOfApiError409(value) {
    if (!('status' in value) || value['status'] === undefined)
        return false;
    if (!('message' in value) || value['message'] === undefined)
        return false;
    return true;
}
function ApiError409FromJSON(json) {
    return ApiError409FromJSONTyped(json, false);
}
function ApiError409FromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'status': json['status'],
        'message': json['message'],
        'code': json['code'] == null ? undefined : json['code'],
    };
}
function ApiError409ToJSON(json) {
    return ApiError409ToJSONTyped(json, false);
}
function ApiError409ToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'status': value['status'],
        'message': value['message'],
        'code': value['code'],
    };
}
