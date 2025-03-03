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
exports.instanceOfGroupCollection = instanceOfGroupCollection;
exports.GroupCollectionFromJSON = GroupCollectionFromJSON;
exports.GroupCollectionFromJSONTyped = GroupCollectionFromJSONTyped;
exports.GroupCollectionToJSON = GroupCollectionToJSON;
exports.GroupCollectionToJSONTyped = GroupCollectionToJSONTyped;
const Group_1 = require("./Group");
const PaginationLinks_1 = require("./PaginationLinks");
const PaginationMeta_1 = require("./PaginationMeta");
/**
 * Check if a given object implements the GroupCollection interface.
 */
function instanceOfGroupCollection(value) {
    if (!('status' in value) || value['status'] === undefined)
        return false;
    return true;
}
function GroupCollectionFromJSON(json) {
    return GroupCollectionFromJSONTyped(json, false);
}
function GroupCollectionFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'status': json['status'],
        'data': json['data'] == null ? undefined : (json['data'].map(Group_1.GroupFromJSON)),
        'meta': json['meta'] == null ? undefined : (0, PaginationMeta_1.PaginationMetaFromJSON)(json['meta']),
        'links': json['links'] == null ? undefined : (0, PaginationLinks_1.PaginationLinksFromJSON)(json['links']),
    };
}
function GroupCollectionToJSON(json) {
    return GroupCollectionToJSONTyped(json, false);
}
function GroupCollectionToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'status': value['status'],
        'data': value['data'] == null ? undefined : (value['data'].map(Group_1.GroupToJSON)),
        'meta': (0, PaginationMeta_1.PaginationMetaToJSON)(value['meta']),
        'links': (0, PaginationLinks_1.PaginationLinksToJSON)(value['links']),
    };
}
