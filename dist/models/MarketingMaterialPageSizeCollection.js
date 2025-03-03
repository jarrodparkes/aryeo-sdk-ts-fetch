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
exports.instanceOfMarketingMaterialPageSizeCollection = instanceOfMarketingMaterialPageSizeCollection;
exports.MarketingMaterialPageSizeCollectionFromJSON = MarketingMaterialPageSizeCollectionFromJSON;
exports.MarketingMaterialPageSizeCollectionFromJSONTyped = MarketingMaterialPageSizeCollectionFromJSONTyped;
exports.MarketingMaterialPageSizeCollectionToJSON = MarketingMaterialPageSizeCollectionToJSON;
exports.MarketingMaterialPageSizeCollectionToJSONTyped = MarketingMaterialPageSizeCollectionToJSONTyped;
const MarketingMaterialPageSize_1 = require("./MarketingMaterialPageSize");
const PaginationLinks_1 = require("./PaginationLinks");
const PaginationMeta_1 = require("./PaginationMeta");
/**
 * Check if a given object implements the MarketingMaterialPageSizeCollection interface.
 */
function instanceOfMarketingMaterialPageSizeCollection(value) {
    if (!('status' in value) || value['status'] === undefined)
        return false;
    return true;
}
function MarketingMaterialPageSizeCollectionFromJSON(json) {
    return MarketingMaterialPageSizeCollectionFromJSONTyped(json, false);
}
function MarketingMaterialPageSizeCollectionFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'status': json['status'],
        'data': json['data'] == null ? undefined : (json['data'].map(MarketingMaterialPageSize_1.MarketingMaterialPageSizeFromJSON)),
        'meta': json['meta'] == null ? undefined : (0, PaginationMeta_1.PaginationMetaFromJSON)(json['meta']),
        'links': json['links'] == null ? undefined : (0, PaginationLinks_1.PaginationLinksFromJSON)(json['links']),
    };
}
function MarketingMaterialPageSizeCollectionToJSON(json) {
    return MarketingMaterialPageSizeCollectionToJSONTyped(json, false);
}
function MarketingMaterialPageSizeCollectionToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'status': value['status'],
        'data': value['data'] == null ? undefined : (value['data'].map(MarketingMaterialPageSize_1.MarketingMaterialPageSizeToJSON)),
        'meta': (0, PaginationMeta_1.PaginationMetaToJSON)(value['meta']),
        'links': (0, PaginationLinks_1.PaginationLinksToJSON)(value['links']),
    };
}
