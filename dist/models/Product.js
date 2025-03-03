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
exports.ProductTypeEnum = void 0;
exports.instanceOfProduct = instanceOfProduct;
exports.ProductFromJSON = ProductFromJSON;
exports.ProductFromJSONTyped = ProductFromJSONTyped;
exports.ProductToJSON = ProductToJSON;
exports.ProductToJSONTyped = ProductToJSONTyped;
const ProductCategory_1 = require("./ProductCategory");
const ProductVariant_1 = require("./ProductVariant");
/**
 * @export
 */
exports.ProductTypeEnum = {
    Main: 'MAIN',
    Addon: 'ADDON'
};
/**
 * Check if a given object implements the Product interface.
 */
function instanceOfProduct(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('title' in value) || value['title'] === undefined)
        return false;
    if (!('type' in value) || value['type'] === undefined)
        return false;
    return true;
}
function ProductFromJSON(json) {
    return ProductFromJSONTyped(json, false);
}
function ProductFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'object': json['object'] == null ? undefined : json['object'],
        'id': json['id'],
        'title': json['title'],
        'description': json['description'] == null ? undefined : json['description'],
        'active': json['active'] == null ? undefined : json['active'],
        'type': json['type'],
        'variants': json['variants'] == null ? undefined : (json['variants'].map(ProductVariant_1.ProductVariantFromJSON)),
        'categories': json['categories'] == null ? undefined : (json['categories'].map(ProductCategory_1.ProductCategoryFromJSON)),
    };
}
function ProductToJSON(json) {
    return ProductToJSONTyped(json, false);
}
function ProductToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'object': value['object'],
        'id': value['id'],
        'title': value['title'],
        'description': value['description'],
        'active': value['active'],
        'type': value['type'],
        'variants': value['variants'] == null ? undefined : (value['variants'].map(ProductVariant_1.ProductVariantToJSON)),
        'categories': value['categories'] == null ? undefined : (value['categories'].map(ProductCategory_1.ProductCategoryToJSON)),
    };
}
