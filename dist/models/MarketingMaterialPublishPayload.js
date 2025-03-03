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
exports.instanceOfMarketingMaterialPublishPayload = instanceOfMarketingMaterialPublishPayload;
exports.MarketingMaterialPublishPayloadFromJSON = MarketingMaterialPublishPayloadFromJSON;
exports.MarketingMaterialPublishPayloadFromJSONTyped = MarketingMaterialPublishPayloadFromJSONTyped;
exports.MarketingMaterialPublishPayloadToJSON = MarketingMaterialPublishPayloadToJSON;
exports.MarketingMaterialPublishPayloadToJSONTyped = MarketingMaterialPublishPayloadToJSONTyped;
/**
 * Check if a given object implements the MarketingMaterialPublishPayload interface.
 */
function instanceOfMarketingMaterialPublishPayload(value) {
    return true;
}
function MarketingMaterialPublishPayloadFromJSON(json) {
    return MarketingMaterialPublishPayloadFromJSONTyped(json, false);
}
function MarketingMaterialPublishPayloadFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'polotnoJson': json['polotno_json'] == null ? undefined : json['polotno_json'],
    };
}
function MarketingMaterialPublishPayloadToJSON(json) {
    return MarketingMaterialPublishPayloadToJSONTyped(json, false);
}
function MarketingMaterialPublishPayloadToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'polotno_json': value['polotnoJson'],
    };
}
