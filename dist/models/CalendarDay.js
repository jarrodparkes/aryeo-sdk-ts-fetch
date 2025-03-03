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
exports.instanceOfCalendarDay = instanceOfCalendarDay;
exports.CalendarDayFromJSON = CalendarDayFromJSON;
exports.CalendarDayFromJSONTyped = CalendarDayFromJSONTyped;
exports.CalendarDayToJSON = CalendarDayToJSON;
exports.CalendarDayToJSONTyped = CalendarDayToJSONTyped;
/**
 * Check if a given object implements the CalendarDay interface.
 */
function instanceOfCalendarDay(value) {
    if (!('date' in value) || value['date'] === undefined)
        return false;
    if (!('isAvailable' in value) || value['isAvailable'] === undefined)
        return false;
    return true;
}
function CalendarDayFromJSON(json) {
    return CalendarDayFromJSONTyped(json, false);
}
function CalendarDayFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'date': json['date'],
        'isAvailable': json['is_available'],
    };
}
function CalendarDayToJSON(json) {
    return CalendarDayToJSONTyped(json, false);
}
function CalendarDayToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'date': value['date'],
        'is_available': value['isAvailable'],
    };
}
