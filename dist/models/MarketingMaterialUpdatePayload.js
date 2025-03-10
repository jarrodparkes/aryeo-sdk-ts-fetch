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
exports.instanceOfMarketingMaterialUpdatePayload = instanceOfMarketingMaterialUpdatePayload;
exports.MarketingMaterialUpdatePayloadFromJSON = MarketingMaterialUpdatePayloadFromJSON;
exports.MarketingMaterialUpdatePayloadFromJSONTyped = MarketingMaterialUpdatePayloadFromJSONTyped;
exports.MarketingMaterialUpdatePayloadToJSON = MarketingMaterialUpdatePayloadToJSON;
exports.MarketingMaterialUpdatePayloadToJSONTyped = MarketingMaterialUpdatePayloadToJSONTyped;
/**
 * Check if a given object implements the MarketingMaterialUpdatePayload interface.
 */
function instanceOfMarketingMaterialUpdatePayload(value) {
    return true;
}
function MarketingMaterialUpdatePayloadFromJSON(json) {
    return MarketingMaterialUpdatePayloadFromJSONTyped(json, false);
}
function MarketingMaterialUpdatePayloadFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'name': json['name'] == null ? undefined : json['name'],
        'polotnoJson': json['polotno_json'] == null ? undefined : json['polotno_json'],
        'appVersion': json['app_version'] == null ? undefined : json['app_version'],
    };
}
function MarketingMaterialUpdatePayloadToJSON(json) {
    return MarketingMaterialUpdatePayloadToJSONTyped(json, false);
}
function MarketingMaterialUpdatePayloadToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'polotno_json': value['polotnoJson'],
        'app_version': value['appVersion'],
    };
}
