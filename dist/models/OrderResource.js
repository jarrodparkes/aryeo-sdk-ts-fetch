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
exports.instanceOfOrderResource = instanceOfOrderResource;
exports.OrderResourceFromJSON = OrderResourceFromJSON;
exports.OrderResourceFromJSONTyped = OrderResourceFromJSONTyped;
exports.OrderResourceToJSON = OrderResourceToJSON;
exports.OrderResourceToJSONTyped = OrderResourceToJSONTyped;
const Order_1 = require("./Order");
/**
 * Check if a given object implements the OrderResource interface.
 */
function instanceOfOrderResource(value) {
    if (!('status' in value) || value['status'] === undefined)
        return false;
    return true;
}
function OrderResourceFromJSON(json) {
    return OrderResourceFromJSONTyped(json, false);
}
function OrderResourceFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'status': json['status'],
        'data': json['data'] == null ? undefined : (0, Order_1.OrderFromJSON)(json['data']),
    };
}
function OrderResourceToJSON(json) {
    return OrderResourceToJSONTyped(json, false);
}
function OrderResourceToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'status': value['status'],
        'data': (0, Order_1.OrderToJSON)(value['data']),
    };
}
