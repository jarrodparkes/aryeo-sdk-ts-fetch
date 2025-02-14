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
 * Structural data of the primary building on a listing. Includes everything from square footage of certain spaces to construction dates. 
 * @export
 * @interface ListingBuilding
 */
export interface ListingBuilding {
    /**
     * Total number of bedrooms.
     * @type {number}
     * @memberof ListingBuilding
     */
    bedrooms?: number | null;
    /**
     * Sum of the number of bathrooms. Represented as a number in order to support half-baths.
     * @type {number}
     * @memberof ListingBuilding
     */
    bathrooms?: number | null;
    /**
     * Total number of square feet.
     * @type {number}
     * @memberof ListingBuilding
     */
    squareFeet?: number | null;
    /**
     * Year the property was built.
     * @type {number}
     * @memberof ListingBuilding
     */
    yearBuilt?: number | null;
    /**
     * Total number of bedrooms.
     * @type {number}
     * @memberof ListingBuilding
     * @deprecated
     */
    bedroomsNumber?: number;
}

/**
 * Check if a given object implements the ListingBuilding interface.
 */
export function instanceOfListingBuilding(value: object): value is ListingBuilding {
    return true;
}

export function ListingBuildingFromJSON(json: any): ListingBuilding {
    return ListingBuildingFromJSONTyped(json, false);
}

export function ListingBuildingFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListingBuilding {
    if (json == null) {
        return json;
    }
    return {
        
        'bedrooms': json['bedrooms'] == null ? undefined : json['bedrooms'],
        'bathrooms': json['bathrooms'] == null ? undefined : json['bathrooms'],
        'squareFeet': json['square_feet'] == null ? undefined : json['square_feet'],
        'yearBuilt': json['year_built'] == null ? undefined : json['year_built'],
        'bedroomsNumber': json['bedrooms_number'] == null ? undefined : json['bedrooms_number'],
    };
}

export function ListingBuildingToJSON(json: any): ListingBuilding {
    return ListingBuildingToJSONTyped(json, false);
}

export function ListingBuildingToJSONTyped(value?: ListingBuilding | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'bedrooms': value['bedrooms'],
        'bathrooms': value['bathrooms'],
        'square_feet': value['squareFeet'],
        'year_built': value['yearBuilt'],
        'bedrooms_number': value['bedroomsNumber'],
    };
}

