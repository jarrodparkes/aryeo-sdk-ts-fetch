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
 * A conflict error returned by the API.
 * @export
 * @interface ApiError409
 */
export interface ApiError409 {
    /**
     * What was the state of the request?
     * @type {string}
     * @memberof ApiError409
     */
    status: string;
    /**
     * The error message.
     * @type {string}
     * @memberof ApiError409
     */
    message: string;
    /**
     * A numeric code corresponding to the error.
     * @type {number}
     * @memberof ApiError409
     */
    code?: number | null;
}

/**
 * Check if a given object implements the ApiError409 interface.
 */
export function instanceOfApiError409(value: object): value is ApiError409 {
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('message' in value) || value['message'] === undefined) return false;
    return true;
}

export function ApiError409FromJSON(json: any): ApiError409 {
    return ApiError409FromJSONTyped(json, false);
}

export function ApiError409FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiError409 {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'],
        'message': json['message'],
        'code': json['code'] == null ? undefined : json['code'],
    };
}

export function ApiError409ToJSON(json: any): ApiError409 {
    return ApiError409ToJSONTyped(json, false);
}

export function ApiError409ToJSONTyped(value?: ApiError409 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status': value['status'],
        'message': value['message'],
        'code': value['code'],
    };
}

