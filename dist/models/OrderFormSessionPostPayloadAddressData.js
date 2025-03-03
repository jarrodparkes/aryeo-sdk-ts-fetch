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
exports.instanceOfOrderFormSessionPostPayloadAddressData = instanceOfOrderFormSessionPostPayloadAddressData;
exports.OrderFormSessionPostPayloadAddressDataFromJSON = OrderFormSessionPostPayloadAddressDataFromJSON;
exports.OrderFormSessionPostPayloadAddressDataFromJSONTyped = OrderFormSessionPostPayloadAddressDataFromJSONTyped;
exports.OrderFormSessionPostPayloadAddressDataToJSON = OrderFormSessionPostPayloadAddressDataToJSON;
exports.OrderFormSessionPostPayloadAddressDataToJSONTyped = OrderFormSessionPostPayloadAddressDataToJSONTyped;
/**
 * Check if a given object implements the OrderFormSessionPostPayloadAddressData interface.
 */
function instanceOfOrderFormSessionPostPayloadAddressData(value) {
    return true;
}
function OrderFormSessionPostPayloadAddressDataFromJSON(json) {
    return OrderFormSessionPostPayloadAddressDataFromJSONTyped(json, false);
}
function OrderFormSessionPostPayloadAddressDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'latitude': json['latitude'] == null ? undefined : json['latitude'],
        'longitude': json['longitude'] == null ? undefined : json['longitude'],
        'streetNumber': json['street_number'] == null ? undefined : json['street_number'],
        'streetName': json['street_name'] == null ? undefined : json['street_name'],
        'unitNumber': json['unit_number'] == null ? undefined : json['unit_number'],
        'postalCode': json['postal_code'] == null ? undefined : json['postal_code'],
        'city': json['city'] == null ? undefined : json['city'],
        'cityRegion': json['city_region'] == null ? undefined : json['city_region'],
        'countyOrParish': json['county_or_parish'] == null ? undefined : json['county_or_parish'],
        'stateOrProvince': json['state_or_province'] == null ? undefined : json['state_or_province'],
        'stateOrProvinceRegion': json['state_or_province_region'] == null ? undefined : json['state_or_province_region'],
        'country': json['country'] == null ? undefined : json['country'],
        'countryRegion': json['country_region'] == null ? undefined : json['country_region'],
    };
}
function OrderFormSessionPostPayloadAddressDataToJSON(json) {
    return OrderFormSessionPostPayloadAddressDataToJSONTyped(json, false);
}
function OrderFormSessionPostPayloadAddressDataToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'latitude': value['latitude'],
        'longitude': value['longitude'],
        'street_number': value['streetNumber'],
        'street_name': value['streetName'],
        'unit_number': value['unitNumber'],
        'postal_code': value['postalCode'],
        'city': value['city'],
        'city_region': value['cityRegion'],
        'county_or_parish': value['countyOrParish'],
        'state_or_province': value['stateOrProvince'],
        'state_or_province_region': value['stateOrProvinceRegion'],
        'country': value['country'],
        'country_region': value['countryRegion'],
    };
}
