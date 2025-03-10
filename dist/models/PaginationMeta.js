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
exports.instanceOfPaginationMeta = instanceOfPaginationMeta;
exports.PaginationMetaFromJSON = PaginationMetaFromJSON;
exports.PaginationMetaFromJSONTyped = PaginationMetaFromJSONTyped;
exports.PaginationMetaToJSON = PaginationMetaToJSON;
exports.PaginationMetaToJSONTyped = PaginationMetaToJSONTyped;
/**
 * Check if a given object implements the PaginationMeta interface.
 */
function instanceOfPaginationMeta(value) {
    if (!('total' in value) || value['total'] === undefined)
        return false;
    if (!('perPage' in value) || value['perPage'] === undefined)
        return false;
    if (!('currentPage' in value) || value['currentPage'] === undefined)
        return false;
    if (!('lastPage' in value) || value['lastPage'] === undefined)
        return false;
    if (!('path' in value) || value['path'] === undefined)
        return false;
    return true;
}
function PaginationMetaFromJSON(json) {
    return PaginationMetaFromJSONTyped(json, false);
}
function PaginationMetaFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'total': json['total'],
        'perPage': json['per_page'],
        'currentPage': json['current_page'],
        'lastPage': json['last_page'],
        'from': json['from'] == null ? undefined : json['from'],
        'to': json['to'] == null ? undefined : json['to'],
        'path': json['path'],
    };
}
function PaginationMetaToJSON(json) {
    return PaginationMetaToJSONTyped(json, false);
}
function PaginationMetaToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'total': value['total'],
        'per_page': value['perPage'],
        'current_page': value['currentPage'],
        'last_page': value['lastPage'],
        'from': value['from'],
        'to': value['to'],
        'path': value['path'],
    };
}
