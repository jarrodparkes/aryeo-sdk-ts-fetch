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
exports.instanceOfOrderFormCollection = instanceOfOrderFormCollection;
exports.OrderFormCollectionFromJSON = OrderFormCollectionFromJSON;
exports.OrderFormCollectionFromJSONTyped = OrderFormCollectionFromJSONTyped;
exports.OrderFormCollectionToJSON = OrderFormCollectionToJSON;
exports.OrderFormCollectionToJSONTyped = OrderFormCollectionToJSONTyped;
const OrderForm_1 = require("./OrderForm");
const PaginationLinks_1 = require("./PaginationLinks");
const PaginationMeta_1 = require("./PaginationMeta");
/**
 * Check if a given object implements the OrderFormCollection interface.
 */
function instanceOfOrderFormCollection(value) {
    if (!('status' in value) || value['status'] === undefined)
        return false;
    return true;
}
function OrderFormCollectionFromJSON(json) {
    return OrderFormCollectionFromJSONTyped(json, false);
}
function OrderFormCollectionFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'status': json['status'],
        'data': json['data'] == null ? undefined : (json['data'].map(OrderForm_1.OrderFormFromJSON)),
        'meta': json['meta'] == null ? undefined : (0, PaginationMeta_1.PaginationMetaFromJSON)(json['meta']),
        'links': json['links'] == null ? undefined : (0, PaginationLinks_1.PaginationLinksFromJSON)(json['links']),
    };
}
function OrderFormCollectionToJSON(json) {
    return OrderFormCollectionToJSONTyped(json, false);
}
function OrderFormCollectionToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'status': value['status'],
        'data': value['data'] == null ? undefined : (value['data'].map(OrderForm_1.OrderFormToJSON)),
        'meta': (0, PaginationMeta_1.PaginationMetaToJSON)(value['meta']),
        'links': (0, PaginationLinks_1.PaginationLinksToJSON)(value['links']),
    };
}
