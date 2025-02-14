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
 * Valuation data relating to the price of a listing.
 * @export
 * @interface ListingPrice
 */
export interface ListingPrice {
    /**
     * The current price of the listing.
     * @type {number}
     * @memberof ListingPrice
     */
    listPrice?: number | null;
}

/**
 * Check if a given object implements the ListingPrice interface.
 */
export function instanceOfListingPrice(value: object): value is ListingPrice {
    return true;
}

export function ListingPriceFromJSON(json: any): ListingPrice {
    return ListingPriceFromJSONTyped(json, false);
}

export function ListingPriceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListingPrice {
    if (json == null) {
        return json;
    }
    return {
        
        'listPrice': json['list_price'] == null ? undefined : json['list_price'],
    };
}

export function ListingPriceToJSON(json: any): ListingPrice {
    return ListingPriceToJSONTyped(json, false);
}

export function ListingPriceToJSONTyped(value?: ListingPrice | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'list_price': value['listPrice'],
    };
}

