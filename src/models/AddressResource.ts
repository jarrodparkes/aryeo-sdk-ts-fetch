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

import type { Address } from './Address';
import {
    AddressFromJSON,
    AddressToJSON
} from './Address';

/**
 * An address.
 * @export
 * @interface AddressResource
 */
export interface AddressResource {
    /**
     * What was the state of the request?
     * @type {string}
     * @memberof AddressResource
     */
    status: string;
    /**
     * 
     * @type {Address}
     * @memberof AddressResource
     */
    data?: Address;
}

/**
 * Check if a given object implements the AddressResource interface.
 */
export function instanceOfAddressResource(value: object): value is AddressResource {
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function AddressResourceFromJSON(json: any): AddressResource {
    return AddressResourceFromJSONTyped(json, false);
}

export function AddressResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressResource {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'],
        'data': json['data'] == null ? undefined : AddressFromJSON(json['data']),
    };
}

export function AddressResourceToJSON(json: any): AddressResource {
    return AddressResourceToJSONTyped(json, false);
}

export function AddressResourceToJSONTyped(value?: AddressResource | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status': value['status'],
        'data': AddressToJSON(value['data']),
    };
}

