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
exports.GroupCustomerAutomatedUserAssignmentStrategyEnum = exports.GroupCustomerAvailabilityStyleEnum = exports.GroupCustomerCurrencyEnum = exports.GroupCustomerTypeEnum = void 0;
exports.instanceOfGroupCustomer = instanceOfGroupCustomer;
exports.GroupCustomerFromJSON = GroupCustomerFromJSON;
exports.GroupCustomerFromJSONTyped = GroupCustomerFromJSONTyped;
exports.GroupCustomerToJSON = GroupCustomerToJSON;
exports.GroupCustomerToJSONTyped = GroupCustomerToJSONTyped;
const OrderForm_1 = require("./OrderForm");
const User_1 = require("./User");
/**
 * @export
 */
exports.GroupCustomerTypeEnum = {
    Creator: 'CREATOR',
    Agent: 'AGENT',
    Brokerage: 'BROKERAGE'
};
/**
 * @export
 */
exports.GroupCustomerCurrencyEnum = {
    Usd: 'USD',
    Cad: 'CAD',
    Gbp: 'GBP',
    Chf: 'CHF',
    Eur: 'EUR',
    Aud: 'AUD',
    Nzd: 'NZD',
    Zar: 'ZAR',
    Dkk: 'DKK'
};
/**
 * @export
 */
exports.GroupCustomerAvailabilityStyleEnum = {
    Time: 'TIME',
    TimeOfDay: 'TIME_OF_DAY',
    Legacy: 'LEGACY'
};
/**
 * @export
 */
exports.GroupCustomerAutomatedUserAssignmentStrategyEnum = {
    Recommended: 'RECOMMENDED',
    HoursPriority: 'HOURS_PRIORITY',
    Distance: 'DISTANCE',
    RoundRobin: 'ROUND_ROBIN',
    PriorityList: 'PRIORITY_LIST'
};
/**
 * Check if a given object implements the GroupCustomer interface.
 */
function instanceOfGroupCustomer(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('type' in value) || value['type'] === undefined)
        return false;
    if (!('name' in value) || value['name'] === undefined)
        return false;
    return true;
}
function GroupCustomerFromJSON(json) {
    return GroupCustomerFromJSONTyped(json, false);
}
function GroupCustomerFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'object': json['object'] == null ? undefined : json['object'],
        'id': json['id'],
        'type': json['type'],
        'name': json['name'],
        'email': json['email'] == null ? undefined : json['email'],
        'phone': json['phone'] == null ? undefined : json['phone'],
        'websiteUrl': json['website_url'] == null ? undefined : json['website_url'],
        'logoUrl': json['logo_url'] == null ? undefined : json['logo_url'],
        'officeName': json['office_name'] == null ? undefined : json['office_name'],
        'licenseNumber': json['license_number'] == null ? undefined : json['license_number'],
        'timezone': json['timezone'] == null ? undefined : json['timezone'],
        'currency': json['currency'] == null ? undefined : json['currency'],
        'slug': json['slug'] == null ? undefined : json['slug'],
        'orderPageUrl': json['order_page_url'] == null ? undefined : json['order_page_url'],
        'orderPageBackgroundColor': json['order_page_background_color'] == null ? undefined : json['order_page_background_color'],
        'defaultOrderForm': json['default_order_form'] == null ? undefined : (0, OrderForm_1.OrderFormFromJSON)(json['default_order_form']),
        'useTerritoryAwareness': json['use_territory_awareness'] == null ? undefined : json['use_territory_awareness'],
        'availabilityStyle': json['availability_style'] == null ? undefined : json['availability_style'],
        'slotIntervalMinutes': json['slot_interval_minutes'] == null ? undefined : json['slot_interval_minutes'],
        'useAutomatedUserAssignment': json['use_automated_user_assignment'] == null ? undefined : json['use_automated_user_assignment'],
        'automatedUserAssignmentStrategy': json['automated_user_assignment_strategy'] == null ? undefined : json['automated_user_assignment_strategy'],
        'showUserNames': json['show_user_names'] == null ? undefined : json['show_user_names'],
        'useInstantAppointmentScheduling': json['use_instant_appointment_scheduling'] == null ? undefined : json['use_instant_appointment_scheduling'],
        'orderForms': json['order_forms'] == null ? undefined : (json['order_forms'].map(OrderForm_1.OrderFormFromJSON)),
        'users': json['users'] == null ? undefined : (json['users'].map(User_1.UserFromJSON)),
    };
}
function GroupCustomerToJSON(json) {
    return GroupCustomerToJSONTyped(json, false);
}
function GroupCustomerToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'object': value['object'],
        'id': value['id'],
        'type': value['type'],
        'name': value['name'],
        'email': value['email'],
        'phone': value['phone'],
        'website_url': value['websiteUrl'],
        'logo_url': value['logoUrl'],
        'office_name': value['officeName'],
        'license_number': value['licenseNumber'],
        'timezone': value['timezone'],
        'currency': value['currency'],
        'slug': value['slug'],
        'order_page_url': value['orderPageUrl'],
        'order_page_background_color': value['orderPageBackgroundColor'],
        'default_order_form': (0, OrderForm_1.OrderFormToJSON)(value['defaultOrderForm']),
        'use_territory_awareness': value['useTerritoryAwareness'],
        'availability_style': value['availabilityStyle'],
        'slot_interval_minutes': value['slotIntervalMinutes'],
        'use_automated_user_assignment': value['useAutomatedUserAssignment'],
        'automated_user_assignment_strategy': value['automatedUserAssignmentStrategy'],
        'show_user_names': value['showUserNames'],
        'use_instant_appointment_scheduling': value['useInstantAppointmentScheduling'],
        'order_forms': value['orderForms'] == null ? undefined : (value['orderForms'].map(OrderForm_1.OrderFormToJSON)),
        'users': value['users'] == null ? undefined : (value['users'].map(User_1.UserToJSON)),
    };
}
