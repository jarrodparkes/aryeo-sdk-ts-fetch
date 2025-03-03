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
exports.instanceOfMarketingMaterialTemplateResource = instanceOfMarketingMaterialTemplateResource;
exports.MarketingMaterialTemplateResourceFromJSON = MarketingMaterialTemplateResourceFromJSON;
exports.MarketingMaterialTemplateResourceFromJSONTyped = MarketingMaterialTemplateResourceFromJSONTyped;
exports.MarketingMaterialTemplateResourceToJSON = MarketingMaterialTemplateResourceToJSON;
exports.MarketingMaterialTemplateResourceToJSONTyped = MarketingMaterialTemplateResourceToJSONTyped;
const MarketingMaterialTemplate_1 = require("./MarketingMaterialTemplate");
/**
 * Check if a given object implements the MarketingMaterialTemplateResource interface.
 */
function instanceOfMarketingMaterialTemplateResource(value) {
    if (!('status' in value) || value['status'] === undefined)
        return false;
    return true;
}
function MarketingMaterialTemplateResourceFromJSON(json) {
    return MarketingMaterialTemplateResourceFromJSONTyped(json, false);
}
function MarketingMaterialTemplateResourceFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'status': json['status'],
        'data': json['data'] == null ? undefined : (0, MarketingMaterialTemplate_1.MarketingMaterialTemplateFromJSON)(json['data']),
    };
}
function MarketingMaterialTemplateResourceToJSON(json) {
    return MarketingMaterialTemplateResourceToJSONTyped(json, false);
}
function MarketingMaterialTemplateResourceToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'status': value['status'],
        'data': (0, MarketingMaterialTemplate_1.MarketingMaterialTemplateToJSON)(value['data']),
    };
}
