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
exports.instanceOfOrderFormSessionPostPayload = instanceOfOrderFormSessionPostPayload;
exports.OrderFormSessionPostPayloadFromJSON = OrderFormSessionPostPayloadFromJSON;
exports.OrderFormSessionPostPayloadFromJSONTyped = OrderFormSessionPostPayloadFromJSONTyped;
exports.OrderFormSessionPostPayloadToJSON = OrderFormSessionPostPayloadToJSON;
exports.OrderFormSessionPostPayloadToJSONTyped = OrderFormSessionPostPayloadToJSONTyped;
const OrderFormSessionPostPayloadAddressData_1 = require("./OrderFormSessionPostPayloadAddressData");
const OrderFormSessionPostPayloadCustomerData_1 = require("./OrderFormSessionPostPayloadCustomerData");
const OrderFormSessionPostPayloadStepVisibility_1 = require("./OrderFormSessionPostPayloadStepVisibility");
/**
 * Check if a given object implements the OrderFormSessionPostPayload interface.
 */
function instanceOfOrderFormSessionPostPayload(value) {
    if (!('orderFormId' in value) || value['orderFormId'] === undefined)
        return false;
    return true;
}
function OrderFormSessionPostPayloadFromJSON(json) {
    return OrderFormSessionPostPayloadFromJSONTyped(json, false);
}
function OrderFormSessionPostPayloadFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'orderFormId': json['order_form_id'],
        'addressId': json['address_id'] == null ? undefined : json['address_id'],
        'addressData': json['address_data'] == null ? undefined : (0, OrderFormSessionPostPayloadAddressData_1.OrderFormSessionPostPayloadAddressDataFromJSON)(json['address_data']),
        'customerId': json['customer_id'] == null ? undefined : json['customer_id'],
        'customerGroupId': json['customer_group_id'] == null ? undefined : json['customer_group_id'],
        'customerData': json['customer_data'] == null ? undefined : (0, OrderFormSessionPostPayloadCustomerData_1.OrderFormSessionPostPayloadCustomerDataFromJSON)(json['customer_data']),
        'couponIds': json['coupon_ids'] == null ? undefined : json['coupon_ids'],
        'stepVisibility': json['step_visibility'] == null ? undefined : (0, OrderFormSessionPostPayloadStepVisibility_1.OrderFormSessionPostPayloadStepVisibilityFromJSON)(json['step_visibility']),
        'successUrl': json['success_url'] == null ? undefined : json['success_url'],
    };
}
function OrderFormSessionPostPayloadToJSON(json) {
    return OrderFormSessionPostPayloadToJSONTyped(json, false);
}
function OrderFormSessionPostPayloadToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'order_form_id': value['orderFormId'],
        'address_id': value['addressId'],
        'address_data': (0, OrderFormSessionPostPayloadAddressData_1.OrderFormSessionPostPayloadAddressDataToJSON)(value['addressData']),
        'customer_id': value['customerId'],
        'customer_group_id': value['customerGroupId'],
        'customer_data': (0, OrderFormSessionPostPayloadCustomerData_1.OrderFormSessionPostPayloadCustomerDataToJSON)(value['customerData']),
        'coupon_ids': value['couponIds'],
        'step_visibility': (0, OrderFormSessionPostPayloadStepVisibility_1.OrderFormSessionPostPayloadStepVisibilityToJSON)(value['stepVisibility']),
        'success_url': value['successUrl'],
    };
}
