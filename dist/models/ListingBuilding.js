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
exports.instanceOfListingBuilding = instanceOfListingBuilding;
exports.ListingBuildingFromJSON = ListingBuildingFromJSON;
exports.ListingBuildingFromJSONTyped = ListingBuildingFromJSONTyped;
exports.ListingBuildingToJSON = ListingBuildingToJSON;
exports.ListingBuildingToJSONTyped = ListingBuildingToJSONTyped;
/**
 * Check if a given object implements the ListingBuilding interface.
 */
function instanceOfListingBuilding(value) {
    return true;
}
function ListingBuildingFromJSON(json) {
    return ListingBuildingFromJSONTyped(json, false);
}
function ListingBuildingFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'bedrooms': json['bedrooms'] == null ? undefined : json['bedrooms'],
        'bathrooms': json['bathrooms'] == null ? undefined : json['bathrooms'],
        'squareFeet': json['square_feet'] == null ? undefined : json['square_feet'],
        'yearBuilt': json['year_built'] == null ? undefined : json['year_built'],
        'bedroomsNumber': json['bedrooms_number'] == null ? undefined : json['bedrooms_number'],
    };
}
function ListingBuildingToJSON(json) {
    return ListingBuildingToJSONTyped(json, false);
}
function ListingBuildingToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'bedrooms': value['bedrooms'],
        'bathrooms': value['bathrooms'],
        'square_feet': value['squareFeet'],
        'year_built': value['yearBuilt'],
        'bedrooms_number': value['bedroomsNumber'],
    };
}
