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
 * Payload for updating a listing.
 * @export
 * @interface ListingPutPayload
 */
export interface ListingPutPayload {
    /**
     * The title of the listing.
     * @type {string}
     * @memberof ListingPutPayload
     */
    title?: string | null;
    /**
     * The description of the listing.
     * @type {string}
     * @memberof ListingPutPayload
     */
    description?: string | null;
    /**
     * The status of the listing.
     * @type {string}
     * @memberof ListingPutPayload
     */
    status?: string | null;
    /**
     * The date the MLS listing will go live.
     * @type {Date}
     * @memberof ListingPutPayload
     */
    mlsLiveDate?: Date | null;
    /**
     * The MLS number of the listing.
     * @type {string}
     * @memberof ListingPutPayload
     */
    mlsNumber?: string | null;
    /**
     * The price of the listing property.
     * @type {number}
     * @memberof ListingPutPayload
     */
    price?: number | null;
    /**
     * A decimal value representing the number of bedrooms for the listing.
     * @type {number}
     * @memberof ListingPutPayload
     */
    bedrooms?: number | null;
    /**
     * A decimal value representing the number of bathrooms for the listing.
     * @type {number}
     * @memberof ListingPutPayload
     */
    bathrooms?: number | null;
    /**
     * A decimal value representing the square footage the listing.
     * @type {number}
     * @memberof ListingPutPayload
     */
    homeSquarefootage?: number | null;
    /**
     * A decimal value representing the acreage the listing.
     * @type {number}
     * @memberof ListingPutPayload
     */
    lotAcres?: number | null;
    /**
     * A decimal value representing the number of parking spots for the listing.
     * @type {number}
     * @memberof ListingPutPayload
     */
    parkingSpots?: number | null;
    /**
     * The year the house for the listing was built.
     * @type {number}
     * @memberof ListingPutPayload
     */
    yearBuilt?: number | null;
    /**
     * The type of the listing.
     * @type {string}
     * @memberof ListingPutPayload
     */
    propertyType?: string | null;
}
/**
 * Check if a given object implements the ListingPutPayload interface.
 */
export declare function instanceOfListingPutPayload(value: object): value is ListingPutPayload;
export declare function ListingPutPayloadFromJSON(json: any): ListingPutPayload;
export declare function ListingPutPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListingPutPayload;
export declare function ListingPutPayloadToJSON(json: any): ListingPutPayload;
export declare function ListingPutPayloadToJSONTyped(value?: ListingPutPayload | null, ignoreDiscriminator?: boolean): any;
