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
exports.instanceOfUserCollection = instanceOfUserCollection;
exports.UserCollectionFromJSON = UserCollectionFromJSON;
exports.UserCollectionFromJSONTyped = UserCollectionFromJSONTyped;
exports.UserCollectionToJSON = UserCollectionToJSON;
exports.UserCollectionToJSONTyped = UserCollectionToJSONTyped;
const PaginationLinks_1 = require("./PaginationLinks");
const PaginationMeta_1 = require("./PaginationMeta");
const User_1 = require("./User");
/**
 * Check if a given object implements the UserCollection interface.
 */
function instanceOfUserCollection(value) {
    if (!('status' in value) || value['status'] === undefined)
        return false;
    return true;
}
function UserCollectionFromJSON(json) {
    return UserCollectionFromJSONTyped(json, false);
}
function UserCollectionFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'status': json['status'],
        'data': json['data'] == null ? undefined : (json['data'].map(User_1.UserFromJSON)),
        'meta': json['meta'] == null ? undefined : (0, PaginationMeta_1.PaginationMetaFromJSON)(json['meta']),
        'links': json['links'] == null ? undefined : (0, PaginationLinks_1.PaginationLinksFromJSON)(json['links']),
    };
}
function UserCollectionToJSON(json) {
    return UserCollectionToJSONTyped(json, false);
}
function UserCollectionToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'status': value['status'],
        'data': value['data'] == null ? undefined : (value['data'].map(User_1.UserToJSON)),
        'meta': (0, PaginationMeta_1.PaginationMetaToJSON)(value['meta']),
        'links': (0, PaginationLinks_1.PaginationLinksToJSON)(value['links']),
    };
}
