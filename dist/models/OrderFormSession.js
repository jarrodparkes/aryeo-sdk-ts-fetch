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
exports.instanceOfOrderFormSession = instanceOfOrderFormSession;
exports.OrderFormSessionFromJSON = OrderFormSessionFromJSON;
exports.OrderFormSessionFromJSONTyped = OrderFormSessionFromJSONTyped;
exports.OrderFormSessionToJSON = OrderFormSessionToJSON;
exports.OrderFormSessionToJSONTyped = OrderFormSessionToJSONTyped;
const Address_1 = require("./Address");
const Coupon_1 = require("./Coupon");
const Group_1 = require("./Group");
const OrderForm_1 = require("./OrderForm");
const OrderFormSessionStepVisibility_1 = require("./OrderFormSessionStepVisibility");
/**
 * Check if a given object implements the OrderFormSession interface.
 */
function instanceOfOrderFormSession(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    return true;
}
function OrderFormSessionFromJSON(json) {
    return OrderFormSessionFromJSONTyped(json, false);
}
function OrderFormSessionFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'orderForm': json['order_form'] == null ? undefined : (0, OrderForm_1.OrderFormFromJSON)(json['order_form']),
        'address': json['address'] == null ? undefined : (0, Address_1.AddressFromJSON)(json['address']),
        'customer': json['customer'] == null ? undefined : (0, Group_1.GroupFromJSON)(json['customer']),
        'coupons': json['coupons'] == null ? undefined : (json['coupons'].map(Coupon_1.CouponFromJSON)),
        'showHeader': json['show_header'] == null ? undefined : json['show_header'],
        'stepVisibility': json['step_visibility'] == null ? undefined : (0, OrderFormSessionStepVisibility_1.OrderFormSessionStepVisibilityFromJSON)(json['step_visibility']),
        'successUrl': json['success_url'] == null ? undefined : json['success_url'],
        'url': json['url'] == null ? undefined : json['url'],
    };
}
function OrderFormSessionToJSON(json) {
    return OrderFormSessionToJSONTyped(json, false);
}
function OrderFormSessionToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'order_form': (0, OrderForm_1.OrderFormToJSON)(value['orderForm']),
        'address': (0, Address_1.AddressToJSON)(value['address']),
        'customer': (0, Group_1.GroupToJSON)(value['customer']),
        'coupons': value['coupons'] == null ? undefined : (value['coupons'].map(Coupon_1.CouponToJSON)),
        'show_header': value['showHeader'],
        'step_visibility': (0, OrderFormSessionStepVisibility_1.OrderFormSessionStepVisibilityToJSON)(value['stepVisibility']),
        'success_url': value['successUrl'],
        'url': value['url'],
    };
}
