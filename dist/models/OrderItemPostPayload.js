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
exports.instanceOfOrderItemPostPayload = instanceOfOrderItemPostPayload;
exports.OrderItemPostPayloadFromJSON = OrderItemPostPayloadFromJSON;
exports.OrderItemPostPayloadFromJSONTyped = OrderItemPostPayloadFromJSONTyped;
exports.OrderItemPostPayloadToJSON = OrderItemPostPayloadToJSON;
exports.OrderItemPostPayloadToJSONTyped = OrderItemPostPayloadToJSONTyped;
/**
 * Check if a given object implements the OrderItemPostPayload interface.
 */
function instanceOfOrderItemPostPayload(value) {
    if (!('orderId' in value) || value['orderId'] === undefined)
        return false;
    return true;
}
function OrderItemPostPayloadFromJSON(json) {
    return OrderItemPostPayloadFromJSONTyped(json, false);
}
function OrderItemPostPayloadFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'orderId': json['order_id'],
        'productVariantId': json['product_variant_id'] == null ? undefined : json['product_variant_id'],
        'quantity': json['quantity'] == null ? undefined : json['quantity'],
        'unitPriceAmount': json['unit_price_amount'] == null ? undefined : json['unit_price_amount'],
        'title': json['title'] == null ? undefined : json['title'],
        'subtitle': json['subtitle'] == null ? undefined : json['subtitle'],
        'description': json['description'] == null ? undefined : json['description'],
        'appointmentId': json['appointment_id'] == null ? undefined : json['appointment_id'],
        'assignedCompanyTeamMemberId': json['assigned_company_team_member_id'] == null ? undefined : json['assigned_company_team_member_id'],
    };
}
function OrderItemPostPayloadToJSON(json) {
    return OrderItemPostPayloadToJSONTyped(json, false);
}
function OrderItemPostPayloadToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'order_id': value['orderId'],
        'product_variant_id': value['productVariantId'],
        'quantity': value['quantity'],
        'unit_price_amount': value['unitPriceAmount'],
        'title': value['title'],
        'subtitle': value['subtitle'],
        'description': value['description'],
        'appointment_id': value['appointmentId'],
        'assigned_company_team_member_id': value['assignedCompanyTeamMemberId'],
    };
}
