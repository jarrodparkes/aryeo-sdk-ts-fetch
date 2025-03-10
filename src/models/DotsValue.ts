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

/**
 * The number of appointments by status.
 * @export
 * @interface DotsValue
 */
export interface DotsValue {
    /**
     * The number of scheduled appointments on this date.
     * @type {number}
     * @memberof DotsValue
     */
    scheduled?: number;
    /**
     * The number of unscheduled appointments on this date.
     * @type {number}
     * @memberof DotsValue
     */
    unscheduled?: number;
    /**
     * The number of cancelled appointments on this date.
     * @type {number}
     * @memberof DotsValue
     */
    cancelled?: number;
}

/**
 * Check if a given object implements the DotsValue interface.
 */
export function instanceOfDotsValue(value: object): value is DotsValue {
    return true;
}

export function DotsValueFromJSON(json: any): DotsValue {
    return DotsValueFromJSONTyped(json, false);
}

export function DotsValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): DotsValue {
    if (json == null) {
        return json;
    }
    return {
        
        'scheduled': json['scheduled'] == null ? undefined : json['scheduled'],
        'unscheduled': json['unscheduled'] == null ? undefined : json['unscheduled'],
        'cancelled': json['cancelled'] == null ? undefined : json['cancelled'],
    };
}

export function DotsValueToJSON(json: any): DotsValue {
    return DotsValueToJSONTyped(json, false);
}

export function DotsValueToJSONTyped(value?: DotsValue | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'scheduled': value['scheduled'],
        'unscheduled': value['unscheduled'],
        'cancelled': value['cancelled'],
    };
}

