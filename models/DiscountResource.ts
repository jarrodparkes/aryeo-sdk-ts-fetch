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
import type { Discount } from './Discount';
import {
    DiscountFromJSON,
    DiscountFromJSONTyped,
    DiscountToJSON,
    DiscountToJSONTyped,
} from './Discount';

/**
 * A discount. 
 * @export
 * @interface DiscountResource
 */
export interface DiscountResource {
    /**
     * What was the state of the request?
     * @type {string}
     * @memberof DiscountResource
     */
    status: string;
    /**
     * 
     * @type {Discount}
     * @memberof DiscountResource
     */
    data?: Discount;
}

/**
 * Check if a given object implements the DiscountResource interface.
 */
export function instanceOfDiscountResource(value: object): value is DiscountResource {
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function DiscountResourceFromJSON(json: any): DiscountResource {
    return DiscountResourceFromJSONTyped(json, false);
}

export function DiscountResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiscountResource {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'],
        'data': json['data'] == null ? undefined : DiscountFromJSON(json['data']),
    };
}

export function DiscountResourceToJSON(json: any): DiscountResource {
    return DiscountResourceToJSONTyped(json, false);
}

export function DiscountResourceToJSONTyped(value?: DiscountResource | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status': value['status'],
        'data': DiscountToJSON(value['data']),
    };
}

