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
 * Related links for a paginated response.
 * @export
 * @interface PaginationLinks
 */
export interface PaginationLinks {
    /**
     * The first page.
     * @type {string}
     * @memberof PaginationLinks
     */
    first: string;
    /**
     * The last page.
     * @type {string}
     * @memberof PaginationLinks
     */
    last: string;
    /**
     * The previous page. This is specified as either `string` or `null` purely for spec testing purposes. The model which is autogenerated from this definition will be thrown out and written by-hand.
     * @type {string}
     * @memberof PaginationLinks
     */
    prev?: string | null;
    /**
     * The next page. This is specified as either `string` or `null` purely for spec testing purposes. The model which is autogenerated from this definition will be thrown out and written by-hand.
     * @type {string}
     * @memberof PaginationLinks
     */
    next?: string | null;
}

/**
 * Check if a given object implements the PaginationLinks interface.
 */
export function instanceOfPaginationLinks(value: object): value is PaginationLinks {
    if (!('first' in value) || value['first'] === undefined) return false;
    if (!('last' in value) || value['last'] === undefined) return false;
    return true;
}

export function PaginationLinksFromJSON(json: any): PaginationLinks {
    return PaginationLinksFromJSONTyped(json, false);
}

export function PaginationLinksFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginationLinks {
    if (json == null) {
        return json;
    }
    return {
        
        'first': json['first'],
        'last': json['last'],
        'prev': json['prev'] == null ? undefined : json['prev'],
        'next': json['next'] == null ? undefined : json['next'],
    };
}

export function PaginationLinksToJSON(json: any): PaginationLinks {
    return PaginationLinksToJSONTyped(json, false);
}

export function PaginationLinksToJSONTyped(value?: PaginationLinks | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'first': value['first'],
        'last': value['last'],
        'prev': value['prev'],
        'next': value['next'],
    };
}

