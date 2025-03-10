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

import type { GroupCustomer } from './GroupCustomer';
import {
    GroupCustomerFromJSON,
    GroupCustomerToJSON
} from './GroupCustomer';

/**
 * A group.
 * @export
 * @interface GroupCustomerResource
 */
export interface GroupCustomerResource {
    /**
     * What was the state of the request?
     * @type {string}
     * @memberof GroupCustomerResource
     */
    status: string;
    /**
     * 
     * @type {GroupCustomer}
     * @memberof GroupCustomerResource
     */
    data?: GroupCustomer;
}

/**
 * Check if a given object implements the GroupCustomerResource interface.
 */
export function instanceOfGroupCustomerResource(value: object): value is GroupCustomerResource {
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function GroupCustomerResourceFromJSON(json: any): GroupCustomerResource {
    return GroupCustomerResourceFromJSONTyped(json, false);
}

export function GroupCustomerResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): GroupCustomerResource {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'],
        'data': json['data'] == null ? undefined : GroupCustomerFromJSON(json['data']),
    };
}

export function GroupCustomerResourceToJSON(json: any): GroupCustomerResource {
    return GroupCustomerResourceToJSONTyped(json, false);
}

export function GroupCustomerResourceToJSONTyped(value?: GroupCustomerResource | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status': value['status'],
        'data': GroupCustomerToJSON(value['data']),
    };
}

