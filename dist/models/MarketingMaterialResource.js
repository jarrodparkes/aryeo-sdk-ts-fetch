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
exports.instanceOfMarketingMaterialResource = instanceOfMarketingMaterialResource;
exports.MarketingMaterialResourceFromJSON = MarketingMaterialResourceFromJSON;
exports.MarketingMaterialResourceFromJSONTyped = MarketingMaterialResourceFromJSONTyped;
exports.MarketingMaterialResourceToJSON = MarketingMaterialResourceToJSON;
exports.MarketingMaterialResourceToJSONTyped = MarketingMaterialResourceToJSONTyped;
const MarketingMaterial_1 = require("./MarketingMaterial");
/**
 * Check if a given object implements the MarketingMaterialResource interface.
 */
function instanceOfMarketingMaterialResource(value) {
    if (!('status' in value) || value['status'] === undefined)
        return false;
    return true;
}
function MarketingMaterialResourceFromJSON(json) {
    return MarketingMaterialResourceFromJSONTyped(json, false);
}
function MarketingMaterialResourceFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'status': json['status'],
        'data': json['data'] == null ? undefined : (0, MarketingMaterial_1.MarketingMaterialFromJSON)(json['data']),
    };
}
function MarketingMaterialResourceToJSON(json) {
    return MarketingMaterialResourceToJSONTyped(json, false);
}
function MarketingMaterialResourceToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'status': value['status'],
        'data': (0, MarketingMaterial_1.MarketingMaterialToJSON)(value['data']),
    };
}
