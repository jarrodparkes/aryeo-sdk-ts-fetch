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
import type { Listing } from './Listing';
import {
    ListingFromJSON,
    ListingFromJSONTyped,
    ListingToJSON,
    ListingToJSONTyped,
} from './Listing';

/**
 * A listing.
 * @export
 * @interface ListingResource
 */
export interface ListingResource {
    /**
     * What was the state of the request?
     * @type {string}
     * @memberof ListingResource
     */
    status: string;
    /**
     * 
     * @type {Listing}
     * @memberof ListingResource
     */
    data?: Listing;
}

/**
 * Check if a given object implements the ListingResource interface.
 */
export function instanceOfListingResource(value: object): value is ListingResource {
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function ListingResourceFromJSON(json: any): ListingResource {
    return ListingResourceFromJSONTyped(json, false);
}

export function ListingResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListingResource {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'],
        'data': json['data'] == null ? undefined : ListingFromJSON(json['data']),
    };
}

export function ListingResourceToJSON(json: any): ListingResource {
    return ListingResourceToJSONTyped(json, false);
}

export function ListingResourceToJSONTyped(value?: ListingResource | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status': value['status'],
        'data': ListingToJSON(value['data']),
    };
}

