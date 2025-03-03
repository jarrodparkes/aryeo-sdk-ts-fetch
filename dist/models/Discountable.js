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
exports.instanceOfDiscountable = instanceOfDiscountable;
exports.DiscountableFromJSON = DiscountableFromJSON;
exports.DiscountableFromJSONTyped = DiscountableFromJSONTyped;
exports.DiscountableToJSON = DiscountableToJSON;
exports.DiscountableToJSONTyped = DiscountableToJSONTyped;
/**
 * Check if a given object implements the Discountable interface.
 */
function instanceOfDiscountable(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    return true;
}
function DiscountableFromJSON(json) {
    return DiscountableFromJSONTyped(json, false);
}
function DiscountableFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'object': json['object'] == null ? undefined : json['object'],
        'id': json['id'],
        'discountable': json['discountable'] == null ? undefined : json['discountable'],
    };
}
function DiscountableToJSON(json) {
    return DiscountableToJSONTyped(json, false);
}
function DiscountableToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'object': value['object'],
        'id': value['id'],
        'discountable': value['discountable'],
    };
}
