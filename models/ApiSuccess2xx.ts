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

import { mapValues } from '../runtime';
/**
 * A generic success response returned by the API.
 * @export
 * @interface ApiSuccess2xx
 */
export interface ApiSuccess2xx {
    /**
     * What was the state of the request?
     * @type {string}
     * @memberof ApiSuccess2xx
     */
    status: string;
}

/**
 * Check if a given object implements the ApiSuccess2xx interface.
 */
export function instanceOfApiSuccess2xx(value: object): value is ApiSuccess2xx {
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function ApiSuccess2xxFromJSON(json: any): ApiSuccess2xx {
    return ApiSuccess2xxFromJSONTyped(json, false);
}

export function ApiSuccess2xxFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiSuccess2xx {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'],
    };
}

export function ApiSuccess2xxToJSON(json: any): ApiSuccess2xx {
    return ApiSuccess2xxToJSONTyped(json, false);
}

export function ApiSuccess2xxToJSONTyped(value?: ApiSuccess2xx | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status': value['status'],
    };
}

