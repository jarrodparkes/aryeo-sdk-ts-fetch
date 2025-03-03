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
exports.instanceOfPropertyWebsite = instanceOfPropertyWebsite;
exports.PropertyWebsiteFromJSON = PropertyWebsiteFromJSON;
exports.PropertyWebsiteFromJSONTyped = PropertyWebsiteFromJSONTyped;
exports.PropertyWebsiteToJSON = PropertyWebsiteToJSON;
exports.PropertyWebsiteToJSONTyped = PropertyWebsiteToJSONTyped;
/**
 * Check if a given object implements the PropertyWebsite interface.
 */
function instanceOfPropertyWebsite(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('brandedUrl' in value) || value['brandedUrl'] === undefined)
        return false;
    if (!('unbrandedUrl' in value) || value['unbrandedUrl'] === undefined)
        return false;
    return true;
}
function PropertyWebsiteFromJSON(json) {
    return PropertyWebsiteFromJSONTyped(json, false);
}
function PropertyWebsiteFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'brandedUrl': json['branded_url'],
        'unbrandedUrl': json['unbranded_url'],
    };
}
function PropertyWebsiteToJSON(json) {
    return PropertyWebsiteToJSONTyped(json, false);
}
function PropertyWebsiteToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'branded_url': value['brandedUrl'],
        'unbranded_url': value['unbrandedUrl'],
    };
}
