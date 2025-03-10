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
exports.instanceOfGroupResource = instanceOfGroupResource;
exports.GroupResourceFromJSON = GroupResourceFromJSON;
exports.GroupResourceFromJSONTyped = GroupResourceFromJSONTyped;
exports.GroupResourceToJSON = GroupResourceToJSON;
exports.GroupResourceToJSONTyped = GroupResourceToJSONTyped;
const Group_1 = require("./Group");
/**
 * Check if a given object implements the GroupResource interface.
 */
function instanceOfGroupResource(value) {
    if (!('status' in value) || value['status'] === undefined)
        return false;
    return true;
}
function GroupResourceFromJSON(json) {
    return GroupResourceFromJSONTyped(json, false);
}
function GroupResourceFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'status': json['status'],
        'data': json['data'] == null ? undefined : (0, Group_1.GroupFromJSON)(json['data']),
    };
}
function GroupResourceToJSON(json) {
    return GroupResourceToJSONTyped(json, false);
}
function GroupResourceToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'status': value['status'],
        'data': (0, Group_1.GroupToJSON)(value['data']),
    };
}
